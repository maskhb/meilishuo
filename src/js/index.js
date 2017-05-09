$(function(){
	 $('#webHeader').load('header.html');
     $('#webFooter').load('footer.html');

	$('#nav span').on('click',function() {
        $('#nav span').attr('class', '');
        $(this).attr('class', 'active');
    });
})