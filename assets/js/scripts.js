$(document).ready(function () {
    $('a').click(function () {
        $(this).addClass('.active')
    })

    //=============================
    // Sticky Start
    //=============================

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $(".fixed-menu").removeClass("sticky");
        } else {
            $(".fixed-menu").addClass("sticky");
        }
    });
      //=============================
    // MOBILE Nav 
    //=============================

    $('.navbar-toggler').on("click", function () {
        $('.main-nav').slideToggle(500);
    });

    // OWL CAROUSEL SLIDER 
    $('.carosss').owlCarousel({
        loop: true,
        margin: 70,
        center: true,
        autoplay: true,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:2
            },
        }

    });

  // TESTIMONILA START

  $(".testimonial-carosss").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 1.7
        },
        1000: {
            items: 1.7
        }
    }
});

 //=============================
    // Partner slider carousel
    //=============================


    $(".partner-logo").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            768: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });

    //======================
    // COUNTER-UP 
    //======================

    $('.counter').countUp({
        'time': 6000,
        'delay': 10
    });

})
