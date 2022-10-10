function saveReply(loginhref){
	if(loginhref && loginhref!= "" && loginhref!= "null"){
		var href = loginhref.replace("http://","");
		window.open('http://'+href);
	}else{
		return;
	}
}

function openLinkUrl(link_url,templateUrl){
	if(link_url && link_url != null && link_url!= "null"){
		window.open(link_url);
	}else{
		window.location.href=templateUrl; 
	}
}
//th:onclick="'openPdfFile(&quot'+${rcSeries.pdf_file}+'&quot)'"
function openPdfFile(pdf_url){
	if(pdf_url && pdf_url != null && pdf_url!= "null"){
		window.open(pdf_url,'_blank');
	}else{
		layer.alert("暂无产品系列内容");
	}
}
function openLWFile(pdf_url){
	if(pdf_url && pdf_url != null && pdf_url!= "null"){
		window.open(pdf_url,'_blank');
	}else{
		layer.alert("暂无论文详情文件");
	}
}
function openFile(pdf_url){
	if(pdf_url && pdf_url != null && pdf_url!= "null"){
		window.open(pdf_url,'_blank');
	}else{
		layer.alert("暂无文件");
	}
}
//以下为导航控制
$(function(){
	
	//鼠标移入二级导航  三级导航进行切换
	$('.one_floor>li').hover(function(){
		$(this).children('ul').addClass('show');
		$(this).siblings().children('ul').removeClass('show');
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		
	})
	
	
	//鼠标移入三级导航  四级导航进行切换
	$('.two_floor>li').hover(function(){
		$(this).children('ul').addClass('show');
		$(this).siblings().children('ul').removeClass('show');
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
	})
	
	//鼠标移入四级导航  五级导航进行切换
	$('.three_floor>li').hover(function(){
		$(this).find('.four_floor').addClass('show');
		$(this).siblings().find('.four_floor').removeClass('show');
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
	})
	
	//鼠标移入各级导航后  控制菜单内容高度
		//移入二级导航
	$('.one_floor>li').hover(function(){
		$('.floor').css('height','auto');
		$('.four_floor').css('height','auto');
		var _one_floor =$(this).parents('.one_floor').outerHeight();
		var _two_floor =$(this).find('.two_floor.show').outerHeight();
		var _three_floor =$(this).find('.three_floor.show').outerHeight();
		var _four_floor =$(this).find('.four_floor.show').outerHeight();
		var _height = Math.max(_one_floor, _two_floor,_three_floor,_four_floor);
		$('.menu_area').css('height',_height);
		$('.floor').css('height',_height);
		$('.four_floor').css('height',_height);
	})
		//移入三级导航
	$('.two_floor>li').hover(function(){
		$('.floor').css('height','auto');
		$('.four_floor').css('height','auto');
		var _one_floor =$(this).parents('.one_floor').outerHeight();
		var _two_floor =$(this).parents('.two_floor').outerHeight();
		var _three_floor =$(this).find('.three_floor.show').outerHeight();
		var _four_floor =$(this).find('.four_floor.show').outerHeight();
		var _height = Math.max(_one_floor, _two_floor,_three_floor,_four_floor);
		$('.menu_area').css('height',_height);
		$('.floor').css('height',_height);
		$('.four_floor').css('height',_height);
	})
		//移入四级导航
	$('.three_floor>li').hover(function(){
		
		$('.floor').css('height','auto');
		$('.four_floor').css('height','auto');
		var _one_floor =$(this).parents('.one_floor').outerHeight();
		var _two_floor =$(this).parents('.two_floor').outerHeight();
		var _three_floor =$(this).find('.three_floor.show').outerHeight();
		var _four_floor =$(this).find('.four_floor.show').outerHeight();
		var _height = Math.max(_one_floor, _two_floor,_three_floor,_four_floor); 
		$('.menu_area').css('height',_height);
		$('.floor').css('height',_height);
		$('.four_floor').css('height',_height);
	})
	
	//鼠标移入一级导航 展开菜单 并控制菜单内容高度
	
		var headerNavLis=$('.header_pc .menu .menu_inx.big_menu');
			headerNavLis.each(function(){
				$(this).hoverDelay({ 
					hoverDuring: 0, 
					outDuring: 0, 
					  hoverEvent: function(){ 
					  	//鼠标移入一级导航后  导航下显示各级菜单第一级内容
							$('.one_floor li:nth-child(1)').addClass('on');
						 	$('.one_floor li.on>ul:nth-child(2)').addClass('show');
						 	$('.menu_list_one').css('height','auto');
							$('.menu_area').css('height','auto');
							$('.floor').css('height','auto');
							$('.four_floor').css('height','auto');
							
							
							$(this).find('.menu_list_one').stop().fadeIn();	
							var _one_floor =$(this).find('.one_floor').outerHeight();
							var _two_floor =$(this).find('.two_floor.show').outerHeight();
							var _three_floor =$(this).find('.three_floor.show').outerHeight();
							var _four_floor =$(this).find('.four_floor.show').outerHeight();
							var _height = Math.max(_one_floor, _two_floor,_three_floor,_four_floor); 
							$('.menu_area').css('height',_height);
							$('.floor').css('height',_height);
							$('.four_floor').css('height',_height);
					  }, 
					  outEvent: function(){ 
						$(this).find('.menu_list_one').stop().fadeOut();
						$('.floor').removeClass('show');
					 	$('.floor li').removeClass('on');
					 	$('.four_floor').removeClass('show');
				} 
			}); 
		})
	
	
	 
	 //导航样式2控制
	$('.menu_inx.small_menu').hover(function(){
		$(this).find('.menu_list_two').stop().fadeIn();
	},function(){
		$(this).find('.menu_list_two').stop().fadeOut();
	})


//搜索框控制

	$('.header_pc .search').click(function(){
		$('.pc_search').slideToggle();
	})
	
	$('.pc_search .search_w .close').click(function(){
		$('.pc_search .text_sub').val('');
	})
	
	$('.header_pc .menu .menu_inx>a').hover(function(){
		$('.pc_search').slideUp()
	})
	$(window).scroll(function(){
		$('.pc_search').slideUp();
	})
 if($(window).width()<=480) {
	 $(".footer .footer_r .menu_inx").click(function () {
		 $(this).toggleClass("select");
		 $(this).siblings().removeClass("select");
		 $(this).find("ul").slideToggle();
		 $(this).siblings().find("ul").slideUp(400);
	 });
 }

//移动端导航

$('.header_wap .menu_btn').click(function(){
		$('.menu_wap').addClass('show');
	})
	$('.menu_wap .close').click(function(){
		$('.menu_wap').removeClass('show');
	})
	$('.menu_con .menu_inx').click(function(){
		$(this).find('ul').slideToggle();
		$(this).find("h3").toggleClass('on');
		$(this).siblings().find('ul').slideUp();
		$(this).siblings().find('h3').removeClass('on');
	})
})	
	
	//导航隐藏弹出
			/*$(document).ready(function(){
			         var p=0,
			         t=0;
			          $(window).scroll(function(){
			            p=$(this).scrollTop();
			             if(t<p){
			             	if ($(window).scrollTop()>120) {
			             		$('.header_pc').addClass('hiddened');
			             	}
			                if($(window).scrollTop()>75){
			                	$('.header_wap').addClass('hiddened');
			                }
			
			             }else{
			                  $('.header_pc').removeClass('hiddened');
			                  $('.header_wap').removeClass('hiddened');
			             }
			             setTimeout(function(){ t = p ; },0);
			             $('.header_mobile .menu_btn').removeClass('on');
			             $('.header_mobile .menu_list').slideUp();
			           })
			})*/