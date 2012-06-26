python-betfair
==============

Playing with betfair and kicktipp.de

Run

./compid.sh

to process all events on this page

http://sports.betfair.com/football/competition?id=682772

Run

./jparse.py --id 26818281

to process "Portugal - Niederlande" game

To get verbose output:

./jparse.py --id 26818281 -v

Correct score (back) must be the same as here

http://sports.betfair.com/football/event?id=26818281#tab-score

Kicktipp table format (8 columns):
pos, +/-, name, game1, game2, Pts, Wins, Tot
