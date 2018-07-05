/**	
	* Template Name: WpF Medinova - Ultra Modern Responsive Bootstrap Educational Html5 Template
	* Version: 1.0	
	* Template Scripts
	* Author: WpFreeware Team
	* Author URI: http://wpfreeware.com/

	Custom JS
	
	0. is mobile cheking
	1. DROPDOWN MENU
	2. FIXED TOP MENU BAR
	3. TOP SLIDER // move to slider-init.js
	4. WHY CHOOSE SLIER(SLICK SLIDER) // move to slider-init.js
	5. COUNTER //	replace to counter.js
	6. DOCTORS TEAM SLIDER(SLICK SLIDER) // move to slider-init.js
	7. TESTIMONIAL SLIDER(SLICK SLIDER) // move to slider-init.js
	8. PRELOADER
	9. SCROLL TOP BUTTON
	10. ACCORDION
  12. fix horizontal orientation of mobile devices
	13. make phones clickable
	
**/

jQuery(function($){


	/* ----------------------------------------------------------- */
  /*  0. is mobile cheking
  /* ----------------------------------------------------------- */

	 let isMobile = false;
	 
	 if (navigator.userAgent.match(/iPad|iPhone|iPod|Android|BlackBerry|webOS|Windows Phone/i)) {
		isMobile = true;
	 }
	
	
	/* ----------------------------------------------------------- */
  /*  1. DROPDOWN MENU
  /* ----------------------------------------------------------- */

   // for hover dropdown menu
  $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

	/* ----------------------------------------------------------- */
	/*  2. Fixed Top Menubar
	/* ----------------------------------------------------------- */

	// For fixed top bar
       $(window).scroll(function(){
        if($(window).scrollTop() >50 /*or $(window).height()*/){
            $(".navbar-fixed-top").addClass('past-main');
            $(".navbar-right .dropdown-menu").css('top','70px');   
        }
    else{    	
      $(".navbar-fixed-top").removeClass('past-main');
      $(".navbar-right .dropdown-menu").css('top','75px');
      }
    });
    

  /* ----------------------------------------------------------- */
	/*  3. Top Slider
	/* ----------------------------------------------------------- */   
	
	 // move to slider-init.js
  
  /* ----------------------------------------------------------- */
	/*  4. Why Choose Slider(Slick Slider)
	/* ----------------------------------------------------------- */ 

	 // move to slider-init.js

	/* ----------------------------------------------------------- */
	/*  5. Counter
	/* ----------------------------------------------------------- */ 

	//	replace to counter.js


	/* ----------------------------------------------------------- */
	/*  6. DOCTORS TEAM SLIDER
	/* ----------------------------------------------------------- */

		 // move to slider-init.js

	/* ----------------------------------------------------------- */
	/*  7. Testimonial Slider 
	/* ----------------------------------------------------------- */ 

	 // move to slider-init.js

	/* ----------------------------------------------------------- */
	/*  8. PRELOADER 
	/* ----------------------------------------------------------- */ 

	  jQuery(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })
	  
	/* ----------------------------------------------------------- */
	/*  9. SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */

	//Check to see if the window is top if not then display button

	  $(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	  });
	   
	  //Click event to scroll to top

	  $('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	  });

	/* ----------------------------------------------------------- */
	/*  10. Bootstrap Accordion
	/* ----------------------------------------------------------- */  

	
	$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
	$(this).prev().find(".fa").removeClass("fa-plus").addClass("fa-minus");
	});
	
	//The reverse of the above on hidden event:
	
	$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
	$(this).prev().find(".fa").removeClass("fa-minus").addClass("fa-plus");
	});

  
  /* ----------------------------------------------------------- */
	/*  12. fix horizontal orientation of mobile devices
	/* ----------------------------------------------------------- */  

	if (isMobile && screen.width > screen.height) {
		for ( let li of document.body.querySelectorAll('#navbar li') ) {
			li.style.height = '45px';
		}
	}


	/* ----------------------------------------------------------- */
  /*  13. make phones clickable
  /* ----------------------------------------------------------- */ 
			
	if (isMobile) {
		for (let phone of document.body.querySelectorAll('[data-phone="phone-one"]')) {
			phone.setAttribute('href', 'tel:+79215747443');
		}

		for (let phone of document.body.querySelectorAll('[data-phone="phone-two"]')) {
			phone.setAttribute('href', 'tel:+78126181881');
		} 
	}
	
});