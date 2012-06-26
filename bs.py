from BeautifulSoup import BeautifulSoup
import urllib2
import codecs
import re

response = urllib2.urlopen('file:/home/vital303/work/python-betfair/01.html')
html = response.read()
soup = BeautifulSoup(html)
#print(soup.prettify())

r = re.compile("[oe] kicktipp-pos.*")
tbl = soup.findAll("tr", {"class" : r})
print tbl[2].find("a")
print tbl[2].findAll("td", {"class" : "t"})[0]

#records = [] # store all of the records in this list
#for row in tbl.findAll('tbody'):
#    pass
    #print row
    #col = row.findAll('td')
    #prvy = col[0].string.strip()
    #druhy = col[1].string.strip()
    #record = '%s;%s' % (prvy, druhy) # store the record with a ';' between prvy and druhy
    #records.append(record)

#fl = codecs.open('output.txt', 'wb', 'utf8')
#line = ';'.join(records)
#fl.write(line + u'\r\n')
#fl.close()
