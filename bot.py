import re
import mechanize

br = mechanize.Browser()
br.open("http://www.kicktipp.de/")

# select the first form
br.select_form(nr=0)

# User credentials
br.form['username'] = 'slitvinov@gmail.com'
br.form['password'] = ''

br.submit()
br.follow_link(text='aerotipper')
response = br.follow_link(text='Tipp\xc3\xbcbersicht')

forms = mechanize.ParseResponse(response, backwards_compat=False)
form = forms[0]
print form
form["tippspieltagIndex"] = ['1']

br.select_form("submitbutton")


