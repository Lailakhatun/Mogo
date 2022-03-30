
$(function(){
var navOff = $('.navigation').offset().top;

$(window).scroll(function(){
var scrolling = $(this).scrollTop();
if (scrolling > navOff) {
    $('.navigation').addClass('menu_fix');
}else {
    $('.navigation').removeClass('menu_fix');
}
});

});