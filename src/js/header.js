$(() => {
	//选项卡切换
    $('.search-tab span').on('click', function() {
        $('.search-tab span').attr('class', '');
        $(this).attr('class', 'active');
    });
    $('.clearfix li a').on('click', function() {
        $('.clearfix li a').attr('class', '');
        $(this).attr('class', 'active');
    })
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
