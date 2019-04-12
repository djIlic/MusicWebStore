var niz = [
    {
	"slika":"images/k1.jpg",
	"naslov":"Casio CTK-1500",
	"title":"Casio CTK-1500",
	"alt":"Casio CTK-1500",
	"opis":"Početnički model klavijature sa 5 oktava, bez dinamičke dirke. Za...",
	"Cena":"14.999,85 RSD"
},
{
	"slika":"images/k2.png",
	"naslov":"Korg PA-700",
	"title":"Korg PA-700",
	"alt":"Korg PA-700",
	"opis":"Potpuno novi aranžer od Korga - PA-700! Ostvarite svaku Vašu žel...",
	"Cena":"131.999,91 RSD"
},
{
	"slika":"images/k3.png",
	"naslov":"Korg Grandstage 88",
	"title":"Korg Grandstage 88",
	"alt":"Korg Grandstage 88",
	"opis":"Apsolutno savršenstvo u svetu moćnih električnih klavira, jednost...",
	"Cena":"307.377,00 RSD"
},
{
	"slika":"images/k4.png",
	"naslov":"Korg PA-1000",
	"title":"Korg PA-1000",
	"alt":"Korg PA-1000",
	"opis":"PA-1000 je profesionalni aranžer visokih performansi iz proslavlj...",
	"Cena":"POZVATI ZA CENU"
},
{
	"slika":"images/k5.png",
	"naslov":"Korg Grandstage 73",
	"title":"Korg Grandstage 73",
	"alt":"Korg Grandstage 73",
	"opis":"Apsolutno savršenstvo u svetu moćnih električnih klavira, jednost...",
	"Cena":"282.777,00 RSD"
},
{
	"slika":"images/k6.jpg",
	"naslov":"Korg Kronos2 61",
	"title":"Korg Kronos2 61",
	"alt":"Korg Kronos2 61",
	"opis":"Kada se susretnu masta, ambicija I tehnologija, rezultati su spek...",
	"Cena":"311.880,03 RSD"
},
{
	"slika":"images/k7.jpg",
	"naslov":"Korg Kronos2 73",
	"title":"Korg Kronos2 73",
	"alt":"Korg Kronos2 73",
	"opis":"Kada se susretnu masta, ambicija I tehnologija, rezultati su spek...",
	"Cena":"342.000,27 RSD"
},
{
	"slika":"images/k8.jpg",
	"naslov":"Korg Kronos2 88",
	"title":"Korg Kronos2 88",
	"alt":"Korg Kronos2 88",
	"opis":"Kada se susretnu masta, ambicija I tehnologija, rezultati su spek...",
	"Cena":"359.879,55 RSD"
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
    sortiraj(tipSortiranja);
  }


