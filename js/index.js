$(function () {
  if ($(window).width() < 900) {

  };




  if ($(window).width() > 900) {

  }
})


$('.nav-new .li a').on("click", function() {
  let headerH = 80;//导航栏高度，滚动偏移量
  let nowActive = $.attr(this, 'href').substr(1, $.attr(this, 'href').length);//获取当前a标签href除#外的字符
  $('html, body').animate({
      scrollTop: $("#" + nowActive).offset().top - headerH
  }, 400);
  return false;//返回false，不修改url，返回true修改url
});

$(".nav-new .ul .li").eq(0).addClass("active").siblings().removeClass("active")
$(window).scroll(function () {
  console.log($(document).scrollTop())
  console.log($("#meun6").offset().top)
  if($(document).scrollTop() < $("#meun1").offset().top){
    $(".nav-new .ul .li").eq(0).addClass("active").siblings().removeClass("active")
  } else if($(document).scrollTop() >= $("#meun2").offset().top - 100 && $(document).scrollTop() < $("#meun3").offset().top - 100){
    $(".nav-new .ul .li").eq(1).addClass("active").siblings().removeClass("active")
  } else if($(document).scrollTop() >= $("#meun3").offset().top - 100 && $(document).scrollTop() < $("#meun4").offset().top - 100){
    $(".nav-new .ul .li").eq(2).addClass("active").siblings().removeClass("active")
  } else if($(document).scrollTop() >= $("#meun4").offset().top - 100 && $(document).scrollTop() < $("#meun5").offset().top - 100){
    $(".nav-new .ul .li").eq(3).addClass("active").siblings().removeClass("active")
  } else if($(document).scrollTop() >= $("#meun5").offset().top - 100 && $(document).scrollTop() < $("#meun6").offset().top - 300){
    $(".nav-new .ul .li").eq(4).addClass("active").siblings().removeClass("active")
  } else if($(document).scrollTop() > $("#meun6").offset().top - 300){
    $(".nav-new .ul .li").eq(5).addClass("active").siblings().removeClass("active")
  }

  if ($(window).width() < 1100) {
    if($(document).scrollTop() >= $(document).height() - $(window).height()){
      $(".nav-new .ul .li").eq(4).addClass("active").siblings().removeClass("active")
    }
  }
})






$(function () {
  // 导航
  $("#mob-menubtn").on("click", function () {
    $('.main-header').addClass('open');
    $('#close-menubtn').show();
    $('#mob-menubtn').hide();
    $('body').css('overflow', 'hidden')
    // $('.logo img').attr('src', './img/logo.svg');
  })
  $("#close-menubtn").on("click", function () {
    closeMenu()
  })
  
  $(".one-nav").on("click", function () {
    closeMenu()
  })

  //mob端关闭导航
  function closeMenu() {
    // $('.nav-new').removeClass('active')
    $('.main-header').removeClass('open');
    $('#close-menubtn').hide();
    $('#mob-menubtn').show();

    $('body').css('overflow', 'auto')
    // $('.logo img').attr('src', './img/logo.svg');
    if ($(".bz-header").hasClass('fix')) {
      // $('.logo img').attr('src', './img/logo.svg');
    }
  }
})


