#! /usr/bin/python
import sys
import pprint
import logging
import os.path
from optparse import OptionParser
import re
import json
import urllib2

def findkey(l, key):
    """Returns a list of all values with a given key"""
    ret = [];
    def findkey_(l):
        if type(l)==list:
            map(findkey_, l)
        elif type(l)==dict:
            if key in l:
                ret.append(l[key])
            map(findkey_, l.values())
    findkey_(l)
    return ret


parser = OptionParser()
# event ID Portugal - Niederlande
parser.add_option("-i", "--id", dest="event_id",
                  help="event ID, default: is 26818281 (Portugal - Niederlande)", metavar="ID", default="26818281")
parser.add_option("-v", "--verbose",
                      action="store_true", dest="verbose", default=False)
(options, args) = parser.parse_args()

if options.verbose:
    logging.basicConfig(level=logging.DEBUG)
else:
    logging.basicConfig(level=logging.WARNING)


# check if the web page is in a cache
cache_file=os.path.join("work", "webpage." + options.event_id)
if os.path.exists(cache_file):
    logging.info("using a cache file: " + cache_file)
    f = open(cache_file, "r")
    file_as_string = f.read()
    f.close()
else:
    url_with_tab="http://sports.betfair.com/football/event?id=" + options.event_id + "#tab-score"
    if options.verbose:
        logging.info("fetching data from url: %s" % url_with_tab)
        # get file from the web
    response = urllib2.urlopen(url_with_tab)
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

def key_and_val(di, key, val):
    if (key in di):
        if di[key]==val:
            return True
    else:
        return False
# remove some garbage from the end of the string
# TODO: replace by more robust implementation
json_string = json_string[:-41]

json_data = json.loads(json_string)
# keep only relevant part of the json
json_data = json_data["page"]["config"]["marketData"]
names = findkey(json_data, "eventName")
print names[0]
json_data = filter(lambda el : key_and_val(el, "marketType", "CORRECT_SCORE"), json_data);
json_file=os.path.join("work", "json." + options.event_id + ".js")
jf = open(json_file, "w")
json.dump(json_data, jf, indent=4)
jf.close()
logging.info("json file: " + json_file + " was created")

scoreset={\
"0 - 0", \
"0 - 1", \
"0 - 2", \
"0 - 3", \
"1 - 0", \
"1 - 1", \
"1 - 2", \
"1 - 3", \
"2 - 0", \
"2 - 1", \
"2 - 2", \
"2 - 3", \
"3 - 0", \
"3 - 1", \
"3 - 2", \
"3 - 3"}

odds = [[0.0 for x in xrange(4)] for x in xrange(4)] 

                
def walker(l):
    """Collect odds from json tree"""
    if type(l)==list:
        map(walker, l)
    elif type(l)==dict:
        if "marketType" in l:
            if l["marketType"]=="CORRECT_SCORE":
                if "runners" in l:
                    rlist=l["runners"]
                    for runnerName in rlist:
                        val = runnerName["runnerName"]
                        if (val in scoreset) and ("prices" in runnerName):
                            price=runnerName["prices"]["back"][0]["price"]
                            res1=int(val[0])
                            res2=int(val[4])
                            odds[res1][res2]=price
        map(walker, l.values())

# fill odds with data
walker(json_data)


if options.verbose:
    print "===Correct score (back)==="
    for idx1, col in enumerate(odds):
        for idx2, val in enumerate(col):
            print idx1, idx2, val
    print "====================="


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

def getexpwin(odds):
    """Returns a list of tupples (<expected win points>, <bet score 1>, <bet_score 2>)"""
    expwin = [];
    for bet1 in xrange(4):
        for bet2 in xrange(4):
            win=0.0
            for res1 in xrange(4):
                for res2 in xrange(4):
                    np = npoint(res1, res2, bet1, bet2)
                    p = 2.0/odds[res1][res2]
                    win = win + p*np
            expwin.append( (win, bet1, bet2) )
    return sorted(expwin)

# sort and print result
print "<expected point number>, <bet score 1>, <bet score 2>"
wintable = getexpwin(odds)

if options.verbose:
    for t in wintable:
        print "%.3f %i %i" % t
else:
    for t in wintable[-3:]:
        print "%.3f %i %i" % t


logging.shutdown()
