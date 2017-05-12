$(function() {
    $('#webHeader').load('header.html');
    $('#webFooter').load('footer.html');

    // console.log($("#main_container_car .car_table tbody")[0]);

    //定义输出容器 $tbody
    var $tbody = $("#main_container_car .car_table tbody");

    var goodslist = getCookie('carlist');
    goodslist = goodslist ? JSON.parse(goodslist) : [];
    //输出cookie中的信息

    // 总价
    var totalPrice = 0;

    goodslist.forEach(function(item) {
        totalPrice += item.price * item.qty;

        var htmlStr = `<tr><td><img src=${item.imgurl} style="width: 80px;" data-guid=${item.guid}> </td> <td>${item.name}</td> <td>CNY: ${item.price}</td> <td>${item.qty}</td> <td>${item.price*item.qty}</td> <td> <span class="num_del">删除</span> </td></tr>`
        $tbody.append(htmlStr);
        // console.log(htmlStr, $tbody[0]);
    });
    $('.total_price_car_table').html("CNY : " + totalPrice.toFixed(2))



    //点击事件当前tr
    $tbody.on('click', '.num_del', function(e) {
        //删除
        var $currentTr = $(e.target).closest('tr');
        $currentTr.remove();

        // 清除cookie中对应的商品信息
        var currentGUID = $currentTr.find('img').attr('data-guid')
        console.log(currentGUID)
        for (var i = 0; i < goodslist.length; i++) {
            if (goodslist[i].guid === currentGUID) {
                goodslist.splice(i, 1);
                break;
            }
        }
        // 删除后重写cookie,重新计算总价
        setCookie('carlist', JSON.stringify(goodslist));
        var newPriceTotle = 0;
        (
            JSON.parse(getCookie('carlist'))
        ).forEach(function(item) {
            newPriceTotle += item.price * item.qty;
        });
        console.log(newPriceTotle.toFixed(2))
        $('.total_price_car_table').html("CNY : " + newPriceTotle.toFixed(2));
    });
})
