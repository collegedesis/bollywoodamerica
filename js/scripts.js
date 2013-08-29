jQuery(document).ready(function($){
    $(".super").supersized({
        slide_interval: 5500,
        transition: 0,
        transition_speed: 700,
        slides: [
          {
            image: "http://themes.webcreations907.com/ninezeroseven/option-one/wp-content/uploads/2013/03/taxis.jpg",
            title:"<h2>Bollywood America</h2><br/><p>2014Bay Area</p>"
          },
          {
            image:"http://themes.webcreations907.com/ninezeroseven/option-one/wp-content/uploads/2013/02/idea3.jpg",
            title:"<h2>Bollywood America</h2><br/><p>2014Bay Area</p>"
          }
        ]
    });
});


jQuery(document).ready(function($){

  $("#page-links a").live("click",function(event){
    event.preventDefault();
    var post_id = $(this).attr("href");

    $(".ajaxed").animate({opacity : "0.1"});
      $("html, body").animate({ scrollTop: $("#blog").offset().top -80 }, 1000);
    $(".ajaxed").load(post_id+" .ajaxed", function(){
    $(".ajaxed").animate({opacity : "1"});
      $("a[rel^='prettyPhoto']").prettyPhoto();
      $(".slider-1").flexslider({
        animation: "fade",
        animationLoop: true,
        directionNav: true,
        controlNav: false,
        slideshowSpeed: 3500
      });

      $(".slider-67").flexslider({
        animation: "fade",
        animationLoop: true,
        directionNav: true,
        controlNav: false,
        slideshowSpeed: 3500
      });

      $('.image-wrapper').hover(function(){
        $(this).find('.mouse-effect').stop().animate({'opacity':'0.6'});
        $(this).find('.extra-links').stop().animate({'top':'50%'});
         },function(){
         $(this).find('.mouse-effect').stop().animate({'opacity':'0'});
        $(this).find('.extra-links').stop().animate({'top':'-50%'});
      });
    });
  });


  $('#subMenu').change(function(){
    var content = $(this).val();
    var checkURL = content.match(/^#([^\/]+)$/i);
    if(checkURL){

      var goPosition = $(content).offset().top - 80;
      $('html,body').animate({ scrollTop: goPosition}, 'slow');

    }else{
      window.location = content;
    }
  });

});

jQuery(window).load(function () {
  jQuery("#parallax-sections-17").parallax("50%", "0.3");
  jQuery("#parallax-sections-114").parallax("50%", "0.3");
  jQuery("#parallax-sections-116").parallax("50%", "0.3");
  jQuery("#parallax-sections-121").parallax("50%", "0.3");
  jQuery("#parallax-sections-135").parallax("50%", "0.3");
});