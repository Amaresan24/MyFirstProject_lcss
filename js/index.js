


jQuery(".nav-folderized h4").click(function(){
    jQuery(this).parent(".nav").toggleClass("open"); 
    jQuery('html, body').animate({ scrollTop: jQuery(this).offset().top - 170 }, 1500 );
  });



