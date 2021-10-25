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
})
