$(function(){
	$('#nav span').on('click',function() {
        $('#nav span').attr('class', '');
        $(this).attr('class', 'active');
    });
})