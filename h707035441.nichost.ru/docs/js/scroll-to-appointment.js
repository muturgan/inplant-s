"use strict";

const mediaIcon = document.body.querySelector('.media-icon');
const appointmentField = document.body.querySelector('#appointment');

mediaIcon.addEventListener('click', function(){
  window.scrollTo(0, appointmentField.getBoundingClientRect().bottom)
  //appointmentField.scrollIntoView(true);
});

