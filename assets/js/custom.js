$(document).ready(function () {
    let windowPosition = $(window).scrollTop()

    $(window).on('scroll', function (e) {
        if ($(window).scrollTop() > 92) {
            $('.site-header').addClass('scroll');
        } else {
            $('.site-header').removeClass('scroll');
        }
    });

    $(window).on('scroll', function (e) {
        if ($(window).scrollTop() > windowPosition) {
            $('.navbar-locamos').slideUp();
        } else {
            $('.navbar-locamos').slideDown();
        }

        windowPosition = $(window).scrollTop()
    })
});

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};