$(document).ready(function(){
$('#slider > div:gt(0)').hide();
setInterval(function(){
		$('#slider > div:first')
	.fadeOut(500)
	.next()
	.fadeIn(1000)
	.end()
	.appendTo('#slider');
}, 3000);

$('.izdvajamo img').hover(function(){

        $(this).animate({width: '+=20px'}, 1000);
		

   }, function(){

        $(this).animate({width: '-=20px'}, 1000);

   });
});