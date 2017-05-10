$(function() {
    $('#webHeader').load('header.html');
    $('#webFooter').load('footer.html');
    $('#nav span').on('click', function() {
        $('#nav span').attr('class', '');
        $(this).attr('class', 'active');
    });

    var $ul = $("#carouser_container ul").hbcarousel({
        imgs: ["../img/banner0.jpg", "../img/banner1.jpg", "../img/banner2.jpg"],
        buttons: false,
        // 设置间隔时间
        duration: 3000,
        type: 'vertial'
    }).show();

})
