<!--lint disable list-item-indent-->
<!--lint disable list-item-bullet-indent-->

# pretalx_hacks
some hacks for the pretalx project view ui

## how to use

this is currently only usable if you can install the [greasmonkey](https://www.greasespot.net/) Firefox browser extension.  
[https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

if you have it installed you can add own scripts -
these scripts are running only on the sites you tell them to.

To install this script for your pretalx website:
- go to your pretalx released schedule view.
- click the greasmonkey icon in your browser toolbar
- there choose `New user script`
- click greasmonkey icon again
- choose `unnamed script` → `edit`
- an extra tab opens where you can write your user script.
- open [main_greasemonkey.js](main_greasemonkey.js)
- copy the content of this script to your newly created user script
- in line 5 change `http://localhost:8000/*/schedule/*` to fit your installation.
    (if you visit the url you should see the released schedule.)
- save user script (Ctrl+S or the small symbol at the top right)
- with this there should be some additionally tabs be created in the 'script editor'
- go to your site and check if something has changed ;-)

## hacks
- To be defined..

## ideas
- orga backend
    - autmated importer
- schedule view
    raw *table* based view (for copy and paste)
