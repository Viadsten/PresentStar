
$(document).ready(function(){


  $('.category__modal-content').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    infinite: false
  })



  let category_modal = document.querySelectorAll('.category__modal');
  let category_show_modal = document.querySelectorAll('.category__title-link');


  for (let i = 0; i < category_show_modal.length; i++) {
    $(category_modal[i]).hide(0)
    category_show_modal[i].onclick = function() {
      
      if (category_show_modal[i].innerHTML == 'Подробнее') {
        category_show_modal[i].innerHTML = 'Скрыть'
      }else {
        category_show_modal[i].innerHTML = 'Подробнее'
      }
      $(category_modal[i]).toggle(0)
      $(".category__modal-content").slick('setPosition'); 

    }
  }
  



  let gift_modal = document.querySelectorAll('.modal-gift__overflow');
  let gift_show_modal = document.querySelectorAll('.category__more-btn');

  console.log(gift_show_modal[0].innerHTML);

  for (let i = 0; i < gift_show_modal.length; i++) {
    $(gift_modal[i]).hide(0)
    gift_show_modal[i].onclick = function() {
      if (gift_show_modal[i].innerHTML == `<span><img src="static/images/svg/down-arrow.svg" alt="arrow" width="10" height="5"></span>Показать подарки`) 
      {
        gift_show_modal[i].innerHTML = `<span><img src="static/images/svg/down-arrow.svg" style="transform: rotate(180Deg); top: 11px;" alt="arrow" width="10" height="5"></span>Скрыть подарки`
      }else {
        gift_show_modal[i].innerHTML = `<span><img src="static/images/svg/down-arrow.svg" alt="arrow" width="10" height="5"></span>Показать подарки`
      }
      $(gift_modal[i]).toggle(200)
      $(".modal-gift__wrp").slick('setPosition'); 

    }
  }
  
  
})