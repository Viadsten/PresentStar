"use strict";

/**
 *   Mobile menu 
 */
var mobile_menu_btn = document.querySelector(".header__toggle");
var header = document.querySelector(".header");
var toggle_icon = document.querySelector("#toggle-menu");
var bg_shadow = document.querySelector(".mobile-menu-BG");
var bg_blur = document.querySelector(".main");
var body = document.querySelector("body");

mobile_menu_btn.onclick = function () {
  header.classList.toggle("mobile-menu--active");
  toggle_icon.classList.toggle("toggle--active");
  bg_shadow.classList.toggle("mobile-menu-BG--active");
  bg_blur.classList.toggle("mobile-menu-Blur");
  body.classList.toggle("overflow-hidden");
};
/**
 *   Search area
 */


var search_wrp = document.querySelector(".header__search-wrp");
var search_open = document.querySelector(".header__search-btn");
var search_close = document.querySelector(".search-close");

search_open.onclick = function () {
  search_wrp.classList.toggle("search--active");
  body.classList.toggle("overflow-hidden");
};

search_close.onclick = function () {
  search_wrp.classList.remove("search--active");
  body.classList.remove("overflow-hidden");
};

bg_shadow.onclick = function () {
  closeModal(this, "mobile-menu-BG--active");
};

function closeModal(objName, objClass) {
  objName.classList.remove("\"" + objClass + "\"");
  console.log("\"" + objClass + "\"");
} // onclick events desktop


var search_result = document.querySelector(".search-results__list");

search_wrp.onclick = function () {
  search_result.classList.add("results--active");
};

document.addEventListener("click", function (e) {
  var target = e.target;
  var its_menu = target == search_wrp || search_wrp.contains(target);

  if (!its_menu) {
    search_result.classList.remove("results--active");
  }
});
/**
 *  Resize function
 */

$(window).on('resize', function () {
  var win = $(this);

  if (win.height() >= 1079) {}

  if (win.width() >= 1079) {
    bg_shadow.classList.remove("mobile-menu-BG--active");
    bg_blur.classList.remove("mobile-menu-Blur");
    header.classList.remove("mobile-menu--active");
    toggle_icon.classList.remove("toggle--active");
    body.classList.remove("overflow-hidden");
  }
});