import urllib2
import re

opener = urllib2.build_opener()
response = opener.open("http://www.soccerstats.com/leagueview.asp?league=euro")

times=[]
for line in response:
    if not re.search("<", line):
        if re.search("\([0-9]+\)", line):
            times.append(int(re.split("[\(\)]", line)[-2]))

# move goals in extra time to the last second
times = [90 if t>90 else t for t in times]


# number of parts
# 6: one part is 15 min
# 4: one part is 22.4 min
npart = 6

eps = 1e-8
dens=[0 for x in xrange(npart)]

for t in times:
    idx=int(t*(npart/90.0 - eps) )
    dens[idx]=dens[idx] + 0.5

print dens
