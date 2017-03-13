$(document).on('click', '.scroll-btn', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top}, 500);
});




// fix homenav menu
/*$(window).on('load', (function() {
    var mainPoint = $("#main").offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= mainPoint) {
            $('.homenav').css({position: 'fixed',top: '0'});
        } else {
            $('.homenav').css({position: 'relative'});
        }
    });
}));*/

/*function fixmenu() {
    var mainOffset = $("#main").offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= mainOffset) {
            $('.homenav').fadeIn().css({display: 'flex'});
        } else {
            $('.homenav').fadeOut();
        }
    });
};

window.onload = fixmenu;*/








