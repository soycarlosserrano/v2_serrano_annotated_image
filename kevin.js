$(document).ready(function () {
	/*function used in several places to show slide info in photo1*/
	var showInfo = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X1-close').addClass('btn_close_show');
		$('#slide').addClass('info_slides_show');
	}

	/*head info*/
	$('#circle_head').click(function () {
		showInfo();
		$('#popIn').text('"There is going to be depression, I am not going to lie, but you have to work hard, emotionally and physically, to recover your mobility."').addClass('popIn-info');
	});

	/*head hand*/
	$('#circle_hand').click(function () {
		showInfo();
		$('#popIn').text('At the time Kevin suffered the accident, he was working as an MTA bus mechanic, so his insurance have been covering his treatment. Prostheses like the one he uses could cost around $100.000').addClass('popIn-info');
	});

	/*heart info*/
	$('#circle_heart').click(function () {
		showInfo();
		$('#popIn').text('“You need a big support system. Without family, friends and loved ones, it can be very hard to deal with an amputation. My biggest support has been my wife.”').addClass('popIn-info');
	});

	/*pocket info*/
	$('#circle_pocket').click(function () {
		showInfo();
		$('#popIn').text('Kevin still have an external fixator, which holds his hips together. Now one of his challenges is to go back to work. “I cannot rely on someone else to get me there on time.”').addClass('popIn-info');
	});



	/*left leg info*/
	$('#circle_left_leg').click(function () {
		showInfo();
		$('#popIn').text('Kevin still feels his legs and constantly suffers “phantom pain,” as if he had real legs hurting. It could last seconds; it could last minutes. He has no control over the pain. “It feels as if somebody is driving needles inside your limbs.”').addClass('popIn-info');
	});

	/*right leg info*/
	$('#circle_right_leg').click(function () {
		showInfo();
		$('#popIn').text('He created the Instagram account @bilateral_kev to inspire people with limb differences and to show the process of someone who is learning to use prosthetics.').addClass('popIn-info');
	});

	/*close info window*/

	$('#X1-close').click(function () {
		$('#X1-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	}); /*closes function for photo 1*/

	/*Start functions for photo2*/

	var showInfo2 = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X2-close').addClass('btn_close_show');
		$('#slide2').addClass('info_slides_show');
	}

	/*chair info*/
	$('#circle_shoe').click(function () {
		showInfo2();
		$('#popIn2').text('Among those living with limb loss, the main causes are vascular disease (54%), trauma (45%) and cancer (fewer than 2%).').addClass('popIn-info');
	});


	/*broom info*/
	$('#circle_knee').click(function () {
		showInfo2();
		$('#popIn2').text('In 2009, hospital costs associated with amputation totaled more than $8.3 billion.').addClass('popIn-info');
	});

	$('#circle_muslo').click(function () {
		showInfo2();
		$('#popIn2').text('About 185,000 amputations occur in the United States each year.').addClass('popIn-info');
	});

	$('#circle_wheel').click(function () {
		showInfo2();
		$('#popIn2').text('Nearly 2 million people in the United States are living with limb loss.').addClass('popIn-info');
	});

	$('#circle_video').click(function () {
		showInfo2();
		$('#popIn2').html('<iframe src="https://player.vimeo.com/video/206650532?title=0&byline=0&portrait=0" width="320" height="180" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>').addClass('popIn-info');
	});

	/*close info window*/

	$('#X2-close').click(function () {
		$('#X2-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide2').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	});

	/*closes functions for photo2*/

});
