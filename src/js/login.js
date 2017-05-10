$(function() {
    $('#webHeader').load('header.html');
    $('#webFooter').load('footer.html');

    $('#submit').on('click', function(e) {
        e.preventDefault();

        $.post('../php/login.php', { phone: $('#phone').val(), password: $('#password').val() }, function(response) {

            var $obj = eval('(' + response + ')');
            alert($obj['message'])


            //登录后变成不可输入
            $('#phone').val('').attr('disabled', 'disabled');
            $('#password').val('').attr('disabled', 'disabled');
            window.location.href = 'index.html';
        })
    })
});
