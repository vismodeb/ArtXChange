
$(document).ready(function(){
  // Nav Toggle
  $('#toggleNav-icon').click(function(){
    $(this).toggleClass('open');
    $('.menu').slideToggle();
  });
  // all testmonial gallery
  $('.main_slider').owlCarousel({
    loop:true,
    nav:false,
    margin: 40,
    center:true,
    // autoplay:true,
    responsive:{
      0:{
          items:1
      },
      575:{
          items:2,
      },
      767:{
          items:3
      },
      1000:{
          items:3
      }
    }
  });


});