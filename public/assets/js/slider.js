(function($) {


    $('.brand-slider').owlCarousel({
        items: 5,
        nav: false,
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        margin: 30,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3,
            },
            // breakpoint from 768 up
            768: {
                items: 4
            },
            // breakpoint from 768 up
            992: {
                items: 5
            },
        }
    });

    $('.gellery-slider').owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 2
          },
          500: {
            items: 3
          },
          600: {
            items: 4
          },
          800: {
            items: 4
          },
          1200: {
            items: 4
          }
        }
      });
      $('.gellery-slider2').owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1500,
        responsive: {
          0: {
            items: 2
          },
          500: {
            items: 3
          },
          600: {
            items: 4
          },
          800: {
            items: 4
          },
          1200: {
            items: 4
          }
        }
      });
      
    $('.brand-slider-two').owlCarousel({
        items: 5,
        nav: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3,
            },
            // breakpoint from 768 up
            768: {
                items: 4
            },
            // breakpoint from 768 up
            992: {
                items: 5
            },
        }
    });

    $('.membership-slider').owlCarousel({
        items: 5,
        nav: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3,
            },
            // breakpoint from 768 up
            768: {
                items: 4
            },
            // breakpoint from 768 up
            992: {
                items: 5
            },
        }
    });
    if ($.fn.magnificPopup) {
        $('.viewproject').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
        });
    }
    if ($.fn.isotope) {

        $(".grid").isotope({
            filter: '*',

        });
        $('.project-nav li').on('click', function() {

            $(".project-nav li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".grid").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'easeOutCirc',
                    queue: false,
                }
            });
            return false;
        });
    }


	$('.searchbtn').on('click', function(){
		$('.searchform').toggleClass('show');
	});
	$('.searchform button').on('click', function(){
		$('.searchform').removeClass('show');
	});
	
	if ($.fn.checkboxradio) {
		$( "input" ).checkboxradio();
	}
	
		jQuery(window).on('load', function() {
	
			$('#preloader').fadeOut('slow', function() {
				$(this).remove();
			});
	
		});
	})(jQuery);
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200){  
			$('.menu-area').addClass("sticky");
		}
		else{
			$('.menu-area').removeClass("sticky");
		}
	});	