$(function() {

    const intro = $("#intro");
    const header = $("#header");
    const nav = $("#nav");



    /* Burger */

    $("#burger").on("click", function() {
        header.toggleClass("show");
        nav.toggleClass("show");
    });



    /* Fixed header */

    $(window).on("scroll load resize", function() {
        let introHeight = $(intro).innerHeight();
        let ScrollTop = $(this).scrollTop();

        if (ScrollTop > introHeight) {
            $("#header").addClass("fixed");
        } else {
            $("#header").removeClass("fixed");
        }
    });



    /* Slick scroll */

    $("[data-scroll]").on("click", function(e) {
        e.preventDefault();

        let elementScroll = $(this).data("scroll");
        let scrollHeight = $(elementScroll).offset().top;

        $("html, body").animate({
            scrollTop: scrollHeight - 50
        }, 700);

        $(header).removeClass("show");
        $(nav).removeClass("show");
    });


});
