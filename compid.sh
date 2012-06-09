#! /bin/bash

set -e
set -u

# compitition URL for Euro2012
url=http://sports.betfair.com/football/competition?id=682772

# make a directory for intermediate files
WORK=work
mkdir -p ${WORK}

# fetch a web page if it is not in a cache
if [ ! -r "${WORK}/comp" ]; then
    wget ${url} -O ${WORK}/comp
else
    printf "using cache file: %s\n" ${WORK}/comp
fi

# get evnt IDs
awk '/platformConfig = /{exit} 1' ${WORK}/comp  | \
    grep 'data-eventid='  | \
    sed -e 's/\"//g' -e 's/data-eventid=//g' | \
    sort | uniq > ${WORK}/event.ids

# run jparse.py with all IDs in event.ids
xargs < ${WORK}/event.ids -n 1 ./jparse.py --id