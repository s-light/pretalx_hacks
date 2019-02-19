// ==UserScript==
// @name     pretalx_hacks
// @description some UI only hacks for pretalx
// @namespace   https://github.com/s-light
// @include     https://yourDomain/orga/event/*/schedule/
// @include     https://yourDomain/*/schedule/*
// @version  0.1.0
// require https://s-light.github.io/pretalx_hacks/helper.js
// require https://s-light.github.io/pretalx_hacks/helper_ui.js
// @require https://s-light.github.io/pretalx_hacks/fix_css.js
// require https://s-light.github.io/pretalx_hacks/csv_exporter.js
//
// https://wiki.greasespot.net/Metadata_Block#.40require
// ==/UserScript==

function start_script() {
    console.info('pretalx_hacks..');

    //helper();
    //helper_ui();
  	fix_css();

    console.info('all user scripting done.');
}

// console.clear();
console.info('******************************************');
start_script();
