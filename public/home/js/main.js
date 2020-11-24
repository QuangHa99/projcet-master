(function ($) {
    "use strict";

$(document).ready(function(){
 // Add active class to the current button (highlight it)
  	// $('.btn1 a').on("click", function(){
    // 	$('.btn1').removeClass('active');
    // 	$(this).parent().addClass('active');
	// })
/*---------------------------------------
	curency and language js
----------------------------------------- */
	$(".current-currency").on( "click", function(){
		$(".currency-toogle").slideToggle(400);
	});
	$(".current-lang").on( "click", function(){
		$(".language-toogle").slideToggle(400);
	});

/*---------------------------------------
	price range ui slider js
----------------------------------------- */
	let minPrice = $(".g1").val();
	let maxPrice = $(".g2").val();
	$( "#price-range" ).slider({
		range: true,
		min: 0,
		max: 100,
		values: [ minPrice, maxPrice ],
		slide: function( event, ui ) {
			$( "#slidevalue" ).val( "$" + ui.values[ 0 ] + " triệu - $" + ui.values[ 1 ] +" triệu");
			$(".g1").val(ui.values[ 0 ]);
			$(".g2").val(ui.values[ 1 ]);
		}
	});
	$( "#slidevalue" ).val( "$" + $( "#price-range" ).slider( "values", 0 ) +
		" triệu - $" + $( "#price-range" ).slider( "values", 1 ) + " triệu");

	$(".g1").val($( "#price-range" ).slider( "values", 0 ));
	$(".g2").val($( "#price-range" ).slider( "values", 1 ));
/*---------------------------------------
	scroll to top
----------------------------------------- */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 250) {
			$('.bstore-scrollertop').fadeIn();
		} else {
			$('.bstore-scrollertop').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.bstore-scrollertop').on( "click", function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

/*---------------------------------------
	mobile menu
----------------------------------------- */
		$('.mobile-menu').meanmenu();

/*---------------------------------------
	new  product, sale product carousel
----------------------------------------- */
	$('.new-pro-carousel, .sale-carousel').owlCarousel({
		items : 2,
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [991,1],
		itemsTablet: [767,2],
		itemsMobile : [480,1],
		autoPlay: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']
	});

/*---------------------------------------
	featured  product, bestseller, carousel
----------------------------------------- */
	$('.feartured-carousel, .bestseller-carousel').owlCarousel({
		items : 5,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [991,3],
		itemsTablet: [767,2],
		itemsMobile : [480,1],
		autoPlay :  false,
		stopOnHover: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']
	});

/*---------------------------------------
	related-product  carousel
----------------------------------------- */
	$('.related-product').owlCarousel({
		items : 4,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [991,3],
		itemsTablet: [767,2],
		itemsMobile : [480,1],
		autoPlay :  false,
		stopOnHover: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']
	});

/*---------------------------------------
	latest news carousel
----------------------------------------- */
	$('.latest-news-carousel').owlCarousel({
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [991,3],
		itemsTablet: [767,2],
		itemsMobile : [480,1],
		autoPlay :  false,
		stopOnHover: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']
	});

/*---------------------------------------
	client carousel
----------------------------------------- */
	$('.client-carousel').owlCarousel({
		items : 6,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [991,3],
		itemsTablet: [767,2],
		itemsMobile : [480,1],
		autoPlay :  false,
		stopOnHover: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']
	});
/*---------------------------------------
	home 2 left category menu
----------------------------------------- */
	$('.category-heading').on( "click", function(){
		$('.category-menu-list').slideToggle(300);
	});

/*---------------------------------------
	home 2 new product, home 2 sale product carousel
----------------------------------------- */
	$('.home2-new-pro-carousel, .home2-sale-carousel').owlCarousel({
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [991,2],
		itemsTablet: [767,2],
		itemsMobile : [480,1],
		autoPlay :  false,
		stopOnHover: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']
	});

/*---------------------------------------
	sidebar best seller carousel
----------------------------------------- */
	$('.sidebar-best-seller-carousel').owlCarousel({
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [991,1],
		itemsTablet: [767,1],
		itemsMobile : [480,1],
		autoPlay :  false,
		stopOnHover: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']
	});

/*---------------------------------------
	tab product carousel
----------------------------------------- */
	$('.tab-carousel-1, .tab-carousel-2, .tab-carousel-3').owlCarousel({
		items : 4,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [991,3],
		itemsTablet: [767,2],
		itemsMobile : [480,1],
		autoPlay :  false,
		stopOnHover: false,
		navigation: true,
		pagination: false,
		navigationText:['<i class="fa fa-angle-left owl-prev-icon"></i>','<i class="fa fa-angle-right owl-next-icon"></i>']
	});

/*---------------------------------------
	mainSlider
----------------------------------------- */
	$('#mainSlider').nivoSlider({
		controlNav: true,
		 directionNav: false,
		 pauseTime: 5000,
		nextText: '<div class="slider-bolut"></div>',
		prevText: '<div class="slider-bolut"></div>'

	});

/*---------------------------------------
	single product product thumbnail
----------------------------------------- */
	$('.bxslider').bxSlider({
	  minSlides: 3,
	  maxSlides: 3,
	  slideWidth: 88,
	  responsive:true,
	   nextText: '<i class="fa fa-angle-left"></i>',
	  prevText: '<i class="fa fa-angle-right"></i>'
	});

/*---------------------------------------
	francy box lightbox
----------------------------------------- */
	$(".fancybox").fancybox();

/*-----------------------------------------
	cart plus minus button
--------------------------------------------*/
	 $(".cart-plus-minus-button").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
	  $(".qtybutton").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
		  var newVal = parseFloat(oldValue) + 1;
		} else {
		   // Don't allow decrementing below zero
		  if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
			} else {
			newVal = 0;
		  }
		  }
		$button.parent().find("input").val(newVal);
	  });

});
// //lọc theo giá
// $("div.col-lg-3.col-md-3.col-sm-3.col-xs-12 > div > div:nth-child(1) > ul > li:nth-child(3) > button > span").on( "click", function(){
// 	var slug = $("#slugdm").val();
// 	var gia1 = $( "#price-range" ).slider( "values", 0 );
// 	var gia2 = $( "#price-range" ).slider( "values", 1 );
// 	var g1 = gia1 * 1000000;
// 	var g2 = gia2 * 1000000;
// 	let data = {
// 		slug: slug,
// 		g1: g1,
// 		g2: g2
// 	};
// 	$.ajax({
// 		url: '/danh-muc/aaa'+slug,
// 		type: 'GET',
// 		data: data, // dữ liệu truyền sang nếu có
// 		dataType: "HTML", // kiểu dữ liệu trả về
// 		success: function (response) { // success : kết quả trả về sau khi gửi request ajax
// 			console.log(response);
// 			$('.right-all-product').html(response);
// 		},
// 		error: function (e) { // lỗi nếu có
// 			console.log(e.message);
// 		}
// 	});
// });
})(jQuery);
