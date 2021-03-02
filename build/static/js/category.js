"use strict";

$(document).ready(function () {
  $('.category__modal-content').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    infinite: false
  });
  var category_modal = document.querySelectorAll('.category__modal');
  var category_show_modal = document.querySelectorAll('.category__title-link');

  var _loop = function _loop(i) {
    $(category_modal[i]).hide(0);

    category_show_modal[i].onclick = function () {
      if (category_show_modal[i].innerHTML == 'Подробнее') {
        category_show_modal[i].innerHTML = 'Скрыть';
      } else {
        category_show_modal[i].innerHTML = 'Подробнее';
      }

      $(category_modal[i]).toggle(0);
      $(".category__modal-content").slick('setPosition');
    };
  };

  for (var i = 0; i < category_show_modal.length; i++) {
    _loop(i);
  }

  var gift_modal = document.querySelectorAll('.modal-gift__overflow');
  var gift_show_modal = document.querySelectorAll('.category__more-btn');
  console.log(gift_show_modal[0].innerHTML);

  var _loop2 = function _loop2(_i) {
    $(gift_modal[_i]).hide(0);

    gift_show_modal[_i].onclick = function () {
      if (gift_show_modal[_i].innerHTML == "<span><img src=\"static/images/svg/down-arrow.svg\" alt=\"arrow\" width=\"10\" height=\"5\"></span>\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043A\u0438") {
        gift_show_modal[_i].innerHTML = "<span><img src=\"static/images/svg/down-arrow.svg\" style=\"transform: rotate(180Deg); top: 11px;\" alt=\"arrow\" width=\"10\" height=\"5\"></span>\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043A\u0438";
      } else {
        gift_show_modal[_i].innerHTML = "<span><img src=\"static/images/svg/down-arrow.svg\" alt=\"arrow\" width=\"10\" height=\"5\"></span>\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043A\u0438";
      }

      $(gift_modal[_i]).toggle(200);
      $(".modal-gift__wrp").slick('setPosition');
    };
  };

  for (var _i = 0; _i < gift_show_modal.length; _i++) {
    _loop2(_i);
  }
});