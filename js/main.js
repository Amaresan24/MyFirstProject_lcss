(function($) {
  "use strict";

  /*[ Load page ]
  ===========================================================*/
  $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 1500,
      outDuration: 800,
      linkElement: '.animsition-link',
      loading: true,
      loadingParentElement: 'html',
      loadingClass: 'animsition-loading-1',
      loadingInner: '<div class="loader05"></div>',
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: ['animation-duration', '-webkit-animation-duration'],
      overlay: false,
      overlayClass: 'animsition-overlay-slide',
      overlayParentElement: 'html',
      transition: function(url) {
          window.location.href = url;
      }
  });

  /*[ Back to top ]
  ===========================================================*/
  var windowH = $(window).height() / 2;

  $(window).on('scroll', function() {
      if ($(this).scrollTop() > windowH) {
          $("#myBtn").css('display', 'flex');
      } else {
          $("#myBtn").css('display', 'none');
      }
  });

  $('#myBtn').on("click", function() {
      $('html, body').animate({
          scrollTop: 0
      }, 300);
  });


  /*==================================================================
  [ Fixed Header ]*/



  var headerDesktop = $('.container-menu-desktop');
  var wrapMenu = $('.wrap-menu-desktop');

  if ($('.top-bar').length > 0) {
      var posWrapHeader = $('.top-bar').height();
  } else {
      var posWrapHeader = 0;
  }


  if ($(window).scrollTop() > posWrapHeader) {
      $(headerDesktop).addClass('fix-menu-desktop');
      $(wrapMenu).css('top', 0);
  } else {
      $(headerDesktop).removeClass('fix-menu-desktop');
      $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
  }

  $(window).on('scroll', function() {
      if ($(this).scrollTop() > posWrapHeader) {
          $(headerDesktop).addClass('fix-menu-desktop');
          $(wrapMenu).css('top', 0);
      } else {
          $(headerDesktop).removeClass('fix-menu-desktop');
          $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
      }
  });


  /*==================================================================
  [ Menu mobile ]*/
  $('.btn-show-menu-mobile').on('click', function() {
      debugger
      $(this).toggleClass('is-active');
      $('.menu-mobile').slideToggle();
  });

  var arrowMainMenu = $('.arrow-main-menu-m');

  for (var i = 0; i < arrowMainMenu.length; i++) {
      $(arrowMainMenu[i]).on('click', function() {
          $(this).parent().find('.sub-menu-m').slideToggle();
          $(this).toggleClass('turn-arrow-main-menu-m');
      })
  }

  $(window).resize(function() {
      if ($(window).width() >= 992) {
          if ($('.menu-mobile').css('display') == 'block') {
              $('.menu-mobile').css('display', 'none');
              $('.btn-show-menu-mobile').toggleClass('is-active');
          }

          $('.sub-menu-m').each(function() {
              if ($(this).css('display') == 'block') {
                  console.log('hello');
                  $(this).css('display', 'none');
                  $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
              }
          });

      }
  });



  // Product popup Starts
  /*==================================================================
  [ Show modal1 ]*/
  $('.js-show-modal1').on('click', function(e) {
      e.preventDefault();
      $('.js-modal1').addClass('show-modal1');
  });

  $('.js-hide-modal1').on('click', function() {
      $('.js-modal1').removeClass('show-modal1');
  });


  // [ Show modal2 ]
  $('.js-show-modal2').on('click', function(e) {
      e.preventDefault();
      $('.js-modal2').addClass('show-modal1');
  });

  $('.js-hide-modal2').on('click', function() {
      $('.js-modal2').removeClass('show-modal1');
  });


  // [ Show modal3 ]
  $('.js-show-modal2').on('click', function(e) {
      e.preventDefault();
      $('.js-modal2').addClass('show-modal1');
  });

  $('.js-hide-modal2').on('click', function() {
      $('.js-modal2').removeClass('show-modal1');
  });


  // [ Show modal4 ]
  $('.js-show-modal4').on('click', function(e) {
      e.preventDefault();
      $('.js-modal4').addClass('show-modal1');
  });

  $('.js-hide-modal4').on('click', function() {
      $('.js-modal4').removeClass('show-modal1');
  });


  // [ Show modal5 ]
  $('.js-show-modal5').on('click', function(e) {
      e.preventDefault();
      $('.js-modal5').addClass('show-modal1');
  });

  $('.js-hide-modal5').on('click', function() {
      $('.js-modal5').removeClass('show-modal1');
  });


  // [ Show modal6 ]
  $('.js-show-modal6').on('click', function(e) {
      e.preventDefault();
      $('.js-modal6').addClass('show-modal1');
  });

  $('.js-hide-modal6').on('click', function() {
      $('.js-modal6').removeClass('show-modal1');
  });


  // [ Show modal7 ]
  $('.js-show-modal7').on('click', function(e) {
      e.preventDefault();
      $('.js-modal7').addClass('show-modal1');
  });

  $('.js-hide-modal7').on('click', function() {
      $('.js-modal7').removeClass('show-modal1');
  });

  // [ Show modal8 ]
  $('.js-show-modal8').on('click', function(e) {
      e.preventDefault();
      $('.js-modal8').addClass('show-modal1');
  });

  $('.js-hide-modal8').on('click', function() {
      $('.js-modal8').removeClass('show-modal1');
  });

  // [ Show modal9 ]
  $('.js-show-modal9').on('click', function(e) {
      e.preventDefault();
      $('.js-modal9').addClass('show-modal1');
  });

  $('.js-hide-modal9').on('click', function() {
      $('.js-modal9').removeClass('show-modal1');
  });

  // [ Show modal10 ]
  $('.js-show-modal10').on('click', function(e) {
      e.preventDefault();
      $('.js-modal10').addClass('show-modal1');
  });

  $('.js-hide-modal10').on('click', function() {
      $('.js-modal10').removeClass('show-modal1');
  });

  // [ Show modal11 ]
  $('.js-show-modal11').on('click', function(e) {
      e.preventDefault();
      $('.js-modal11').addClass('show-modal1');
  });

  $('.js-hide-modal11').on('click', function() {
      $('.js-modal11').removeClass('show-modal1');
  });

  // [ Show modal12 ]
  $('.js-show-modal12').on('click', function(e) {
      e.preventDefault();
      $('.js-modal12').addClass('show-modal1');
  });

  $('.js-hide-modal12').on('click', function() {
      $('.js-modal12').removeClass('show-modal1');
  });

  // [ Show modal13 ]
  $('.js-show-modal13').on('click', function(e) {
      e.preventDefault();
      $('.js-modal13').addClass('show-modal1');
  });

  $('.js-hide-modal13').on('click', function() {
      $('.js-modal13').removeClass('show-modal1');
  });

  // [ Show modal14 ]
  $('.js-show-modal14').on('click', function(e) {
      e.preventDefault();
      $('.js-modal14').addClass('show-modal1');
  });

  $('.js-hide-modal14').on('click', function() {
      $('.js-modal14').removeClass('show-modal1');
  });

  // [ Show modal15 ]
  $('.js-show-modal15').on('click', function(e) {
      e.preventDefault();
      $('.js-modal15').addClass('show-modal1');
  });

  $('.js-hide-modal15').on('click', function() {
      $('.js-modal15').removeClass('show-modal1');
  });

  // [ Show modal16 ]
  $('.js-show-modal16').on('click', function(e) {
      e.preventDefault();
      $('.js-modal16').addClass('show-modal1');
  });

  $('.js-hide-modal16').on('click', function() {
      $('.js-modal16').removeClass('show-modal1');
  });

  // [ Show modal17 ]
  $('.js-show-modal17').on('click', function(e) {
      e.preventDefault();
      $('.js-modal17').addClass('show-modal1');
  });

  $('.js-hide-modal17').on('click', function() {
      $('.js-modal17').removeClass('show-modal1');
  });

  // [ Show modal18 ]
  $('.js-show-modal18').on('click', function(e) {
      e.preventDefault();
      $('.js-modal18').addClass('show-modal1');
  });

  $('.js-hide-modal18').on('click', function() {
      $('.js-modal18').removeClass('show-modal1');
  });

  // [ Show modal19 ]
  $('.js-show-modal19').on('click', function(e) {
      e.preventDefault();
      $('.js-modal19').addClass('show-modal1');
  });

  $('.js-hide-modal19').on('click', function() {
      $('.js-modal19').removeClass('show-modal1');
  });

  // [ Show modal20 ]
  $('.js-show-modal20').on('click', function(e) {
      e.preventDefault();
      $('.js-modal20').addClass('show-modal1');
  });

  $('.js-hide-modal20').on('click', function() {
      $('.js-modal20').removeClass('show-modal1');
  });


  //  Product Popup Ends




})(jQuery);



/* Video Lightbox - Magnific Popup */
$('.popup-youtube, .popup-vimeo').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false,
  iframe: {
      patterns: {
          youtube: {
              index: 'youtube.com/',
              id: function(url) {
                  var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                  if (!m || !m[1]) return null;
                  return m[1];
              },
              src: 'https://www.youtube.com/embed/%id%?autoplay=1'
          },
          vimeo: {
              index: 'vimeo.com/',
              id: function(url) {
                  var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                  if (!m || !m[5]) return null;
                  return m[5];
              },
              src: 'https://player.vimeo.com/video/%id%?autoplay=1'
          }
      }
  }
});




ScrollReveal({
  reset: true
});

ScrollReveal().reveal(".show-once", {
  reset: false
});

ScrollReveal().reveal(".title-up", {
  duration: 3000,
  origin: "top",
  distance: "400px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
      x: 20,
      z: -10
  }
});

ScrollReveal().reveal(".fade-in", {
  duration: 5000,
  move: 0
});

ScrollReveal().reveal(".scaleUp", {
  duration: 4000,
  scale: 0.85
});

ScrollReveal().reveal(".flip", {
  delay: 500,
  duration: 2000,
  rotate: {
      x: 20,
      z: 20
  }
});

ScrollReveal().reveal(".slide-right", {
  duration: 1000,
  origin: "left",
  distance: "300px",
  easing: "ease-in-out"
});

ScrollReveal().reveal(".slide-left", {
  duration: 3000,
  origin: "right",
  distance: "300px",
  easing: "ease-in-out"
});

ScrollReveal().reveal(".slide-up", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});




jQuery(function($) {
  //play video btn
  $(".position-relative video").removeAttr("controls"); //hide controls by default
  //on clicking play button
  $(".video-section").each(function() {
      $(".play-btn").click(function() {
          var video = $(this)
              .closest(".position-relative")
              .find("video")
              .get(0);
          video.play();
          video.controls = true;
          $(this).css("visibility", "hidden");
          return false;
      });

      //when video is paused
      $(this)
          .find("video")
          .click(function() {
              var video = $(this).get(0);
              video.pause();
              video.controls = false;
              $(this)
                  .siblings(".play-btn")
                  .css("visibility", "visible");
              return false;
          });

      //when video has ended
      $(this)
          .find("video")
          .on("ended", function() {
              $(this).get(0).controls = false;
              $(this)
                  .siblings(".play-btn")
                  .css("visibility", "visible");
              $(this)
                  .get(0)
                  .load();
          });
  });
});


var swiper;

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000, //2000ms = 2s;
  autoplayHoverPause: true,
  mousewheel: {
      invert: false,
  },
  // autoHeight: true,
  pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
  },
});


swiper.on('slideChange', function() {
  startCounter();
});




$(document).ready(function() {
  startCounter();
});



function startCounter() {

  $.fn.jQuerySimpleCounter = function(options) {
      var settings = $.extend({
          start: 0,
          end: 100,
          easing: 'swing',
          duration: 400,
          complete: ''
      }, options);

      var thisElement = $(this);

      $({
          count: settings.start
      }).animate({
          count: settings.end
      }, {
          duration: settings.duration,
          easing: settings.easing,
          step: function() {
              var mathCount = Math.ceil(this.count);
              thisElement.text(mathCount);
          },
          complete: settings.complete
      });
  };


  $('#number1').jQuerySimpleCounter({
      end: 12,
      duration: 3000
  });
  $('#number2').jQuerySimpleCounter({
      end: 55,
      duration: 3000
  });
  $('#number3').jQuerySimpleCounter({
      end: 359,
      duration: 2000
  });
  $('#number4').jQuerySimpleCounter({
      end: 246,
      duration: 2500
  });
  $('#number5').jQuerySimpleCounter({
      end: 746,
      duration: 2500
  });


}

$(document).ready(function(){

    $(".tabs").click(function(){
        
        $(".tabs").removeClass("active");
        $(".tabs h6").removeClass("font-weight-bold");    
        $(".tabs h6").addClass("text-muted");    
        $(this).children("h6").removeClass("text-muted");
        $(this).children("h6").addClass("font-weight-bold");
        $(this).addClass("active");
    
        current_fs = $(".active");
    
        next_fs = $(this).attr('id');
        next_fs = "#" + next_fs + "1";
    
        $("fieldset").removeClass("show");
        $(next_fs).addClass("show");
    
        current_fs.animate({}, {
            step: function() {
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({
                    'display': 'block'
                });
            }
        });
    });
    
    });