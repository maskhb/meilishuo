$(function(){
	$('#webHeader').load('header.html');
    $('#webFooter').load('footer.html');


    $('.zoom').gdszoom({
		position:'right',
	});

	$('.small-list').on('click','img',function(){
		$('.zoom img').attr({
			src:this.src,
			'data-big':$(this).attr('data-big')
		});
	})
})