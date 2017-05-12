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
                'data-big': $(this).attr('data-big'),
                'data-guid':$(this).attr('data-guid')
            });
        })
        // 点击加入购物车
    var $currentImg = $('#detail_content>.left>.zoom img')
    var cloneImg = $currentImg[0].clone
        //点击飞入购物车
        //目标值 x:30---839---1240 y 242---14--186
    $('.addToCar').on('click', '.btnAdd', function(e) {
        //克隆并且移动商品
        $currentImg.clone(true).appendTo('body').css({
            'position': 'absolute',
            "left": 30,
            "top": 242,
            'width': 80
        }).fly({
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
                $(this).remove;
            }
        })



        //先获取原有的cookie
        var carlist = getCookie('carlist');

        carlist = carlist ? JSON.parse(carlist) : [];
        console.log(carlist)
            //获取商品信息
        currentGUID = $currentImg.attr('data-guid');
        // cookie中是否存在当前商品
        var hasGoods = false;
        for (var i = 0; i < carlist.length; i++) {
            if (carlist[i].guid === currentGUID) {
                hasGoods = true;
                // 如果当前商品已经存在cookie中，则商品数量+1
                carlist[i].qty++;
                break;
            }
        }
        if (!hasGoods) {
            var goods = {
                guid: currentGUID,
                name: $('.good_info h2').text(),
                price: $('.good_info .price').text(),
                imgurl: $currentImg.attr('src'),
                qty: 1
            };
            // 把当前商品信息写入carlist
            carlist.push(goods);
        }
        // 写入cookie
        setCookie("carlist", JSON.stringify(carlist), 7, '/')
    });
    console.log(getCookie('carlist'))
})
