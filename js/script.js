$(document).on('click', '.scroll-btn', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top}, 1100);
});

$(document).ready (function() {
    var mainPoint = $("#main").offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= mainPoint) {
            $('.menubar').fadeIn(300).css({display: 'flex'})
        } else {
            $('.menubar').fadeOut(300);
        }
    });
});


// fadeIn back-to-top .scroll-btn
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y >= 1000) {
        $('.up-btn').fadeIn();
    } else {
        $('.up-btn').fadeOut();
    }
});

