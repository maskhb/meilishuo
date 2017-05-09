$(() => {
    setTimeout(function(){
    //搜索栏切换选项卡
    //延时执行代码/或者在回调函数中引用否则DOM节点还未加载
        $('.search-tab span').on('click', function() {
            $('.search-tab span').attr('class', '');
            $(this).attr('class', 'active');
        });
        $('#top_nav2_container li a').on('click', function() {
            $('#top_nav2_container li a').attr('class', '');
            $(this).attr('class', 'active');
        });
    },1000)

    //滚动事件显示回到顶部
	var $totop = $("#sidebar_container").find(".totop")
    $(window).on('scroll', function() {
		var scrollTop = $(window).scrollTop();
    	//显示回到顶部
    	if (scrollTop > 600) {
                $totop.fadeIn();
            } else {
                $totop.fadeOut();
            };
    })
    // 点击回到顶部
    $totop.on('click',  function() {
		$('html,body').animate({
			scrollTop: 0
			});
		})
})
