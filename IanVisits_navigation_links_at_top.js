// ==UserScript==
// @name        IanVisits navigation links at top
// @namespace   richardfearn.co.uk
// @description Duplicate previous/next navigation links at top of each post
// @include     https://www.ianvisits.co.uk/blog/*
// @version     1
// @grant       none
// ==/UserScript==

var post_el = document.getElementsByClassName("post")[0];
var nav_el = document.getElementsByClassName("navigation")[0];
var nav_el_clone = nav_el.cloneNode(true);
post_el.insertBefore(nav_el_clone, post_el.childNodes[0]);
