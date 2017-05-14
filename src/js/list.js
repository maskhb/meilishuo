$(function() {
    //加载头尾
    $('#webHeader').load('header.html', function() {
        var pagecount = 1;

        // 当前分页
        var pageNo = 1;

        // 每页显示数量
        var qty = 10;

        // 分页总数
        var pageLen;

        var xhr = new XMLHttpRequest;
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var res = JSON.parse(xhr.responseText);

                var $ul = $("<ul>");
                $ul.css({
                    'margin': "0 auto",
                    'width': '1000px',
                    'display': 'flex',
                    'flex-wrap': 'wrap',
                    'justify-content': 'space-around'
                })
                res = res.map(function(item) {
                    return `<li style="margin-top: 10px;width: 224px;"><a href="details.html"><img src=".${item.src}" style="width:100%">
                        <p>${item.name}</p>
                        <p><span class="price">￥${item.price}</span><span class="count"><i class="fa fa-star-o"></i>1234</span></p>
                    </a></li>`
                }).join('');
                $ul.html(res)
                $('#main_tab1').append($ul)
            }
        }
        xhr.open('get', 'http://localhost/project/src/php/goodlist.php?pageNo=' + pagecount, true);
        xhr.send();

        // 滚动预加载
        window.onscroll = function() {
            console.log(window.scrollY)
            console.log(document.body.clientHeight - window.innerHeight)
            if (window.scrollY >= document.body.clientHeight - window.innerHeight - 300) {
                    console.log("请求一次")
                setTimeout(function() {
                    xhr.open('get', 'http://localhost/project/src/php/goodlist.php?pageNo=' + pagecount, true);
                    xhr.send();
                }, 1000)
            };
        }
    });
    $('#webFooter').load('footer.html');
})