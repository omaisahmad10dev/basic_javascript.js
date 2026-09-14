$(document).ready(function(){
  $(window).scroll(function(){
    if (this.scrollY > 20) {
      $('.navabar').addClass("sticky")
    }else{
      $('.navabar').removeClass("sticky");
    }
    
  })
  $('.menu-btn').click(function(){
    $('.navabar .menu').toggleClass('active')
    $('.menu-btn i' ).toggleClass('active')
  })

});