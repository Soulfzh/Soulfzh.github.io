$(function () {
    progress_w = $('.page_2').width(); //设置进度条宽度等于屏幕宽度

    $(window).scroll(function () { //设置进度条在最顶端
        $('.progress').css('top', '0px')
    });

    var page_index = 0;
    $("button").click(function () { //按钮点击事件，切换页面
        $(".page")
            .eq(page_index + 1)
            .addClass("visable");
        $(".page")
            .eq(page_index)
            .removeClass("visable");
        page_index += 1;
        if (page_index == $(".page").length) {
            $("body")
                .find(".page")
                .eq(0)
                .addClass("visable");
            page_index = 0;
        }
    });

    var speed = 50; //数值越高越慢
    bar = setInterval(function () { //进度条事件
        nowwidth = parseInt($(".bar").width());
        if (nowwidth <= progress_w) {
            barwidth = nowwidth + progress_w * 0.01 + "px";
            $(".bar").css("width", barwidth);

        } else {
            // clearInterval(bar);
            $(".bar").css("width", "0px");
            if (page_index == 1) {
                // TODO
            } else {
                $("button").trigger("click");
            }
        }
    }, speed);
});