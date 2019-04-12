var niz=[
{
	"slika":"images/k1.jpg",
	"naslov":"Casio CTK-1500",
	"title":"Casio CTK-1500",
	"alt":"Casio CTK-1500",
	"staraCena":"19.999,85 RSD",
	"novaCena":"14.999,85 RSD",
	"links":"klavijature.html"
},
{
	"slika":"images/t2.jpg",
	"naslov":"Eclipse CX-W066 truba",
	"title":"Eclipse CX-W066 truba",
	"alt":"Eclipse CX-W066 truba",
	"staraCena":"29.461,00 RSD",
	"novaCena":"23.001,00 RSD",
	"links":"trube.html"
},
{
	"slika":"images/v3.jpg",
	"naslov":"Soundsation E-Master",
	"title":"Soundsation E-Master",
	"alt":"Soundsation E-Master",
	"staraCena":"35.000 RSD",
	"novaCena":"23.985,00 RSD",
	"links":"violine.html"
},
{
	"slika":"images/750.jpg",
	"naslov":"Pioneer HDJ-1500 Gold",
	"title":"Pioneer HDJ-1500 Gold",
	"alt":"Pioneer HDJ-1500 Gold",
	"staraCena":"29.676,26 RSD",
	"novaCena":"24.676,26 RSD",
	"links":"dj-oprema.html"
}
]

var izdvajamo=" ";
for (var i=0; i<niz.length;i++){
	izdvajamo+="<div class='izdvajamo'><div class='artikal'><a href="+niz[i].links+" title="+niz[i].title+"><img src="+niz[i].slika+" alt="+niz[i].alt+"/></a></div><div class='cena'><h2>"+niz[i].naslov+"</h2><span>"+niz[i].novaCena+"</span> &nbsp; &nbsp; &nbsp; <span class='stara'>"+niz[i].staraCena+"</span></div></div>";
}
document.getElementById('preporuka').innerHTML=izdvajamo;