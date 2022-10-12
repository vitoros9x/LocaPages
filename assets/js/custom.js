$(document).ready(function () {
    $(window).on('scroll', function(e) {
        if ($(window).scrollTop() > 92) {
            $('.site-header').addClass('scroll');
        } else {
            $('.site-header').removeClass('scroll');
        }
    });
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