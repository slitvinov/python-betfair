#! /usr/bin/python
import glob
from bs4 import BeautifulSoup
import urllib2
import codecs
import re

files=glob.glob("data/*.html")
files.sort()

r = re.compile("kicktipp-pos[0-9][0-9]*$")
td_dict =  {}
teams_list=[]
results_list = []
names=[]
pts=[]

fname=files[-1]
response = urllib2.urlopen("file:"+fname)
html = response.read()
soup = BeautifulSoup(html)
tbl = soup.find_all("tr", {"class" : r})
for row in tbl:
    names.append(row.a.string)
    cells = row.find_all("td")
    pts.append(cells[-1].string)

for fname in files:
    response = urllib2.urlopen("file:"+fname);
    html = response.read()
    soup = BeautifulSoup(html)
    tbl = soup.find_all("tr", {"class" : r})
    for row in tbl:
        name = row.a.string
        if not (name in td_dict):
            td_dict[name]=[];
        cells = row.find_all("td")
        # leave only td_dict in the list
        indices = 0, 1, 2,  len(cells)-1, len(cells)-2, len(cells)-3
        cells = [i for j, i in enumerate(cells) if j not in indices]
        for el in cells:
            td_dict[name].append(el.prettify())
    teams=[t.string for t in soup.find_all("acronym")]
    tlen=len(teams)
    for t in zip(teams[:tlen/2], teams[tlen/2:]):
        teams_list.append(t)

    th = soup.find_all("thead")[1]
    home = [h.string for h in th.find_all("span", {"class", "kicktipp-heim"})]
    guest = [g.string for g in th.find_all("span", {"class", "kicktipp-gast"})]
    for pair in zip(home, guest):
        results_list.append(pair)

head = [ "<td>%s<br></br>%s</td>" % pair for pair in teams_list]
head = "".join(head)
head = "<tr><td></td>%s</tr>" % head

scores = [ "<td>%s-%s</td>" % pair for pair in results_list]
scores = "".join(scores)
scores = "<tr><td></td>%s</tr>" % scores

table_body = ""
for (q, n) in enumerate(names):
    s = '<td class="mg_class">%s</td>' % n
    for res in td_dict[n]:
        s = s + res
    s = s + "<td>%s</td>" % pts[q]
    table_body = table_body + '<tr class="o kicktipp-pos1">%s</tr>' % s

bf = codecs.open('befor.html', 'r', encoding='utf-8')
af = codecs.open('after.html', 'r', encoding='utf-8')

bf_st = bf.read()
af_st = af.read()

bf.close()
af.close()

print '%s%s%s%s%s' % (bf_st, head, scores, table_body, af_st)
