var niz = [
    {
	"slika":"images/xdj.png",
	"naslov":"Pioneer CDJ-2000 Nexus 2",
	"title":"Pioneer CDJ-2000 Nexus 2",
	"alt":"Pioneer CDJ-2000 Nexus 2",
	"opis":"Pioneer CDJ-2000 NXS2 zadržao je najbolje od svog prethodnika - C...",
	"Cena":"198.276,00 RSD"
},
{
	"slika":"images/slusalicedj.png",
	"naslov":"Pioneer HDJ-1500 Gold",
	"title":"Pioneer HDJ-1500 Gold",
	"alt":"Pioneer HDJ-1500 Gold",
	"opis":"The HDJ-500s are designed for your complete DJ...",
	"Cena":"24.676,26 RSD"
},
{
	"slika":"images/torbadj.jpg",
	"naslov":"Pioneer DJC-TSP16 BAG for TORAIZ",
	"title":"Pioneer DJC-TSP16 BAG for TORAIZ",
	"alt":"Pioneer DJC-TSP16 BAG for TORAIZ",
	"opis":"The HDJ-500s are designed for your complete DJ...",
	"Cena":"12.177,00 RSD"
},
{
	"slika":"images/protektordj.jpg",
	"naslov":"Prodector DDJ-SB, DDj-SB2, DDJ-RB",
	"title":"Prodector DDJ-SB, DDj-SB2, DDJ-RB",
	"alt":"Prodector DDJ-SB, DDj-SB2, DDJ-RB",
	"opis":"The HDJ-500s are designed for your complete DJ...",
	"Cena":"5.535,00 RSD"
},
{
	"slika":"images/mixdj.jpg",
	"naslov":"Pioneer DJM-900 Nexus 2",
	"title":"Pioneer DJM-900 Nexus 2",
	"alt":"Pioneer DJM-900 Nexus 2",
	"opis":"The HDJ-500s are designed for your complete DJ...",
	"Cena":"282.777,00 RSD"
},
{
	"slika":"images/750.jpg",
	"naslov":"Shure SRH750DJ",
	"title":"Shure SRH750DJ",
	"alt":"Shure SRH750DJ",
	"opis":"The HDJ-500s are designed for your complete DJ...",
	"Cena":"14.637,00 RSD"
},
{
	"slika":"images/12.jpg",
	"naslov":"Roadinger Record case Pro ALU 50/50, 100LPs",
	"title":"Roadinger Record case Pro ALU 50/50, 100LPs",
	"alt":"Roadinger Record case Pro ALU 50/50, 100LPs",
	"opis":"Kofer za ploce u aluminijumskom kucistu",
	"Cena":"9.840,00 RSD"
},
{
	"slika":"images/zvucnici1.jpg",
	"naslov":"Pioneer DM 40 W",
	"title":"Pioneer DM 40 W",
	"alt":"Pioneer DM 40 W",
	"opis":"The compact DM-40 desktop monitors bring...",
	"Cena":"20.787,00 RSD"
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

