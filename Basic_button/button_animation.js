$(document).ready(function(){
	$('#animated_button').mouseover(function(){
		$borderTopLeftRadius = $(this).css('borderTopLeftRadius');
		$borderTopRightRadius = $(this).css('borderTopRightRadius');
		$borderBottomLeftRadius = $(this).css('borderBottomLeftRadius');
		$borderBottomRightRadius = $(this).css('borderBottomRightRadius');
		$(this).animate({  borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}, 300, 'linear');
	});
	$('#animated_button').mouseleave(function(){
		$(this).animate({  borderTopLeftRadius: $borderTopLeftRadius, borderTopRightRadius: $borderTopRightRadius, borderBottomLeftRadius: $borderBottomLeftRadius, borderBottomRightRadius: $borderBottomRightRadius}, 300, 'linear');
	});
});
