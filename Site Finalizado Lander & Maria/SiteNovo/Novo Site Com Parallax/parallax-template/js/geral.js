
	var isDownFlash = true;
	var isDownGPS = true;
	var isDownDevices = true;

$(function(){

	$(".icon-block .icone-raio").click(function(e){
		if(isDownFlash){
			$(".icon-block .icone-raio ~ p").slideUp();
			isDownFlash = false;

		} else {
			$(".icon-block .icone-raio ~ p").slideDown();
			isDownFlash = true;
		}
	});

	$(".icon-block .icone-gps").click(function(e){
		if(isDownGPS){
			$(".icon-block .icone-gps ~ p").slideUp();
			isDownGPS = false;
		
		} else {
			$(".icon-block .icone-gps ~ p").slideDown();
			isDownGPS = true;
		}
	});


	$(".icon-block .icone-devices").click(function(e){
		if(isDownDevices){
			$(".icon-block .icone-devices ~ p").slideUp();
			isDownDevices = false;
		
		} else {
			$(".icon-block .icone-devices ~ p").slideDown();
			isDownDevices = true;
		}

	});

	

});