$(document).ready(function(){
  $(window).scroll(function(){
    if (this.scrollY > 20) {
      $('.navabar').addClass("sticky")
    }else{
      $('.navabar').removeClass("sticky");
    }
    
  })

});