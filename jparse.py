#! /usr/bin/python
import logging
import os.path
from optparse import OptionParser
import re
import json
import urllib2

# For the rule "Standard - Spiele", the following scores result:
#     Result: "2:1" - Bet: "1:2" -> 0 Points (wrong tendency)
#     Result: "2:1" - Bet: "1:0" -> 2 Points (win goal difference)
#     Result: "1:1" - Bet: "0:0" -> 1 Points (draw tendency)
#     Result: "1:2" - Bet: "1:2" -> 3 Points (win result)
def npoint(res1, res2, bet1, bet2):
    """Returns a number of points"""
    if ( (bet1==res1) and (bet2==res2)):
	# score is right
        return 3 
    elif ( (bet1==bet2) and (res1==res2) ):
	# draw
        return 1
    elif (bet1-res1== bet2-res2):
	# goal difference is right
        return 2
    elif ( (bet1>bet2) and (res1>res2) ):
	# result is right
        return 1
    else:
        return 0

def getexpwin(prob):
    """Returns a list of tupples (<expected win points>, 
    <bet score 1>, <bet_score 2>)"""
    expwin = []
    for bet1 in xrange(4):
        for bet2 in xrange(4):
            win = 0.0
            pout = ""
            for res1 in xrange(4):
                for res2 in xrange(4):
                    np = npoint(res1, res2, bet1, bet2)
                    p = prob[res1][res2]
                    win = win + p*np
                    if np>0 and len(pout)>0:
                        pout = pout + "+"
                    if np == 1:
                        pout = pout + ("%.2f[%i %i]" % (p, res1, res2))
                    elif np > 1:
                        pout = pout + ("%i*%.2f[%i %i]" % (np, p, res1, res2))
            expwin.append( (win, bet1, bet2, pout) )
    return sorted(expwin)

def walker(l):
    """Collect odds from json tree"""
    scoreset = {"0 - 0", "0 - 1", "0 - 2", "0 - 3",
                "1 - 0", "1 - 1", "1 - 2", "1 - 3",
                "2 - 0", "2 - 1", "2 - 2", "2 - 3",
                "3 - 0", "3 - 1", "3 - 2", "3 - 3"}
    odds = [[0.0 for x in xrange(4)] for x in xrange(4)]
    def walker_(l):
        if type(l)==list:
            map(walker_, l)
        elif type(l)==dict:
            if "marketType" in l:
                if l["marketType"] == "CORRECT_SCORE":
                    if "runners" in l:
                        rlist=l["runners"]
                        for runnerName in rlist:
                            val = runnerName["runnerName"]
                            if (val in scoreset) and ("prices" in runnerName):
                                price=runnerName["prices"]["back"][0]["price"]
                                res1=int(val[0])
                                res2=int(val[4])
                                odds[res1][res2]=price
            [walker_(val) for val in l.values()]
    walker_(l)
    return odds


def key_and_val(dct, key, val):
    """true is dct[key]=val"""
    if (key in dct):
        if dct[key] == val:
            return True
    else:
        return False

def write_json(fname, data):
    """write json data to a file"""
    json_f = open(fname, "w")
    json.dump(data, json_f, indent=4)
    json_f.close()

def findkey(lst, key):
    """Returns a list of all values with a given key"""
    ret = []
    def findkey_(lst):
        if type(lst)==list:
            map(findkey_, lst)
        elif type(lst)==dict:
            if key in lst:
                ret.append(lst[key])
            map(findkey_, lst.values())
    findkey_(lst)
    return ret

def finddict(l, key, val):
    """Returns a list of all values with a given key"""
    ret = []
    def finddict_(l):
        if type(l)==list:
            map(finddict_, l)
        elif type(l)==dict:
            if key_and_val(l, key, val):
                ret.append(l)
            map(finddict_, l.values())
    finddict_(l)
    return ret

def main():
    Parser = OptionParser()
    # event ID Portugal - Niederlande
    Parser.add_option("-i", "--id", dest="event_id",
                      help="event ID, default: 26818281 (Portugal - Niederlande)",
                      metavar="ID", default="26818281")
    Parser.add_option("-v", "--verbose",
                      action="store_true", dest="verbose", default=False)
    (options, args) = Parser.parse_args()

    if options.verbose:
        logging.basicConfig(level=logging.DEBUG)
    else:
        logging.basicConfig(level=logging.WARNING)

    url_with_tab = "http://sports.betfair.com/football/event?id=" \
        + options.event_id + "#tab-score"
    cache_file = os.path.join("work", "webpage." + options.event_id)
    # check if the web page is in a cache
    if os.path.exists(cache_file):
        logging.info("using a cache file: " + cache_file)
        f = open(cache_file, "r")
        file_as_string = f.read()
        f.close()
    else:
        if options.verbose:
            logging.info("fetching data from url: %s" % url_with_tab)
        # get file from the web
        opener = urllib2.build_opener()
        # TimeZone: Europe, Berlin
        # Region: GBR
        # Locale: en
        opener.addheaders.append(('Cookie', \
                                      r'betexPtk=betexTimeZone%3DEurope%2FBerlin%7EbetexRegion%3DGBR%7EbetexLocale%3Den'))
        response = opener.open(url_with_tab)
        file_as_string = response.read()
        # create work directory if it does not exist
        if not os.path.exists("work"):
            os.makedirs("work")
        f = open(cache_file, "w")
        f.write(file_as_string)
        f.close()
        logging.info("cache file: " + cache_file + " was created")

    restr = "platformConfig = "
    # we split the text add take the second part
    json_string = re.split(restr, file_as_string)[1]

    # remove some garbage from the end of the string
    # TODO: replace by more robust solution
    json_string = json_string[:-41]

    json_data = json.loads(json_string)
    json_file=os.path.join("work", "json-full." + options.event_id + ".js")
    write_json(json_file, json_data)

    # keep only relevant part of the json
    data =  findkey(json_data, "matchStatus")
    cdict = finddict(json_data, "eventId", options.event_id)
    names = findkey(cdict, "eventName")
    json_data = json_data["page"]["config"]["marketData"]
    try:
        print names[0], "(%s)" % data[0]
    except:
        print data[0]

    print "id: %s" % options.event_id
    if options.verbose:
        print "url: %s" % url_with_tab
    #json_data = filter(lambda el : ,json_data)
    json_data = [el for el in json_data if key_and_val(el, "marketType","CORRECT_SCORE")]
    json_file = os.path.join("work", "json." + options.event_id + ".js")
    write_json(json_file, json_data)
    logging.info("json file: " + json_file + " was created")

    odds = walker(json_data)
    prob = [[0.0 for x in xrange(4)] for x in xrange(4)]

    s = 0.0
    for idx1, col in enumerate(odds):
        for idx2, val in enumerate(col):
            prob[idx1][idx2] = 2.0/odds[idx1][idx2]
            s += prob[idx1][idx2]

    for idx1, col in enumerate(odds):
        for idx2, val in enumerate(col):
            prob[idx1][idx2] /= s

    if options.verbose:
        print "===Correct score (back)==="
        for idx1, col in enumerate(odds):
            for idx2, val in enumerate(col):
                print idx1, idx2, val
        print "====================="

    # sort and print result
    print "<expected point number>, <bet score 1>, <bet score 2>"
    wintable = getexpwin(prob)

    if options.verbose:
        for t in wintable:
            print "%.2f %i %i %s" % t
    else:
        for t in wintable[-5:]:
            print "%.2f %i %i" % t[0:3]

    # save wintable to a file
    wintable_file = os.path.join("work", "wintable." + options.event_id + ".dat")
    f = open(wintable_file, "w")
    for t in wintable:
        f.write( "%.2f %i %i\n" % t[0:3])
    logging.info("wintable file: " + wintable_file + " was created")
    f.close()
    logging.shutdown()

if __name__ == '__main__':
    main()

