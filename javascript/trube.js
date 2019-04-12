var niz = [
    {
	"slika":"images/t1.jpg",
	"naslov":"Soundsation STPGD-10 Bb truba",
	"title":"Soundsation STPGD-10 Bb truba",
	"alt":"Soundsation STPGD-10 Bb truba 	",
	"opis":"Studentska truba!",
	"Cena":"26.445,00 RSD"
},
{
	"slika":"images/t2.jpg",
	"naslov":"Eclipse CX-W066 truba",
	"title":"Eclipse CX-W066 truba",
	"alt":"Eclipse CX-W066 truba",
	"opis":"Kvalitetna školska truba sa usnikom od zlatnog mesinga i ventilim...",
	"Cena":"23.001,00 RSD"
},
{
	"slika":"images/t3.jpg",
	"naslov":"Belcanto BX-105 truba",
	"title":"Belcanto BX-105 truba",
	"alt":"Belcanto BX-105 truba",
	"opis":"Truba sa koferom!",
	"Cena":"23.985,00 RSD"
},
{
	"slika":"images/t4.jpg",
	"naslov":"Vincent Bach 18037R truba",
	"title":"Vincent Bach 18037R truba",
	"alt":"Vincent Bach 18037R truba",
	"opis":"The Bach 180 series trumpets are the number one selling professional trumpets in the world",
	"Cena":"602.250,00 din"
},
{
	"slika":"images/t5.jpg",
	"naslov":"Vincent Bach 180L truba",
	"title":"Vincent Bach 180L truba",
	"alt":"Vincent Bach 180L truba",
	"opis":"The Bach 180L Stradivarius Professional Bb Trumpet features a .462 bore for the player who wants a trumpet ",
	"Cena":"481.750,00 din"
},
{
	"slika":"images/t6.jpg",
	"naslov":"Vincent Bach 180LG truba",
	"title":"Vincent Bach 180LG truba",
	"alt":"Vincent Bach 180LG truba",
	"opis":"The Bach 180L Stradivarius Professional Bb Trumpet features a .462",
	"Cena":"501.875,00 din"
},
{
	"slika":"images/t7.jpg",
	"naslov":"Vincent Bach 180S37R truba",
	"title":"Vincent Bach 180S37R truba",
	"alt":"Vincent Bach 180S37R truba",
	"opis":"Za Guču dušu dala!",
	"Cena":"626.125,00 din"
},
{
	"slika":"images/t8.jpg",
	"naslov":"Vincent Bach 180SMLVG truba",
	"title":"Vincent Bach 180SMLVG truba",
	"alt":"Vincent Bach 180SMLVG truba",
	"opis":". It also has a #43 leadpipe for a more open feel and a #72 taper bell which",
	"Cena":"543.375,00 din"
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
