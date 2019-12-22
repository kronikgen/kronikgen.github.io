$(document).ready(function() {
  $('.menu-open img').click(function() {
    $('nav li').slideToggle(300);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 300 ) {			
			$('nav li').removeAttr('style');
		 }
	});
});// JavaScript Document