
$(document).ready(function(){
    

    if(window.matchMedia('(min-width: 768px)').matches){
        $('.replace-block').replaceWith($('.index-header__catalog-link'));
        $('.banner-gift__header--desktop').replaceWith($('.banner-gift__header'));
    }

    window.addEventListener("resize", function() {
        if (window.innerWidth >= 768) {
            $('.banner-gift__header--desktop').replaceWith($('.banner-gift__header'));
            $('.replace-block').replaceWith($('.index-header__catalog-link'));
        }
        else {

        }
      });
    


});





