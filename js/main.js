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
			if($('.filter_container div').find('input:checked').length > 0){
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

	if($(window).width() > 769) {
        createOuterCarousel();
        createInnerCarousel();   
	} else {
        createInnerCarousel();

    };
	$(window).resize(function(){
	    if($(window).width() < 769){
            $(".main_news_container .slider.owl-carousel").trigger('destroy.owl.carousel');
	    } else {
            $(".main_news_container .slider.owl-carousel").trigger('destroy.owl.carousel');
            $(".news_container .img_block .owl-carousel").trigger('destroy.owl.carousel');
            createOuterCarousel();
            createInnerCarousel();
	    }
    });

    function createOuterCarousel() {
		$(".main_news_container .slider.owl-carousel").owlCarousel({
            items: 1,
            loop: false,
            autoplay: false,
            mouseDrag: false,
            nav: true,
            navText: ["<img src='img/icons/arrow-left-orange.svg'>", "<img src='img/icons/arrow-right-orange.svg'>"],
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
                items: 3,
                margin: 36,
            }
            }
        });
	}

	
function createInnerCarousel(){
	$(".news_container .img_block .owl-carousel").owlCarousel({
		// autoWidth: true,
		items: 1,
		loop: true,
		autoplay: false,
		mouseDrag: true,
		nav: false,
		navText: false,
		dots: true,
		stageClass: 'owl-stage owl-stage-imbblock',
	});
}





	$(".header_slider .owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		mouseDrag: true,
		nav: false,
		navText: false,
		dots: false
	});

	$(".header_slider .left").click(function() {
		$(".header_slider .owl-carousel").trigger('prev.owl.carousel');
		$(this).css({'opacity': 1});
		$(".header_slider .right").css({'opacity': 0.7});
	});

	$(".header_slider .right").click(function() {
		$(".header_slider .owl-carousel").trigger('next.owl.carousel');
		$(this).css({'opacity': 1});
		$(".header_slider .left").css({'opacity': 0.7});
	});

	$(".main_portfolio .btn").click(function () {
		$(".main_portfolio .item-last").toggle();
	})


	$(".awards_container .slider.owl-carousel").owlCarousel({
		loop: false,
		autoplay: false,
		mouseDrag: false,
		nav: true,
		navText: ["<img src='img/icons/arrow-left-orange.svg'>", "<img src='img/icons/arrow-right-orange.svg'>"],
		dots: false,
		items: 1,
		responsive : {
            0: {
                nav: false,
                loop: true,
            },
			768 : {
                items: 1.47,
                mouseDrag: true,
                nav: false,
                loop: true,
        },
			992:{
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

	$(".awards .item .img_block").on('mousemove', function (event) {
		$(this).find("img").css({"filter" : "brightness(0.4)"});
		$(this).find(".loup").css({"display" : "block"});
		console.log("true")
	})
	$(".awards .item .img_block").on('mouseout', function (event) {
		$(this).find("img").css({"filter" : "brightness(1)"});
		$(this).find(".loup").css({"display" : "none"});
		console.log("true1")
	})



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



    $(".portfolio_galery .portfolio_item").on('mousemove', function (event) {
    	$(this).find("img").css({"filter" : "brightness(0.5)"});
    	$(this).find(".loup").css({"display" : "block"});
    	console.log("true")
    })
    $(".portfolio_galery .portfolio_item").on('mouseout', function (event) {
    	$(this).find("img").css({"filter" : "brightness(1)"});
    	$(this).find(".loup").css({"display" : "none"});
    	console.log("true1")
    })


	$(".portfolio_galery .slider.owl-carousel").owlCarousel({
	    items: 1,
	    loop: false,
	    autoplay: false,
	    mouseDrag: false,
	    nav: true,
	    navText: ["<img src='img/icons/arrow-left-orange.svg'>", "<img src='img/icons/arrow-right-orange.svg'>"],
	    dots: false,
	    autoWidth: true,
	    stageClass: 'owl-stage owl-stage-imbblock',
	    responsive : {
            0:{
                nav: false,
                dots: true,
                loop: true,
            },
	        768 : {
            items: 1,
            stageClass: 'owl-stage owl-stage-mobile',
            dots: true,
            margin: 50,

	    },
	        1200 : {
            items: 3,
            stageClass: 'owl-stage owl-stage-mobile',
	        margin: 60,
	    },
	        1500 : {
            items: 3,
            stageClass: 'owl-stage owl-stage-mobile',
	        margin: 60,
        },
        1900:{
            items: 3,
            margin: 60,
        },
	    }
	});


	$(".reviews_container .slider.owl-carousel").owlCarousel({
		items: 2,
		loop: false,
		autoplay: false,
		mouseDrag: false,
		nav: true,
		navText: ["<img src='img/icons/arrow-left-orange.svg'>", "<img src='img/icons/arrow-right-orange.svg'>"],
		dots: true,
		autoWidth: true,
	    stageClass: 'owl-stage owl-stage-imbblock',

		responsive : {
            0:{
                nav: false,
                dots: true,
                loop: true,
            },
            414:{
                dots: true,
            },
			768 : {
				items: 1,
                margin: 60,

			},
			1200: {
				items: 1,
                margin: 65,
			},
			1500: {
				items: 2,
				margin: 68,
			}
		}
	});




	/////////// news dots

		var newsLength = $(".item_inner.dots_mobail").find('.owl-item')
		console.log(newsLength.length)


	$(window).resize(function(){
	    if(newsLength.length / 2 > 5) {
			$(".item_inner.dots_mobail .owl-dots").css("display" , "none");
			$(".item_inner.dots_mobail .dots_wrapper").css("display" , "block");

			
		} else {
			$(".item_inner.dots_mobail .owl-dots").css("display" , "flex");
			$(".item_inner.dots_mobail .dots_wrapper").css("display" , "none");

			
		};
	});



		if(newsLength.length / 2 > 5) {
			$(".item_inner.dots_mobail .owl-dots").css("display" , "none");
			$(".item_inner.dots_mobail .dots_wrapper").css("display" , "block");

			
		} else {
			$(".item_inner.dots_mobail .owl-dots").css("display" , "flex");
			$(".item_inner.dots_mobail .dots_wrapper").css("display" , "none");

		};

/////////// portdolio dots

	var portfolioLength = $(".portfolio_galery").find('.owl-item')
	console.log(portfolioLength.length)
	

	$(window).resize(function(){
	    if($(window).width() < 768){
			if(portfolioLength.length > 5 ) {
				console.log(portfolioLength.length)
				$(".portfolio_galery .owl-dots").css("display" , "none");
				$(".portfolio_galery .dots_wrapper").css("display" , "block");
			} else {
				$(".portfolio_galery .owl-dots").css("display" , "flex");
				$(".portfolio_galery .dots_wrapper").css("display" , "none");
			}
        } else{
            $(".dots_wrapper").css("display" , "none");
        }
        
	});

	if($(window).width() < 768 && portfolioLength.length > 5) {
		$(".portfolio_galery .owl-dots").css("display" , "none");
		$(".portfolio_galery .dots_wrapper").css("display" , "block");
	} else {
		$(".portfolio_galery .owl-dots").css("display" , "flex");
		$(".portfolio_galery .dots_wrapper").css("display" , "none");
	};





/////////// awards dots

	var awardsLength = $(".awards").find('.owl-item')
	console.log(awardsLength.length)
	

	$(window).resize(function(){
	    if($(window).width() < 414){
			if(awardsLength.length > 5 ) {
				$(".awards.dots_mobail .owl-dots").css("display" , "none");
				$(".awards .dots_wrapper").css("display" , "block");
			} else {
				$(".awards.dots_mobail .owl-dots").css("display" , "flex");
				$(".awards .dots_wrapper").css("display" , "none");
			}
	    }
	});
	if($(window).width() < 414 && awardsLength.length > 5) {
		$(".awards.dots_mobail .owl-dots").css("display" , "none");
		$(".awards .dots_wrapper").css("display" , "block");
	} else {
		$(".awards.dots_mobail .owl-dots").css("display" , "flex");
		$(".awards .dots_wrapper").css("display" , "none");
	};






///////////reviews dots

	var reviewsLength = $(".reviews").find('.owl-item')
	console.log(reviewsLength.length)
	

	$(window).resize(function(){
	    if($(window).width() < 414){
			if(reviewsLength.length > 5 ) {
				$(".reviews.dots_mobail .owl-dots").css("display" , "none");
				$(".reviews .dots_wrapper").css("display" , "block");
			} else {
				$(".reviews.dots_mobail .owl-dots").css("display" , "flex");
				$(".reviews .dots_wrapper").css("display" , "none");
			}
	    } else {
            $(".reviews .dots_wrapper").css("display" , "none");
        }
	});
	if($(window).width() < 414 && reviewsLength.length > 5) {
		$(".reviews.dots_mobail .owl-dots").css("display" , "none");
		$(".reviews .dots_wrapper").css("display" , "block");
	} else {
		$(".reviews.dots_mobail .owl-dots").css("display" , "flex");
		$(".reviews .dots_wrapper").css("display" , "none");
	};





	$(".dots_mobail .slider.owl-carousel").owlCarousel().on("dragged.owl.carousel", function (event) {
		var carouselDir = event.relatedTarget['_drag']['direction'];
		if( carouselDir == "left") {
			$(".dots_wrapper").addClass("dots_left")
			setTimeout(function(){ 
			$(".dots_wrapper").removeClass("dots_left")
			}, 200);;
		} else {
			console.log("false")
			$(".dots_wrapper").addClass("dots_right")
			setTimeout(function(){ 
			$(".dots_wrapper").removeClass("dots_right")
			}, 200);;
		}
	});


	$(".dots_mobail .owl-carousel").owlCarousel().on("dragged.owl.carousel", function (event) {
		var carouselDir = event.relatedTarget['_drag']['direction'];
		if( carouselDir == "left") {
			$(".dots_wrapper").addClass("dots_left")
			setTimeout(function(){ 
			$(".dots_wrapper").removeClass("dots_left")
			}, 200);;
		} else {
			console.log("false")
			$(".dots_wrapper").addClass("dots_right")
			setTimeout(function(){ 
			$(".dots_wrapper").removeClass("dots_right")
			}, 200);;
		}
	});





	// var newsCarousel = $('news_carousel').find(".slider.owl-carousel")

	// $(".dots_mobail .slider.owl-carousel").owlCarousel().on("dragged.owl.carousel", function (event) {
	// 	var carouselDir = event.relatedTarget['_drag']['direction'];
	// 	console.log("fffff")
	// 	if( carouselDir == "left") {
	// 		console.log('left')
	// 		$(".dots_wrapper").addClass("dots_left")
	// 		setTimeout(function(){ 
	// 		$(".dots_wrapper").removeClass("dots_left")
	// 		}, 200);;
	// 	} else {
	// 		console.log("false")
	// 		$(".dots_wrapper").addClass("dots_right")
	// 		setTimeout(function(){ 
	// 		$(".dots_wrapper").removeClass("dots_right")
	// 		}, 200);;
	// 	}
	// });












});
