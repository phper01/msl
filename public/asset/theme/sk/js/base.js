$(function(){
    if(!placeholderSupport()){
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    };
    if(!IsPC()){$('body').addClass('touch_body')}
    //ie浏览器
    if(isIE()){$('html').addClass('isIe');}
    // 获取当前url
    var url_location = window.location.pathname;
    var arr = [];
    arr = url_location.split('/');
})

function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}
function scrollT($Dom){
    if($Dom.offset()){
      if($(window).scrollTop()+$(window).height()>=$Dom.offset().top+200){
          return true;
      }
    }
}
function mainBgResize1($img, width, height, W_b, H_b) {
    var sw = width,
        sh = width / W_b * H_b
    if (sh < height) {
        sh = height;
        sw = height / H_b * W_b
    }
    $img.css({height:sh,width:sw, marginTop: -(sh - height) / 2, marginLeft: -(sw - width) / 2, 'visibility': 'visible' });

}
//判断是否Firefox浏览器
function isFirefox(){
    if (navigator.userAgent.indexOf("Firefox") > -1) 
    return true;
    else
    return false;
}
//判断是否IE浏览器
function isIE() {
    if (!!window.ActiveXObject || "ActiveXObject" in window)
    return true;
    else
    return false;
}
function IsPC() { 
   var userAgentInfo = navigator.userAgent; 
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"); 
   var flag = true; 
   for (var v = 0; v < Agents.length; v++) { 
       if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; } 
   } 
   return flag; 
}  
//绑定事件监听
function addEvent(eve,callback){
  if (window.attachEvent){
      window.attachEvent("on"+eve,callback); 
  }else if(window.addEventListener) { 
      window.addEventListener(eve,callback,false);   
  }
}
//判断pad横屏竖屏，刷新页面
addEvent('load', function(){
   // orientationChange();
    window.onorientationchange = orientationChange;
});
function orientationChange() {
  switch(window.orientation) {
　　case 0: 
        //alert("肖像模式 0,screen-width: " + screen.width + "; screen-height:" + screen.height);
         window.location.reload();
        break;
　　case -90: 
        //alert("左旋 -90,screen-width: " + screen.width + "; screen-height:" + screen.height);
      window.location.reload();
        break;
　　case 90:   
       // alert("右旋 90,screen-width: " + screen.width + "; screen-height:" + screen.height);
      window.location.reload();
        break;
　　case 180:   
    　　//alert("风景模式 180,screen-width: " + screen.width + "; screen-height:" + screen.height);
    window.location.reload();
    　　break;
  }
};
//获取IE浏览器版本
function getBrowserVersion(){
  var hc = $('html').attr('class');
  if(hc){
    var ieVersion = hc && hc.split(' ')[1];
    if(ieVersion){
      $('.browserupgrade>strong').text(ieVersion.toUpperCase());
    }
  }
}
getBrowserVersion();
//鼠标延迟执行事件方法
$.fn.hoverDelay = function(options){
    var defaults = {
        hoverDuring: 200,
        outDuring: 200,
        hoverEvent: function(){
            $.noop();
        },
        outEvent: function(){
            $.noop();    
        }
    };
    var sets = $.extend(defaults,options || {});
    var hoverTimer, outTimer, that = this;
    return $(this).each(function(){
        $(this).on('mouseenter',function(){
            clearTimeout(outTimer);
            hoverTimer = setTimeout(function(){sets.hoverEvent.apply(that)}, sets.hoverDuring);
        });
        $(this).on('mouseleave',function(){
            clearTimeout(hoverTimer);
            outTimer = setTimeout(function(){sets.outEvent.apply(that)}, sets.outDuring);
        });
    });
}
// 搜索
/* $(function(){
        $(".select_box").click(function(event){   
            event.stopPropagation();
            $(this).find(".option").toggle();
            $(this).parent().siblings().find(".option").hide();
        });
        $(document).click(function(event){
            var eo=$(event.target);
            if($(".select_box").is(":visible") && eo.attr("class")!="option" && !eo.parent(".option").length)
            $('.option').hide();                                    
        });
        $(".option li").click(function(){
            var check_value=$(this).text();
            var zlValue = $('.option li:eq(1)').html();
            var bqValue = $('.option li:eq(2)').html();
            $(this).parent().siblings(".select_txt").text(check_value);
            $("#select_value").val(check_value);
            if(check_value == zlValue) {
                $('#searchPlaceholder').prop('placeholder','按图表搜索');
            }else if(check_value == bqValue) {
                $('#searchPlaceholder').prop('placeholder','高级搜索');
            }else {
                $('#searchPlaceholder').prop('placeholder','关键字搜索');
            }
        });


})*/