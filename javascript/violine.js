var niz = [
    {
	"slika":"images/v1.jpg",
	"naslov":"Soundsation VPVI 1/4",
	"title":"Soundsation VPVI 1/4",
	"alt":"Soundsation VPVI 1/4",
	"opis":"Topla preporuka za početnike i đake!",
	"Cena":"27.675,00 RSD"
},
{
	"slika":"images/v2.jpg",
	"naslov":"Soundsation HDV-10 3/4",
	"title":"Soundsation HDV-10 3/4",
	"alt":"Soundsation HDV-10 3/4",
	"opis":"Topla preporuka za početnike i đake!",
	"Cena":"24.477,00 RSD"
},
{
	"slika":"images/v3.jpg",
	"naslov":"Soundsation E-Master",
	"title":"Soundsation E-Master",
	"alt":"Soundsation E-Master",
	"opis":"Odlična za svadbe, pogotovu za one pod šatrom!",
	"Cena":"23.985,00 RSD"
},
{
	"slika":"images/v4.jpg",
	"naslov":"Hora Student Viola A100 16",
	"title":"Hora Student Viola A100 16",
	"alt":"Hora Student Viola A100 16",
	"opis":"Topla preporuka za početnike i đake!",
	"Cena":"21.900,15 RSD"
},
{
	"slika":"images/v5.jpg",
	"naslov":"Hora Student V100 4/4 violin",
	"title":"Hora Student V100 4/4 violin",
	"alt":"Hora Student V100 4/4 violin",
	"opis":"Topla preporuka za početnike i đake!",
	"Cena":"19.900,17 RSD"
},
{
	"slika":"images/v6.jpg",
	"naslov":"Hora Student V100 3/4 violin",
	"title":"Hora Student V100 3/4 violin",
	"alt":"Hora Student V100 3/4 violin",
	"opis":"Topla preporuka za početnike i đake!",
	"Cena":"19.900,17 RSD"
},
{
	"slika":"images/v7.jpg",
	"naslov":"Antoni Debute 3/4 violina",
	"title":"Antoni Debute 3/4 violina",
	"alt":"Antoni Debute 3/4 violina",
	"opis":"Puno drvo prednja ploča!",
	"Cena":"12.270,48 RSD"
},
{
	"slika":"images/v8.jpg",
	"naslov":"Antoni Debute 1/2 violina",
	"title":"Antoni Debute 1/2 violina",
	"alt":"Antoni Debute 1/2 violina",
	"opis":"Puno drvo prednja ploča!",
	"Cena":"11.900,25 RSD"
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
