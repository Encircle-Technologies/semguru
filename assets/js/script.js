
$(document).ready(function ($) {

    // Sticky Header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('.header').addClass('is-sticky');
            $('.announcement').addClass('up');
        } else {
            $('.header').removeClass('is-sticky');
            $('.announcement').removeClass('up');
        }
    });

    /*Mobile Menu*/
    $(".navbar-toggler").click(function () {
        $('.navbar').toggleClass('active');
        $('body').toggleClass('menu-open');
    });
    $(".navbar").menumaker({
        title: "Menu",
        format: "multitoggle"
    });

    // Swiper
    if ($('.herobanner-wrapper').length) {
        var heroSlide = new Swiper(".hero-slider", {
            loop: true,
            speed: 2000,
            effect: "fade",
            autoplay: {
                delay: 4500,
                disableOnInteraction: false
            },
            pagination: {
                el: ".hero-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + '0' + (index + 1) + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><circle fill-opacity="0" stroke="#FC8A31" stroke-width="5" cx="22.5" cy="22.5" r="22.5"/></svg>' + "</span>";
                },
            },
        });
    }

    if ($('.casestudyTabs-Wrapper').length) {
        var clientsay_slider = new Swiper(".clientsay_slider", {
            navigation: {
                nextEl: ".clientsay-next",
                prevEl: ".clientsay-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
        });
    }
    
    if ($('.ourwork-wrapper').length) {
        var ourworkSlider = new Swiper(".ourwork-slider", {
            slidesPerView: 2.5,
            spaceBetween: 50,
            centeredSlides: false,
            speed: 2000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: ".ourwork-next",
                prevEl: ".ourwork-prev",
            },
            breakpoints: {
                "320": {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                },
                "768": {
                  slidesPerView: 1.8,
                  spaceBetween: 20,
                },
                "1024": {
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                },
                "1200": {
                  slidesPerView: 2.5,
                  spaceBetween: 50,
                },
            },
        });
    }

    if ($('.customer-wrapper').length) {
        var customerSlider = new Swiper(".customer-slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 2000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: ".customer-next",
                prevEl: ".customer-prev",
            },
        });
    }

    // Tabs 
    if ($('.casestudyTabs-Wrapper').length) {
        $('.tabs-stage > div').hide();
        $('.tabs-stage > div:first').show();
        $('.tabs-nav li:first').addClass('tab-active');

        // Change tab class and display content
        $('.tabs-nav a').on('click', function(event){
            event.preventDefault();
            $('.tabs-nav li').removeClass('tab-active');
            $(this).parent().addClass('tab-active');
            $('.tabs-stage > div').hide();
            $($(this).attr('href')).show();
        });
    }

    // Load More
    if ($(".bloglist-wrapper").length) {
        $(document).ready(function () {
            $(".bloglist__loadmoreitems").slice(0, 9).show();
            $("#bloglist__loadmore").on("click", function (e) {
                e.preventDefault();
                $(".bloglist__loadmoreitems:hidden").slice(0, 3).slideDown();
                if ($(".bloglist__loadmoreitems:hidden").length == 0) {
                    $('.bloglist__loadmorebtn').css('display', 'none');
                }
            });
        });
    }

    // Accordion
    if ($(".telecom-content-with-image").length) {
        $(".accordion-list .card").click(function() {
		    var content = $(this).next(".content-txt");
		    if (content.is(":visible")) {
				$(this).parent().removeClass("active");
				content.slideUp(300);
			}
			else {
				$(this).parent().siblings().removeClass("active");
				$(this).parent().siblings().children(".content-txt").slideUp(500);
				content.slideDown(300);
				$(this).parent().addClass("active");
			}
	  	});
    }

    // toggle
    if ($(".contact-content").length) {
        $('.contact-content .btn').click(function() {
            $('.contact-form').toggle('slow');
        });
    }

    // Scroll down
    if ($(".herobanner-wrapper").length) {
        $('.scroll-down').click (function() {
            $('html, body').animate({scrollTop: $('section.casestudyTabs-Wrapper').offset().top -95 }, '500');
            return false;
        });
    }

    // Back to Top
    if ($(".backto_top").length) {
        var btn = $('#button');

        $(window).scroll(function() {
        if ($(window).scrollTop() > 1500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
        });

        btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '500');
        });
    }
    
});


// Responsive menu start
(function ($) {
    $.fn.menumaker = function (options) {
        var cssmenu = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function () {
            $(this).find(".navbar-toggler").on('click', function () {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('#menu-main-menu');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('#menu-main-menu').show();
                    }
                }
            });
            cssmenu.find('li ul.sub-menu').parent().addClass('has-sub');
            function multiTg() {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.50495 5.64494L0.20524 1.3451C-0.0684144 1.07157 -0.0684144 0.628106 0.20524 0.354717C0.478651 0.0813054 0.922098 0.0813054 1.19549 0.354717L5.00007 4.15941L8.80452 0.354827C9.07805 0.081416 9.52145 0.081416 9.79486 0.354827C10.0684 0.628238 10.0684 1.07168 9.79486 1.34521L5.49508 5.64505C5.35831 5.78175 5.17925 5.85003 5.00009 5.85003C4.82085 5.85003 4.64165 5.78162 4.50495 5.64494Z" fill="#4E4E4E"/></svg></span>');
                cssmenu.find('.submenu-button').on('click', function () {
                    if ($(this).hasClass('submenu-opened')) {
                        cssmenu.find('.submenu-button').removeClass('submenu-opened');

                    } else {
                        cssmenu.find('.submenu-button').removeClass('submenu-opened');
                        $(this).addClass('submenu-opened');
                    }

                    if ($(this).siblings('ul').hasClass('open')) {
                        cssmenu.find('.submenu-button').siblings('ul').removeClass('open');
                        cssmenu.find('.submenu-button').siblings('a').removeClass('active');
                    } else {
                        cssmenu.find('.submenu-button').siblings('ul').removeClass('open');
                        cssmenu.find('.submenu-button').siblings('a').removeClass('active');
                        $(this).siblings('ul').addClass('open');
                        $(this).siblings('a').addClass('active');
                    }

                });
                cssmenu.find('a').on('click', function () {
                    if ($(this).attr('href') == '#') {
                        $(this).siblings('span').toggleClass('submenu-opened');
                        if ($(this).siblings('ul').hasClass('open')) {
                            $(this).siblings('ul').removeClass('open');
                        } else {
                            $(this).siblings('ul').addClass('open');
                        }
                    }                    
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            function resizeFix() {
                var mediasize = 1199.9;
                if ($(window).width() > mediasize) {
                    cssmenu.find('ul').addClass('open');
                }
                if ($(window).width() <= mediasize) {
                    cssmenu.find('ul').removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };

})($);
// Responsive menu end


