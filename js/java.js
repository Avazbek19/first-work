$(document).ready(function(){
    $('.slick').slick({
    });
});



$(".owl-carousel").owlCarousel();


$('text-area').each(function(){
    autosize(this)
}).on('autosize:resized', function(){
    console.log('textarea height updated')
  })