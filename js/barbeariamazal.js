$(function(){

	var nav = $('.exo-menu');
	var img = 1;

	$(window).scroll(function(){

		if($(this).scrollTop()>64.95){

		nav.addClass("menu-fixo");

	}else{

		nav.removeClass("menu-fixo");

	}

	});
	
});