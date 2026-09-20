$(document).ready(function(){
  $(window).scroll(function(){
    if (this.scrollY > 20) {
      $('.navabar').addClass("sticky")
    }else{
      $('.navabar').removeClass("sticky");
    }
    if(this.scrollY > 500){
      $('.scroll-up-down').addClass("show")
    }else{
      
      $('.scroll-up-down').removeClass("show")
    }
    
  });

  // scroll menu script

    $('.scroll-up-down').click(function(){
      $('html').animate({scrollTop : 0});
    });

  $('.menu-btn').click(function(){
    $('.navabar .menu').toggleClass('active')
    $('.menu-btn i').toggleClass('active')
  });

  // Typing animation script
  var typed = new Typed (".typing",{
    strings:["YouTuber", "Developer" , "Freelancer", "Designer","Blogger"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
  });
   var typed = new Typed (".typing-2",{
    strings:["YouTuber", "Developer" , "Freelancer", "Designer","Blogger"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
  });

  // owl carousel script

  $('.carousel').owlCarousel({
      margin:20,
      loop:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive:{
        0:{
          items:1,
          nav:false,
        },
        600:{
          items:2,
          nav:false,
        },
        1000:{
          items:3,
          nav:false,
        }
      }

  });

});