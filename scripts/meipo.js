/**
 * Created by lixinjie on 2018/8/11.
 */
/*回到顶部*/
$(window).scroll(function() {
    if($(window).scrollTop() >= 200) {
        $("#toTop").fadeIn(); /* 当滑动到不小于 200px 时，回到顶部图标显示 */
    }else {
        $("#toTop").fadeOut(); /* 当滑动到小于(页面被卷去的高度)200px 时，回到顶部图标隐藏 */
    }

    // 头部
    if($(window).scrollTop() > 0) {
        $(".js-heading-wrapper").addClass("scroll");
    } else {
        $(".js-heading-wrapper").removeClass("scroll");
    }
});
$("#toTop").click(function () {
    $("html, body").animate({scrollTop: 0}, 600); /* 持续时间为 600ms */
    return false;
});


// 微信二维码的显示与影藏
$("#wechatIcon").hover(
    function(){
        $("#qrcode").slideDown(400);
    },function() {
        $("#qrcode").slideUp(400);
    }
);