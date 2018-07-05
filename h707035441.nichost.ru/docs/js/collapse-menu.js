"use strict";

if (navigator.userAgent.match(/iPad|iPhone|iPod|Android|BlackBerry|webOS|Windows Phone/i)) {
  let collapseButton = document.body.querySelector('.navbar-toggle');
  let menuSpase = document.body.querySelector('.navbar-collapse');

  function handler(event) {
    if (!collapseButton.classList.contains('collapsed')
      &&
      !event.target.closest( '.navbar-collapse' )
    ) {
      collapseButton.click();
    }
  }

  document.body.addEventListener('touchstart', handler);
}