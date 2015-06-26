$(document).on('ready', function() {

$('.button-giant').on('click',function(){
	$('.button-giant').before('<div class="popup"> <p class="popup-item">~</p><button class="popup-item myButton">Close</button></div>');
})

$('.container').on('click', '.myButton', function(){
	$('.popup').css('display','none')
})

});