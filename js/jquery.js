$(function () {
  $(".container1,.container2,.container3").hide();

  $(".nav-item1").click(function () {
    $(".container2,.container3").fadeOut(0);
    $(".container1")
      .delay(300)
      .fadeIn(250);
  });

  $(".nav-item2").click(function () {
    $(".container1,.container3").fadeOut(0);
    $(".container2")
      .delay(300)
      .fadeIn(250);
  });
  $(".nav-item3").click(function () {
    $(".container1,.container2").fadeOut(0);
    $(".container3")
      .delay(300)
      .fadeIn(250);
  });

 
  // $(".nav-item1").mouseover(function () { 
  
  // });
  // $(".nav-item1").mouseout(function () {
  //   $(".nav-item1 img").attr("src", "img/button1-1.png")
  // });
 



  // $(".menu2").click(function() {
  //   $("#desktop,#alllogo,#content2,nav").fadeOut(300);
  //   $("#aboutus")
  //     .delay(300)
  //     .fadeIn(250);
  // });

  // $(".menu3").click(function() {
  //   $("#aboutus,#alllogo,#content2,nav").fadeOut(300);
  //   $("#desktop")
  //     .delay(300)
  //     .fadeIn(250);
  // });
  // $("nav a").click(function() {
  //   $("#alllogo").hide();
  //   $("#content2").show();
  // });

  // $(".menu1").click(function() {
  //   $("nav a").removeClass("active");
  //   $("nav a").removeClass("nohover");
  // });

  // $("nav a").click(function(e) {
  //   e.preventDefault();
  //   var url = this.href;
  //   $("nav a").removeClass("nohover");
  //   $("nav a").removeClass("active");
  //   $("nav a span").addClass("onhover");
  //   $("#content2")
  //     .hide()
  //     .load(url)
  //     .delay(300)
  //     .fadeIn(200)
  //     .animate({ scrollTop: 0 }, 200);
  //   $(this)
  //     .find(".onhover")
  //     .removeClass("onhover");
  //   $(this).addClass("nohover");
  //   $(this).addClass("active");
  // });
  // $(".menu1").click(function() {
  //     $("nav a").removeClass("active");
  //      $("nav a").removeClass("nohover");
  //    });
});