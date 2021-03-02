"use strict";

$(document).ready(function () {
  if (window.matchMedia('(min-width: 768px)').matches) {
    $('.replace-block').replaceWith($('.index-header__catalog-link'));
    $('.banner-gift__header--desktop').replaceWith($('.banner-gift__header'));
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      $('.banner-gift__header--desktop').replaceWith($('.banner-gift__header'));
      $('.replace-block').replaceWith($('.index-header__catalog-link'));
    } else {}
  });
  $('.how-it-works__btn').click(function (e) {
    e.preventDefault();
    $('.how-it-works__modal').addClass('show-modal');
    $('.index-wrp').addClass('bg-blur');
    $('.header').addClass('bg-blur');
    $('body').addClass('overflow-hidden-all');
    $('.mobile-menu-BG').addClass('mobile-menu-BG--header-active');
  });
  $('.img-x').click(function (e) {
    e.preventDefault();
    $('.how-it-works__wrp').hide();
  });
  $('.how-it-works__close').click(function (e) {
    e.preventDefault();
    $('.how-it-works__modal').removeClass('show-modal');
    $('.index-wrp').removeClass('bg-blur');
    $('.header').removeClass('bg-blur');
    $('body').removeClass('overflow-hidden-all');
    $('.mobile-menu-BG').removeClass('mobile-menu-BG--header-active');
  });
});