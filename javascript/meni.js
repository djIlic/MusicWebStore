$(document).ready(function(){

$('#meni li ul').css({

display:"none",
left:"auto"});

$('#meni li').hover(function(){
$(this)
.find('ul')
.stop(true, true)
.slideDown('slow'), function(){
$(this)
.find('ul')
.stop(true,true)
.fadeOut('slow');
}
		
});

)
}