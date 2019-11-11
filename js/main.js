$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

	$('.btn_menu').click(function() {
		$('.desctop_menu').addClass('active');
	});

	$('.close_menu').click(function() {
		$('.desctop_menu').removeClass('active');
	});

	$('.btn_menu_mobile').click(function() {
		$('.mobile_menu').addClass('active');
		$('.btn_menu_mobile').addClass('hide');
	});

	$('.close_menu_mobile').click(function() {
		$('.mobile_menu').removeClass('active');
		$('.btn_menu_mobile').removeClass('hide');
	});


  $('.filter_container div').find('input:checkbox').click(function () {
			if($('.filter_container div').find('input:checked').length == 1){
	      $('.portfolio_container .item').hide();
	      $('.filter_container div').find('input:checked').each(function () {
	          $('.portfolio_container .item.' + $(this).attr('rel')).show();
	      });
			} else {
				$('.portfolio_container .item').show();
			}
  });
  $(window).resize(function(){


  	if($(window).width() < 1004){
  		$('.filter_container div').find('input:checked').each(function () {
  		    $('.portfolio_container .item.').show();
  		})
  	}

  });

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	$('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

	$('.img-link').magnificPopup({
		type  : 'image',
	});

	$('.gallerylink').magnificPopup({
		type  : 'image',
		gallery : {
			enabled: true,
		}
	});
	$('.popup-youtube').magnificPopup({
		type  : 'iframe',

	});

	if($(window).width() < 768) {
	    $(".main_news_container .slider.owl-carousel").removeClass('owl-carousel').trigger('destroy.owl.carousel');
	} else {
	    $(".main_news_container .slider").addClass('owl-carousel');
	};
	$(window).resize(function(){
	    if($(window).width() < 768){
	        $(".main_news_container .slider.owl-carousel").removeClass('owl-carousel').trigger('destroy.owl.carousel');
	    } else {
	        $(".main_news_container .slider").addClass('owl-carousel');
	    }
	});


	$(".main_news_container .slider.owl-carousel").owlCarousel({
	    loop: false,
	    autoplay: false,
	    mouseDrag: false,
	    nav: true,
	    navText: false,
	    dots: false,
	    margin: 60,
	    autoWidth: true,
	    // stageClass: 'owl-stage owl-stage-mobile',
	    responsive : {
	    768 : {
	        items: 2,
	        margin: 30,
	    },
	        1200: {
	        items: 2,
	        margin: 36,
	    },
	        1500: {
	        items: 4,
	        margin: 36,
	    }
	    }
	});


	$(".news_container .img_block .owl-carousel").owlCarousel({
		// autoWidth: true,
		items: 1,
		loop: false,
		autoplay: false,
		mouseDrag: true,
		nav: false,
		navText: false,
		dots: true,
		stageClass: 'owl-stage owl-stage-imbblock',
	});



	$(".header_slider .owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		mouseDrag: true,
		nav: false,
		navText: false,
		dots: false
	});


	$(".main_portfolio .btn").click(function () {
		$(".main_portfolio .item-last").toggle();
	})


	$(".awards_container .slider.owl-carousel").owlCarousel({
		loop: false,
		autoplay: false,
		mouseDrag: false,
		nav: true,
		navText: false,
		dots: true,
		items: 1,
		responsive : {
	    576 : {
	        items: 1,
					mouseDrag: true
	    },
			768 : {
	        items: 2,
					dots: false
	    },
			1004:{
	    	items: 2,
				margin:0,
	    	},
			1280: {
	        items: 2,
				margin: 30,
	    },
			1366:{
	    	items: 2,
	    	},
			1500: {
	        items: 3
	    }
		}
	});

	// $('select').styler();

	$("[name='phone']").mask("+7 (999) 999-99-99");

	// $('.news_container .item .content').readmore({
	// 	moreLink: '<div class="more_btn"></div>',
	// 	lessLink: '<div class="more_btn close"></div>',
	// 	collapsedHeight: 84,
	// 	speed: 0,
	// 	beforeToggle: function(trigger, element, expanded) {
	// 		if(!expanded) {
	// 			$(element).parent().addClass('active');
	// 		}
	// 	},
	// 	afterToggle: function(trigger, element, expanded) {
	// 		if(!expanded) {
	// 			$(element).parent().removeClass('active');
	// 		}
	// 	}
	// });


	function newsShortText(element) {
		let newsText = $(element).text();
		if (newsText.length >= 200) {

			newsText = newsText.substring(0, 200);
			var lastIndex = newsText.lastIndexOf(" ");
			newsText = newsText.substring(0, lastIndex) + '...';

			$(element).before('<div class="content shortText">'+ newsText + '</div>').parent().find('.shortText').append('<div class="more_btn"></div>');

			$(element).append('<div class="more_btn close"></div>').hide();
		}
		console.log(newsText.length);
	}
	if(!$(".news_container").hasClass("awards_container")){
		$(".news_container .item .content").each(function(i) {
			newsShortText(this);
		});
		$(".news_container .item .more_btn").click(function(){
			if( $(this).hasClass('close') ) {
				$(this).parent().parent().find('.content').hide();
				$(this).parent().parent().find('.shortText').show();
				$(this).parent().parent().removeClass('active');
				console.log('true');
			} else {
				$(this).parent().parent().find('.content').show();
				$(this).parent().parent().find('.shortText').hide();
				$(this).parent().parent().addClass('active');
				console.log('false');
			}
		});

		$(".news_container .item .content_wrap .more_btn").click(function(){
			if( $(this).hasClass('close') ) {
				$(this).parent().parent().find('.content').hide();
				$(this).parent().parent().find('.shortText').show();
				$(this).parent().parent().parent().removeClass('active');
				console.log('true');
			} else {
				$(this).parent().parent().find('.content').show();
				$(this).parent().parent().find('.shortText').hide();
				$(this).parent().parent().parent().addClass('active');
				console.log('false');
			}
		});
	}









	// $(".news_container .item .content").text(function(i, text) {
	//
	//   if (text.length >= 200) {
	//
	//     text = text.substring(0, 200);
	//     var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
	//     text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
	//
	// 		$(".news_container .item .content").append('<div class="more_btn"></div>');
	//   }
	//
	//   $(this).text(text);
	//
	// });


	$(".portfolio_galery .slider.owl-carousel").owlCarousel({
	    items: 1,
	    loop: false,
	    autoplay: false,
	    mouseDrag: false,
	    nav: true,
	    navText: false,
	    dots: true,
	    autoWidth: true,
	    stageClass: 'owl-stage owl-stage-imbblock',
	    responsive : {
	    768 : {
	        items: 1,
	        dots: false,
	        stageClass: 'owl-stage owl-stage-mobile',
	        margin: 50,

	    },
	        1200: {
	        items: 3,
	        dots: false,
	        stageClass: 'owl-stage owl-stage-mobile',
	        margin: 60,
	    },
	        1500: {
	        items: 4,
	        dots: false,
	        stageClass: 'owl-stage owl-stage-mobile',
	        margin: 60,
	    }
	    }
	});


	$(".reviews .slider.owl-carousel").owlCarousel({
		items: 2,
		loop: false,
		autoplay: false,
		mouseDrag: false,
		nav: true,
		navText: false,
		dots: true,
		autoWidth: true,
		responsive : {
			768 : {
				items: 1,
				dots: false,
				margin: 60,

			},
			1200: {
				items: 1,
				dots: false,
				margin: 65,
			},
			1500: {
				items: 2,
				dots: false,
				margin: 68,
			}
		}
	});

});
