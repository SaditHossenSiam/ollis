(function() {
    "use strict";
    $('.main-menu ul li > a').on('click', function() {
        $('.main-menu ul li > a.active').removeClass('active');
        $(this).addClass('active');
    });

    $('[data-background]').each(function() {
        $(this).css('background-image', 'url(' + $(this).attr("data-background") + ')');
    });

    $('.search-expanded').on('click', function() {
        $('.search-area').addClass('open');
    });
    $('.close-input').on('click', function() {
        $('.search-area').removeClass('open');
    });
    $('.header-bar').on('click', function() {
        $('.sidebar-info').addClass('opend');
    });
    $('.close-icon').on('click', function() {
        $('.sidebar-info').removeClass('opend');
    });
    //////////////////////
    // SCROLL UP
    $(window).on('scroll', function() {
        if (window.pageYOffset > 82) {
            $('#scroll').fadeIn(500);
        } else {
            $('#scroll').fadeOut(500);

        }
    });

    $('#scroll a').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html,body').stop.animate({
                scrollTop: target.offset().top - 0
            }, 2000);
        }
    });
    $('#scroll').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });

    //////////////////////
    // METIS MENU
    $("#mobile-menu-active").metisMenu();
    $("#mobile-menu-active li.has-dropdown > a").on('click', function(e) {
        e.preventDefault();
    });



    //////////////////////
    // 01. SLICK JS
    $('.slider-area-active').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //////////////////////
    // 01. PORTFOLIO JS
    $('.portfolio-area-active').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        center: true,
        items: 6,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: false,
            },
            576: {
                items: 1,
                center: false,
            },
            768: {
                items: 2,
                center: false,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1400: {
                items: 3,
            }
        }
    });


    //////////////////////
    // 01. TESTIMONIAL JS
    $('.testimonial-area-active').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: ['<button><i class="fas fa-long-arrow-alt-left"></i></button>', '<button><i class="fas fa-long-arrow-alt-right"></i></button>'],
        items: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            },
            1400: {
                items: 1,
            }
        }
    });




    //////////////////////
    // 03. PROGRESS BAR JS

    $(window).on('scroll', function() {
        $('svg.radial-progress').each(function(index, value) {
            $(this).find($('circle.complete')).removeAttr('style');

            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if (
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                var percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                var radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                var circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                var strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);
            }
        });
    }).trigger('scroll');


})();