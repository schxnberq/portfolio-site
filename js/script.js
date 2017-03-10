$(document).on('click', '.scroll-btn', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top}, 500);
});







/*$(window).scroll(function(){
    if ($(window).scrollTop() > 200) {
        $(".header-wrapper").fadeOut('slow');
    } else {
        $(".header-wrapper").fadeIn('slow');

    }
});*/









