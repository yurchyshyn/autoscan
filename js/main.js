$(document).ready(function(){
  // menu
  $('.menu-btn').on('click', function(){
      $('.menu').toggleClass('menu-active');
      $('.menu-btn').toggleClass('menu-btn-active');
  });
  $('.menu-item').on('click', function(){
      $('.menu').removeClass('menu-active');
      $('.menu-btn').removeClass('menu-btn-active');
  })
  // slider
  $('.catalog-goods-item-slider').slick({
  });
  // magnific-popup
  $('.catalog-goods-item-slider').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled:true,
    },
  });
  // modal windows
  $('#order').on('click', function() {
      $('.overlay').fadeIn('slow/400/fast', function() {
      });
  })
  $('.modal-content-close').on('click', function(){
      $(".overlay").fadeOut('fast');
  })
  $(".overlay").on('click', function (e) {
      if (e.target == this) $(".overlay").fadeOut('fast');
  })
})
// jqCart
$(function() {
    'use strict';
    // инициализация плагина
    $.jqCart({
        buttons: '.add-to-cart',        // селектор кнопок, аля "Добавить в корзину"
        handler: '/php/handler.php', // путь к обработчику
        visibleLabel: false,         // показывать/скрывать ярлык при пустой корзине (по умолчанию: false)
        openByAdding: true,         // автоматически открывать корзину при добавлении товара (по умолчанию: false)
        currency: 'грн',          // валюта: строковое значение, мнемоники (по умолчанию "$")
    });
    
    // дополнительные методы
    $.jqCart('openCart'); // открыть корзину
    $.jqCart('clearCart'); // очистить корзину
});