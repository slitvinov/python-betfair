#! /bin/bash

if [ ! -r "stats" ]; then
    wget http://www.soccerstats.com/leagueview.asp?league=euro  -O stats
fi

grep -v '^<' stats | grep -e '([0-9][0-9])' -e '([0-9])' | sed 's/(c.s.c.)//g' | \
    awk -vFS="[()]" '{print $2}' | awk -f hist.awk | sort -g | uniq -c | awk '{print $1/2.0}'
