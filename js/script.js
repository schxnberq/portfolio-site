/*$(document).on('click', '.scroll-btn', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top}, 850);
});*/

$(document).ready (function() {
    var mainPoint = $("#main").offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= mainPoint) {
            $('.menubar').fadeIn();
        } else {
            $('.menubar').fadeOut();
        }
    });
})