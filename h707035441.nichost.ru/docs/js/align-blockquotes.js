"use strict";

if (navigator.userAgent.match(/iPad|iPhone|iPod|Android|BlackBerry|webOS|Windows Phone/i)) {
  let blockquotes = document.body.querySelectorAll('blockquote[class^="blockquote"]');
  for (let blockquote of blockquotes) {
    blockquote.innerHTML += '<br><br><br><br><br>';
  }
}