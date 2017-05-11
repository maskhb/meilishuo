$(function() {
    $('#webHeader').load('header.html');
    $('#webFooter').load('footer.html');

    //放大镜
    $('.zoom').gdszoom({
        position: 'right',
    });

    $('.small-list').on('click', 'img', function() {
            $('.zoom img').attr({
                src: this.src,
                'data-big': $(this).attr('data-big')
            });
        })
        // 点击加入购物车
    var $currentImg = $('#detail_content>.left>.zoom img')
    var cloneImg = $currentImg[0].clone
    $('.addToCar').on('click', '.btnAdd', function(e) {
            //克隆并且移动商品
            $currentImg.clone(true).appendTo('body').css({
                'position': 'absolute',
                "left": 30,
                "top": 242,
                'width': 80
            })

            .fly({
                start: {
                    "left": 30,
                    "top": 242
                },
                end: {
                    "left": 1240,
                    "top": 186,
                    "width": 20
                },
                onEnd: function() {
                    alert('已添加购物车');
                    
                    this.destory();
                }
            });
        })
        //目标值 x:30---839---1240 y 242---14--186
})
