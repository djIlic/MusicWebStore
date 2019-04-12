$(document).ready(function(){
	
$.ajax({
	
	    url: 'instrumenti.json',
		type: 'GET',
		dataType: 'json',
		success: function(data){
			var ispis = "";
			for(var index in data){
				ispis += "<a href='"+data[index].links+"'><div class='klasa' id='"+data[index].klasa+"'><h1>"+data[index].naslov+"</h1></div></a>";
			}

			$('#sadrzaj').html(ispis);
		}
	});

});
