$(document).ready(function(){
	$('h1').css('display', 'none');
	$('h1').fadeIn(700);
	$('#image').css('display', 'none');
	$('#image').fadeIn(1500);
	$('#image2').css('display', 'none');
});

$(".flag-section").mouseenter(function(){
	$("#image2").fadeToggle(700);
});

$(".flag-section").mouseleave(function(){
	$("#image2").fadeToggle(500);
});
