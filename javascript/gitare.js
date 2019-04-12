var niz = [
    {
	"slika":"images/g1.jpg",
	"naslov":"Vox Virage II DC",
	"title":"Vox Virage II DC",
	"alt":"Vox Virage II DC",
	"opis":"Pedantno zanatstvo, izuzetno svestrana svirka sa ovom gitarom! Ba...",
	"Cena":"151.290,00 RSD"
},
{
	"slika":"images/g2.jpg",
	"naslov":"Vox HDC77 BB",
	"title":"Vox HDC77 BB",
	"alt":"Vox HDC77 BB",
	"opis":"Vox HDC77 džez električna gitara od koje zastaje dah. Hollow body...",
	"Cena":"86.100,00 RSD"
},
{
	"slika":"images/g3.jpg",
	"naslov":"Vox HDC77 SB",
	"title":"Vox HDC77 SB",
	"alt":"Vox HDC77 SB",
	"opis":"Semi-hollow-body gitara predstavljena 2010. godine uključuje mnog...",
	"Cena":"86.100,00 RSD"
},
{
	"slika":"images/g4.jpg",
	"naslov":"Vox SDC55 TB",
	"title":"Vox SDC55 TB",
	"alt":"Vox SDC55 TB",
	"opis":"Vox 55 serija double cut električnih gitara! Model 55 definitivno...",
	"Cena":"80.565,00 RSD"
},
{
	"slika":"images/g5.jpg",
	"naslov":"Vox SDC55 GL",
	"title":"Vox SDC55 GL",
	"alt":"Vox SDC55 GL",
	"opis":"Vox 55 serija double cut električnih gitara! Model 55 definitivno...",
	"Cena":"80.565,00 RSD"
},
{
	"slika":"images/g6.jpg",
	"naslov":"Vox SSC55 GL",
	"title":"Vox SSC55 GL",
	"alt":"Vox SSC55 GL",
	"opis":"Vox 55 serija single cut električnih gitara! Naša preporuka SSC5...",
	"Cena":"80.565,00 RSD"
},
{
	"slika":"images/g7.jpg",
	"naslov":"Vox SSC55 VC",
	"title":"Vox SSC55 VC",
	"alt":"Vox SSC55 VC",
	"opis":"Prelepa gitara sa vernim VOX-ovim tonom!",
	"Cena":"80.565,00 RSD"
},
{
	"slika":"images/g8.jpg",
	"naslov":"Vox SDC55 BK",
	"title":"Vox SDC55 BK",
	"alt":"Vox SDC55 BK",
	"opis":"Vox 55 serija double cutaway gitara!",
	"Cena":"80.565,00 RSD"
}
]
function generisiStranu(){
var prikazi=" ";
for (var j=0; j<niz.length;j++){
	prikazi+="<div class='proizvod'><a href="+niz[j].links+"><img src='"+niz[j].slika+"'alt="+niz[j].alt+"title="+niz[j].title+"/></a> <br><h3 class='np'>" +niz[j].naslov+ "</h3><hr><p class='opis'>" +niz[j].opis+ "</p><hr><p class='opis'>"+niz[j].Cena+"</p></div>";
}
document.getElementById("proizvodi").innerHTML=prikazi;
}
generisiStranu();

  function sortiraj(tipSortiranja) {
    switch(tipSortiranja) {
      case "1":
        niz.sort(function (prod1, prod2){
          return prod1.Cena > prod2.Cena;
        });
      break;
      case "2":
        niz.sort(function (prod1, prod2){
          return prod1.Cena < prod2.Cena;
        });
      break;
      case "3":
        niz.sort(function (prod1, prod2){
          return prod1.naslov > prod2.naslov;
        });
      break;
      case "4":
        niz.sort(function (prod1, prod2){
          return prod1.naslov < prod2.naslov;
        });
      break;
      default:
      break;
    }

    generisiStranu();
  }
  var lista = document.getElementById("sort");
  lista.onchange = function()
  {
    var odabranIndex = lista.selectedIndex;
    var tip = lista.options[odabranIndex].value;
    sortiraj(tip);
  }
