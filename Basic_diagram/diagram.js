$(document).ready(function(){
	updateSize();
	
	$(window).resize(function(){
		updateSize();
	});

	for($i = 0; $i < $idNumber; $i++){
		animateDiagram();

	}
});

function updateSize(){
	$idNumber = $('.diagram_container #diagram_group').length;
	$width = $('.diagram_container').width();
	$itemWidth = $width / $idNumber;
	$paddingLeft = ($idNumber / ((4.5*$idNumber)/4));
	$stringPaddingLeft = $paddingLeft.toString() + '%';
	$('.diagram_container #diagram_group').width($itemWidth-($idNumber));
	$('.diagram_container #diagram_group').css('marginRight','0%');
	$('.diagram_container').css('padding-left',$stringPaddingLeft);
}

function animateDiagram(){
	$spotted = $('.diagram_container #diagram_group #diamgram_rect').eq($i);
	$space = $('.diagram_container #diagram_group #space').eq($i);
	$value = $('.diagram_container #diagram_group #diamgram_rect').eq($i).attr('value');
	$valueInt = 100-parseInt($('.diagram_container #diagram_group #diamgram_rect').eq($i).attr('value'));
	$spaceHeight = $space.height();
	$space.animate({height: $valueInt + '%'}, 500, 'swing');
	$spotted.animate({height: $value + '%'}, 500, 'swing');
}
