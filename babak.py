#! /usr/bin/python
import logging
import os.path
from optparse import OptionParser
import re
import json
import urllib2

# For the rule "Standard - Spiele", the following SCORES result:
#     Result: "2:1" - Bet: "1:2" -> 0 Points (wrong tendency)
#     Result: "2:1" - Bet: "1:0" -> 2 Points (win goal difference)
#     Result: "1:1" - Bet: "0:0" -> 1 Points (draw tendency)
#     Result: "1:2" - Bet: "1:2" -> 3 Points (win result)
def npoint_aer(res1, res2, bet1, bet2):
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
    elif ( (bet1<bet2) and (res1<res2) ):
	# result is right
        return 1
    else:
        return 0

# For the rule "CSE", the following SCORES result:
#     Result: "2:1" - Bet: "1:2" -> 0 Points (wrong tendency)
#     Result: "2:1" - Bet: "1:0" -> 3 Points (win goal difference)
#     Result: "1:1" - Bet: "0:0" -> 2 Points (draw tendency)
#     Result: "1:2" - Bet: "1:2" -> 4 Points (win result)
def npoint_cse(res1, res2, bet1, bet2):
    """Returns a number of points"""
    if ( (bet1==res1) and (bet2==res2)):
	# score is right
        return 4
    elif ( (bet1==bet2) and (res1==res2) ):
	# draw
        return 2
    elif (bet1-res1== bet2-res2):
	# goal difference is right
        return 3
    elif ( (bet1>bet2) and (res1>res2) ):
	# result is right
        return 2
    elif ( (bet1<bet2) and (res1<res2) ):
	# result is right
        return 2
    else:
        return 0


def walker(lst):
    """Collect odds from json tree"""
    SCORESET = frozenset({"0 - 0", "0 - 1", "0 - 2", "0 - 3",
                "1 - 0", "1 - 1", "1 - 2", "1 - 3",
                "2 - 0", "2 - 1", "2 - 2", "2 - 3",
                "3 - 0", "3 - 1", "3 - 2", "3 - 3"})
    odds = [[0.0 for x in xrange(4)] for x in xrange(4)]
    def walker_(lst):
        if type(lst)==list:
            [walker_(el) for el in lst]
        elif type(lst)==dict:
            if "marketType" in lst:
                if lst["marketType"] == "CORRECT_SCORE":
                    if "runners" in lst:
                        rlist = lst["runners"]
                        for runner_name in rlist:
                            val = runner_name["runnerName"]
                            if (val in SCORESET) and ("prices" in runner_name):
                                price = runner_name["prices"]["back"][0]["price"]
                                res1 = int(val[0])
                                res2 = int(val[4])
                                odds[res1][res2] = price
            for val in lst.values():
                walker_(val)
    walker_(lst)
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

def find_with_history(lst, key):
    def find_with_history_(lst, hist):
        local_hist=list(hist)
        if type(lst)==list:
            for n, el in enumerate(lst):
                local_hist.append(i)
                find_with_history_(el, local_hist)
        elif type(lst)==dict:
            if key in lst:
                local_hist.append(key)
                print local_hist
            else:
                for k, val in lst.iteritems():
                    local_hist.append(k)
                    find_with_history_(val, local_hist)
    find_with_history_(lst, [])


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

def finddict(lst, key, val):
    """Returns a list of all values with a given key"""
    ret = []
    def finddict_(lst):
        if type(lst)==list:
            map(finddict_, lst)
        elif type(lst)==dict:
            if key_and_val(lst, key, val):
                ret.append(lst)
            map(finddict_, lst.values())
    finddict_(lst)
    return ret

def getexpwin(prob, npoint, your_bet, his_bet):
    """Returns a list of tupples (<expected win points>, 
    <bet score 1>, <bet_score 2>)"""
    expwin = 0
    win = 0.0
    pout = ""
    for res1 in xrange(4):
        for res2 in xrange(4):
            your_points = npoint(res1, res2, your_bet[0], your_bet[1])
            his_points = npoint(res1, res2, his_bet[0], his_bet[1])
            if your_points - his_points == 2:
                number_point = 0.5
            elif your_points - his_points > 2:
                number_point = 1
            else:
                number_point = 0
            probability = prob[res1][res2]
            expwin = expwin + probability*number_point
    return expwin


def main():
    parser = OptionParser()
    # event ID Portugal - Niederlande
    parser.add_option("-i", "--id", dest="event_id",
                      help="event ID, default: 26818281"
                           " (Portugal v Netherlands)",
                      metavar="ID", default="26818281")
    parser.add_option("-n", "--number-show", dest="number_show",
                      type=int,
                      help="number of best results to show (default: 3)",
                      metavar="N", default=3)
    parser.add_option("-v", "--verbose",
                      help="show verbose output",
                      action="store_true", dest="verbose", default=False)
    parser.add_option("-u", "--update",
                      help="do not use cache file",
                      action="store_true", dest="update", default=False)
    parser.add_option("-w", "--work",
                      help="work directory name",
                      metavar="WORK", dest="workdir", default="work")
    parser.add_option("-r", "--rules",
                      type='choice',
                      choices=['aer', 'cse'],
                      help="rules, possible values are 'aer' (default), 'cse'",
                      metavar="RULES", dest="rules", default="aer")
    (options, args) = parser.parse_args()

    if options.verbose:
        logging.basicConfig(level=logging.DEBUG)
    else:
        logging.basicConfig(level=logging.WARNING)

    if options.rules == "aer":
        npoint = npoint_aer
        logging.info("using a aer rules")
    else:
        npoint= npoint_cse
        logging.info("using a cse rules")

    url_with_tab = "http://sports.betfair.com/football/event?id=" \
        + options.event_id + "#tab-score"
    cache_file = os.path.join(options.workdir, "webpage." + options.event_id)
    # check if the web page is in a cache
    if not(options.update) and os.path.exists(cache_file):
        logging.info("using a cache file: " + cache_file)
        f = open(cache_file, "r")
        file_as_string = f.read()
        f.close()
    else:
        if options.verbose:
            logging.info("fetching data from url: %s", url_with_tab)
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
        if not os.path.exists(options.workdir):
            os.makedirs(options.workdir)
        f = open(cache_file, "w")
        f.write(file_as_string)
        f.close()
        logging.info("cache file: " + cache_file + " was created")

    restr = "platformConfig = "
    # we split the text add take the second part
    json_string = re.split(restr, file_as_string)[1]

    # remove some garbage from the end of the string
    json_string = re.sub(";[^;]*$", "", json_string)

    json_string_file = os.path.join(options.workdir, "json-full." + options.event_id + ".tmp")
    f = open(json_string_file, "w")
    f.write(json_string)

    json_data = json.loads(json_string)
    json_file = os.path.join(options.workdir, "json-full." + options.event_id + ".js")
    write_json(json_file, json_data)

    # keep only relevant part of the json
    data =  findkey(json_data, "matchStatus")
    cdict = finddict(json_data, "eventId", options.event_id)
    names = findkey(cdict, "eventName")
    if len(names)>0:
        print names[0], "(%s)" % data[0]
        names = names[0].split(" v ")
    else:
        logging.warning("cannot find eventName, I will guess, look it up to be sure:\n %s" % url_with_tab)
        names = [el[:-3] for el in findkey(json_data, "runnerName") if re.match(".*\+3$", el)]
        print "%s v %s (%s)" % (names[0], names[1],  data[0])
    
    json_data = json_data["page"]["config"]["marketData"]
    print "id: %s" % options.event_id
    if options.verbose:
        print "url: %s" % url_with_tab

    json_data = [el for el in json_data if key_and_val(el, "marketType","CORRECT_SCORE")]
    json_file = os.path.join(options.workdir, "json." + options.event_id + ".js")
    write_json(json_file, json_data)
    logging.info("json file: " + json_file + " was created")



    odds = walker(json_data)
    prob = [[0.0 for x in xrange(4)] for x in xrange(4)]

    s = 0.0
    for idx1, col in enumerate(odds):
        for idx2, val in enumerate(col):
            if (idx1==idx2):
                prob[idx1][idx2] = 0.0
            else:
                prob[idx1][idx2] = 1.0/odds[idx1][idx2]
            s += prob[idx1][idx2]

    for idx1, col in enumerate(odds):
        for idx2, val in enumerate(col):
            prob[idx1][idx2] /= s

    
    # read his possible bets with weights

    his_bet_list = []
    his_f = open("hisbet.dat", "r")
    for line in his_f:
        b1, b2, w = line.split()
        his_bet_list.append( (int(b1), int(b2), float(w) ) )
    his_f.close()
    
    wintable = []
    for your_bet1 in xrange(4):
        for your_bet2 in xrange(4):
            wpoints = 0.0
            for (his_bet1, his_bet2, w) in his_bet_list:
                wpoints = wpoints + w*getexpwin(prob, npoint, (your_bet1, your_bet2), (his_bet1, his_bet2))
                wintable.append( (wpoints, your_bet1, your_bet2) )
    wintable = sorted(wintable)

    for t in wintable[-options.number_show:]:
        print "%.3f %i %i" % t


if __name__ == '__main__':
    main()

