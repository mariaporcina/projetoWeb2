$(function(){

	$(".icon-block .icone").mouseover(function(e){
		$(this).addClass('remove');
		$(".icon-block .icone-img img").addClass('img-lander');
	});

	$(".icon-block .icone").mouseout(function(e){
		$(this).removeClass('remove')
		$(".icon-block .icone-img img").removeClass('img-lander');
	});

});