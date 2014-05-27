#! /bin/bash

set -e
set -u

# competition URL for WC2014
url=http://www.betfair.com/exchange/football/competition?id=67646

# make a directory for intermediate files
WORKDIR=work
mkdir -p ${WORKDIR}

# fetch a web page if it is not in a cache
if [ ! -r "${WORKDIR}/comp" ]; then
    wget ${url} -O ${WORKDIR}/comp
else
    printf "using cache file: %s\n" ${WORKDIR}/comp
fi

# get event IDs
awk '/platformConfig = /{exit} 1' ${WORKDIR}/comp  | \
    grep 'data-eventid='  | \
    sed -e 's/.*data-eventid=\"//g' | \
    sed -e 's/\".*//g' | \
    awk '!s[$0]++'  > ${WORKDIR}/event.ids

# run jparse.py with all IDs in event.ids
xargs < ${WORKDIR}/event.ids -n 1 python2.7 ./jparse.py --id 
