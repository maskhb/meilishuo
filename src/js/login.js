define(["jquery"], function($) {
    return {
        init: function() {
            //加载头部尾部
            $('#webHeader').load('header.html');
            $('#webFooter').load('footer.html');
            $(function() {
                // 页面刷新时，判断cookie中是否有username和password
                // 如果有，则跳转
                var cookie = document.cookie.split('; ');
                cookie.forEach(function(item) {
                    var arr = item.split('=');
                    if (arr[0] === 'phone') {
                        phone = arr[1];
                        $('#phone').val(phone);
                    }
                });

                //用户名和密码不能为空
                $('#phone').blur(function() {
                    console.log($('#phone').val());
                    if ($('#phone').val().trim() == '') {
                        alert('请输入手机号');
                    }
                });
                $('#password').blur(function() {
                    console.log($('#password').val());
                    if ($('#password').val().trim() == '') {
                        alert('请输入密码');
                    }
                });

                //若勾选了记住用户名选择框的，则把用户名写入cookie
                if ($(':checkbox').prop('checked')) {
                    console.log('checked勾选');
                    var now = new Date();
                    now.setDate(now.getDate() + 30);
                    document.cookie = 'username=' + username + ';expires=' + now;
                }
                $('#submit').on('click', function(e) {
                    e.preventDefault();
                    $.post('../php/login.php', { phone: $('#phone').val(), password: $('#password').val() }, function(response) {

                        var $obj = eval('(' + response + ')');
                        alert($obj['message']);

                        //登录后变成不可输入
                        $('#phone').val('').attr('disabled', 'disabled');
                        $('#password').val('').attr('disabled', 'disabled');
                        window.location.href = 'index.html';
                    });
                });
            });
        }
    };
});
