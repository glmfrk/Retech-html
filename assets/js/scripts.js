$(document).ready(function () {
    $('a').click(function () {
        $(this).addClass('.active')
    })


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
})
