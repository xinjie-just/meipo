/**
 * Created by lixinjie on 2018/8/11.
 */
/*回到顶部*/
$(window).scroll(function() {
    if($(window).scrollTop() >= 200) {
        $(".js-to-top").fadeIn(); /* 当滑动到不小于 200px 时，回到顶部图标显示 */
    }else {
        $(".js-to-top").fadeOut(); /* 当滑动到小于(页面被卷去的高度)200px 时，回到顶部图标隐藏 */
    }

    // 头部
    if($(window).scrollTop() > 0) {
        $(".js-heading-wrapper").addClass("scroll");
    } else {
        $(".js-heading-wrapper").removeClass("scroll");
    }
});
$(".js-to-top").click(function () {
    $("html, body").animate({scrollTop: 0}, 600); /* 持续时间为 600ms */
    return false;
});


// 微信二维码的显示与影藏
$("#wechatIcon").hover(
    function(){
        $(".js-qrcode").slideDown(400);
    },function() {
        $(".js-qrcode").slideUp(400);
    }
);
// 重新加载页面时
$(function () {
    matchUrl();
});
$(".js-tab").find("a").click(function () {
    $(this).addClass("active");
    $(this).siblings("a").removeClass("active");
});
// 当前页面地址与路由匹配情况
function matchUrl() {
    var link =  $(".js-tab").find("a");
    var locationUrl = location.href;
    for (var i = 0, len = link.length; i < len; i++) {
        if (locationUrl.indexOf($(link[i]).attr("href")) !== -1) {
            $(link[i]).addClass("active");
            $(link[i]).siblings("a").removeClass("active");
        }
    }
}