#! /bin/bash

# compitition URL for Euro2012
url=http://sports.betfair.com/football/competition?id=682772

# make a directory for intermediate files
WORK=work
mkdir -p ${WORK}

# fetch a web page
wget ${url} -q -O ${WORK}/comp

# get evnt IDs
awk '/platformConfig = /{exit} 1' comp  | \
    grep 'data-eventid='  | \
    sed -e 's/\"//g' -e 's/data-eventid=//g' | \
    sort | uniq > ${WORK}/event.ids


xargs < ${WORK}/event.ids -n 1 ./jparse.py --id