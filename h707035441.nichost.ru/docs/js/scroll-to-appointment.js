"use strict";

let scroll = 590;
if (navigator.userAgent.match(/iPad|iPhone|iPod|Android|BlackBerry|webOS|Windows Phone/i)) {
  scroll = 650;
}

const mediaIcon = document.body.querySelector('.media-icon');
const appointmentField = document.body.querySelector('#appointment');

mediaIcon.addEventListener('click', function(){
  window.scrollTo(0, scroll)
});

