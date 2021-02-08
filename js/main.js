$(function(){

    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        pauseOnFocus: true
      });

      $('.reviews__slider').slick({
          arrows: false,
          dots: true,
          slidesToShow: 4,
          slidesToScroll: 4
      })

});