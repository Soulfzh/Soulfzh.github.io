$(function () {
    $(document).ready(function () {
        var screen_w = $(document).width();
        var screen_h = $(document).height();
        var img_hight = $('.imgview').height();
        // var img_top = (screen_h - ) / 2;

        $(".bubble").each(function () {
            var path = $(this).css('background'); //获取背景图片的绝对Url
            var sp = path.split('I')[1].split('"')[0];
            var t_path = 'I' + sp; //相对url
            $(this).click(function () {
                var rad = $(this).css("animation-play-state"); //动画的运动状态。是否处于运动中
                var img_left = $(this).css('left'); //记录气泡点击位置
                var img_bottom = $(this).css('bottom')

                if (rad == 'running') {
                    $(this).css({
                        // "border-radius": "0",
                        // 'z-index': '3',
                        // 'opacity': '1', 直接对图片进行操作，不过失败，转为获取背景，用新层显示
                        'animation-play-state': 'paused'
                    });
                    $('.photoshow').css('display', 'block').animate({
                        width: '100%',
                        height: '100%'
                    }, 100, function () {
                        $('.imgview').attr({
                            'src': t_path
                        }).animate({
                            width: '100%',
                            opacity: '1'
                        }, 50)
                    })
                    // $('p').html('left:' + img_left + 'bottom' + img_bottom);
                    // $('p').html(t_path);
                }
            });
        });
        $('.imgview').click(function () {
            $('.bubble').css('animation-play-state', 'running');
            $(this).animate({
                width: '50%',
                opacity: '0'
            }, 100, function () {
                $('.photoshow').css({
                    'display': 'none',
                    width: '0%',
                    height: '0%'
                });
            }).css('background', 'none');
        })
    });
})