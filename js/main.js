$(document).ready(function(){
	
	$('.modalbox').fancybox();
	
	$('input[name="phone"]').inputmask("+7(999)999-99-99",{ "oncomplete": function(){ $('input[name="phone"]').attr('complete','1') }, "onincomplete": function(){ $('input[name="phone"]').attr('complete','0') } });
	
	if($(window).width()>1023){
		$('.main_left_menu > ul > li').hover(
			function() {
				var $that = $(this);
				timer = setTimeout(function(){
					$that.addClass("hover");
					$that.find('.main_left_menu_dropdown').fadeIn();
				},200);
			},
			function() {
				clearTimeout(timer);
				$(this).removeClass("hover");
				$(this).find('.main_left_menu_dropdown').fadeOut();
			}
		);
	};
	
	$('.mob_btn_catalog').click(function(){
		 $('.main_left_menu').css('left','0');
		 $('.bg_menu').fadeIn();
	});
	
	$('.h_top_mob_btn').click(function(){
		 $('.h_top').css('left','0');
		 $('.bg_menu').fadeIn();
	});
	
	$('.bg_menu').click(function(){
		 $('.main_left_menu, .h_top').css('left','-250px');
		 $('.bg_menu').fadeOut();
	});
	
	$(".f_menu_btn").click(function() {
		if($(this).next("ul").is(":visible")){
			$(this).next("ul").slideUp("slow");
			$(this).removeClass('open');
		} else {
			$(this).next("ul").slideToggle("slow");
			$(this).addClass('open');
		}
	});
	
	$('input[type="text"]').focus(function()
	{
		var place = $(this).attr('placeholder');
		$(this).removeAttr('placeholder');

		$('input[type="text"]').blur(function(){
			$(this).attr('placeholder', place);
		}); 
	});
	
	$('#top_slider').owlCarousel({
		nav: true,
		dots: false,
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				nav: false,
				dots: true,
			},
			768:{
				nav: true,
				dots: false,
			}
		}
	});
	
	$('#main_top_category_slider').owlCarousel({
		nav: true,
		dots: true,
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
	});
	
	$('#main_action_carousel').owlCarousel({
		nav: true,
		dots: false,
		items: 3,
		loop: true,
		autoplay: false,
		margin: 24,
		responsive:{
			0:{
				items:1,
				nav: false,
				dots: true,
			},
			768:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	
	$('#main_articles_slider').owlCarousel({
		nav: true,
		dots: false,
		items: 4,
		loop: true,
		autoplay: false,
		margin: 24,
		responsive:{
			0:{
				items:1,
				nav: false,
				dots: true,
			},
			768:{
				items:2
			},
			1000:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});
	
	ymaps.ready(init);

	function init () {
		var myMap = new ymaps.Map('map', {
				center: [55.78262278, 37.72336700],
				zoom: 16,
				controls: []
			});
			
			var myPlacemark = new ymaps.Placemark(
			[55.78262278, 37.72336700] , {

			}, {
				iconLayout: 'default#image',
				iconImageHref: '/img/maps_ico.png',
				iconImageSize: [41, 41],
				iconImageOffset: [-20, -20]
				});
			
			myMap.behaviors.disable('scrollZoom');
			myMap.geoObjects.add(myPlacemark);
			myMap.controls.add('zoomControl', {
				size: "small"
			});
	}
	
	$('input[type="text"]').focus(function(){
		$(this).removeClass('error');
	});
	
	$('.catalog_category_item').each(function(){
		var $this = $(this);
		var $menu = $this.find('.catalog_category_item_sub');
		var $btn  = $this.find('.catalog_category_item_sub_btn a');
		
		$btn.click(function(){
		});
	});
	
	$('.catalog_category_item_sub_btn a').click(function(){
		var $this = $(this);
		if($this.parents('.catalog_category_item').find('.catalog_category_item_sub').css('height') == "160px"){
			var $height = $this.parents('.catalog_category_item').find('ul').height();
			$this.parents('.catalog_category_item').find('.catalog_category_item_sub').height($height);
			$this.find('span').text('Скрыть');
			$this.addClass('open');
		} else {
			$this.parents('.catalog_category_item').find('.catalog_category_item_sub').css('height','160px');
			$this.find('span').text('Показать все');
			$this.removeClass('open');
		}
		return false;
	});
	
});

$(document).ready(function() {
    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };
});