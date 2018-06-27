"use strict";

let scrollButton = document.body.querySelector('.scrollToTop');
scrollButton.style.cursor = 'pointer';

let isThrottled = false;

scrollButton.addEventListener('click', (event) => {
  if (event.isTrusted) {
    event.stopImmediatePropagation();
    
    if (!isThrottled) {
      scrollButton.dispatchEvent(new Event('click'));
    }
    
    isThrottled = true;
    
    setTimeout(() => {
      isThrottled = false;
    }, 2000); 
  }
});