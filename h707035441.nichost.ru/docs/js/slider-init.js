/**	
 * move from custom.js
	3. TOP SLIDER
	4. WHY CHOOSE SLIER(SLICK SLIDER)
	6. DOCTORS TEAM SLIDER(SLICK SLIDER)
	7. TESTIMONIAL SLIDER(SLICK SLIDER)
**/

jQuery(function($){

  /* ----------------------------------------------------------- */
	/*  3. Top Slider
	/* ----------------------------------------------------------- */   
	
	let arrows = true;
	if (navigator.userAgent.match(/iPad|iPhone|iPod|Android|BlackBerry|webOS|Windows Phone/i)) {
		arrows = false;
	}

	$('.top-slider').slick({
	  dots: false,
	  arrows: arrows,
	  autoplay: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});
  
  /* ----------------------------------------------------------- */
	/*  4. Why Choose Slider(Slick Slider)
	/* ----------------------------------------------------------- */ 

	$('.whychoose-slider').slick({
	  dots: false,
      infinite: true,      
      speed: 800,
      arrows:true,      
      slidesToShow: 1,
      slide: 'div',
      autoplay: true,
      fade: false,
      autoplaySpeed: 5000,
      cssEase: 'linear'
	});

	/* ----------------------------------------------------------- */
	/*  6. DOCTORS TEAM SLIDER
	/* ----------------------------------------------------------- */

	$('.doctors-nav').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slide: 'li',
		// autoplay: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}); 

/* ----------------------------------------------------------- */
/*  7. Testimonial Slider 
/* ----------------------------------------------------------- */ 

$('.testimonial-nav').slick({
	dots: true,
		infinite: true,      
		speed: 200,
		arrows:false,      
		slidesToShow: 1,
		slide: 'li',
		autoplay: true,
		fade: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
});

/* ----------------------------------------------------------- */
});