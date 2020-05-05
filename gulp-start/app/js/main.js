$(function () {

    $('.header_slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrow slider-arrow_left" src="img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrow slider-arrow_right" src="img/arrow-right.svg" alt="">',
        asNavFor: '.slider-dots-head',
    });

    $('.slider-dots-head').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header_slider',
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrow slider-arrow_left" src="img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrow slider-arrow_right" src="img/arrow-right.svg" alt="">',
        asNavFor: '.slider-map',
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true
    });

    $('.travel_slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrow slider-arrow_left" src="img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrow slider-arrow_right" src="img/arrow-right.svg" alt="">',
        asNavFor: '.slider-dots-head',
    });

});