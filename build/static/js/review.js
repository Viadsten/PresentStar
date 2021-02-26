"use strict";

$(document).ready(function () {
  var settingsSlick = {
    slidesToShow: 3.8,
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    accessibility: true,
    variableWidth: false,
    infinite: false,
    responsive: [{
      breakpoint: 2400,
      settings: {
        slidesToShow: 3.6
      }
    }, {
      breakpoint: 2300,
      settings: {
        slidesToShow: 3.5
      }
    }, {
      breakpoint: 2200,
      settings: {
        slidesToShow: 3.4
      }
    }, {
      breakpoint: 2000,
      settings: {
        slidesToShow: 3.3
      }
    }, {
      breakpoint: 1860,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1740,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1620,
      settings: {
        slidesToShow: 2.6
      }
    }, {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2.6
      }
    }, {
      breakpoint: 1380,
      settings: {
        slidesToShow: 2.5
      }
    }, {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2.4
      }
    }, {
      breakpoint: 1180,
      settings: {
        slidesToShow: 2.2
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 870,
      settings: {
        slidesToShow: 1.75
      }
    }, {
      breakpoint: 769,
      settings: "slick"
    }, {
      breakpoint: 768,
      settings: "unslick"
    }]
  };

  if ($(document).width() >= 768) {
    $('.review__body--slick').slick(settingsSlick);
  }

  var settingsSlickGift = {
    slidesToShow: 6.5,
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
      breakpoint: 2300,
      settings: {
        slidesToShow: 5.9
      }
    }, {
      breakpoint: 1960,
      settings: {
        slidesToShow: 5.5
      }
    }, {
      breakpoint: 1780,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4.6
      }
    }, {
      breakpoint: 1350,
      settings: {
        slidesToShow: 4.2
      }
    }, {
      breakpoint: 1250,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 1111,
      settings: {
        slidesToShow: 3.6,
        arrows: false,
        dots: true
      }
    }, {
      breakpoint: 1080,
      settings: "slick"
    }, {
      breakpoint: 1079,
      settings: "unslick"
    }]
  };

  if ($(document).width() >= 1080) {
    $('.gift-block__body--slick').slick(settingsSlickGift);
  }

  $(window).resize(function () {
    if ($(document).width() >= 768) {
      if (!$(".review__body--slick").hasClass("slick-initialized")) $('.review__body--slick').slick(settingsSlick);
    }

    if ($(document).width() >= 1080) {
      if (!$(".gift-block__body--slick").hasClass("slick-initialized")) $('.gift-block__body--slick').slick(settingsSlickGift);
    }
  });
});