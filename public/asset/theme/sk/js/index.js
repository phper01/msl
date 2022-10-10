
$(function(){
	//banner
	var mySwiper1 = new Swiper('#banner .swiper-container', {
		autoplay: 5000,//可选选项，自动滑动
		loop: true,
		speed: 1000,
		effect : 'fade',
		navigation: {
		nextEl: '#banner .swiper-button-next',
        prevEl: '#banner .swiper-button-prev',
		} ,		
		pagination: {
	        el: '#banner .swiper-pagination',
	        clickable: true,
	      },
		 
	})

//产品列表
	$('.product_list .product_list_w .product_inx').each(function(){
		if($(this).index()<6){
			$(this).show();
		}else if($(this).index()>=6&&$(window).width()<=640){
			$(this).remove();
		}
	})

	var mySwiper = new Swiper('.product_list_w', {
		autoplay: 5000,//可选选项，自动滑动		
		speed:1000,
		slidesPerView : 3,
		slidesPerGroup : 3,
		spaceBetween : 20, 
	    pagination: {
	        el: '.swiper-pagination1',
	        clickable: true,
	        renderBullet: function (index, className) {
	          return '<span class="' + className + '">' + (index + 1) + '</span>';
	        },
	    },
	    breakpoints: { 
	    	640: {
	          slidesPerView : 2,
			  slidesPerGroup : 2, 	           
	        },
	        768: {
	          spaceBetween : 10, 
	        }, 
	    }, 
 
	})




//应用领域
var appli_slide;
if($(window).width()>768){
	appli_slide = 4;
} else if($(window).width()<=768 && $(window).width()>520){
	appli_slide = 3;
} else{
	appli_slide = 2.5;
}

var mySwiper2 = new Swiper('.swiper-container.appli_bottom', {
	autoplay: 5000,//可选选项，自动滑动
	speed:1000,
	loop: true,
	slidesPerView : appli_slide,
	navigation: {
		nextEl: '.swiper-button-next.swiper_btn1',
        prevEl: '.swiper-button-prev.swiper_btn1',
	} 
})



//新闻中心
var news_slide;
var news_space;
if($(window).width()>768){
	news_slide = 3;
} else if($(window).width()<=768){
	news_slide = 1;
} 


var mySwiper3 = new Swiper('.news_list .swiper-container', {
	autoplay: 5000,//可选选项，自动滑动
	speed:1000,
	loop: true,
	spaceBetween : 20,
	slidesPerView : news_slide,
	navigation: {
		nextEl: '.swiper-button-next.swiper_btn2',
        prevEl: '.swiper-button-prev.swiper_btn2',
	}  
})



})
