"use strict";

let doctorCards = document.body.querySelectorAll('.doctors-nav li');

for (let card of doctorCards) {
  card.addEventListener('mouseenter', () => {
    card.querySelector('h2')
      .classList.add('make-doctors-faces-smart');
    
    card.querySelector('p')
      .classList.add('make-doctors-faces-smart');
  });
  
  card.addEventListener('mouseleave', () => {
    card.querySelector('h2')
      .classList.remove('make-doctors-faces-smart');
    
    card.querySelector('p')
      .classList.remove('make-doctors-faces-smart');
  });
}