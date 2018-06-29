"use strict";

    let counters = document.body.querySelectorAll('.counter');
		
		let timer = (counter, value) => {
		counter.classList.add('started');

		let i = 0;
		let speed = 3;
		if (navigator.userAgent.match(/iPad|iPhone|iPod|Android|BlackBerry|webOS|Windows Phone/i)) {
			speed = 11;
		}
		if (value > 600) {
			speed *= 2;
		}

		let timer = setInterval(() => {
      if (i <= value) {
        counter.textContent = i;
      } else {
				counter.textContent = value;
        clearInterval(timer);
      }
      i+= speed;
    }, 4);
	}

	window.onload = () => {
		if (counters[0].getBoundingClientRect().top < screen.height) {
			for (let counter of counters) {
				timer(counter, +counter.textContent);
			}
		} else {
			window.addEventListener('scroll', () => {
				for (let counter of counters) {
					if (
						counter.getBoundingClientRect().top < screen.height &&
						!counter.classList.contains('started')
					) {
						timer(counter, +counter.textContent);
					}
				}
			})
		}
	}