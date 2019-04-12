var niz = [
    {
	"slika":"images/o1.jpg",
	"naslov":"EAW Red Line 15",
	"title":"EAW Red Line 15",
	"alt":"EAW Red Line 15",
	"opis":"Aktivan,drveni dvo-sistemski zvucnik sa pojacalom od 1250W , LF 1...",
	"Cena":"POZVATI ZA CENU"
},
{
	"slika":"images/o2.jpg",
	"naslov":"SHURE QLXD14e",
	"title":"SHURE QLXD14e",
	"alt":"SHURE QLXD14e",
	"opis":"Bezicni sisitem za instrumente, pilot ili bubica mikrofone....",
	"Cena":"133.135,20 RSD"
},
{
	"slika":"images/o3.jpg",
	"naslov":"Mackie AXIS",
	"title":"Mackie AXIS",
	"alt":"Mackie AXIS",
	"opis":"32-ch digitalna mikseta sa stage-box-om i Dante protokolom...",
	"Cena":"151.290,00 RSD"
},
{
	"slika":"images/o4.png",
	"naslov":"dB Technologies Mini Line Array",
	"title":"dB Technologies Mini Line Array",
	"alt":"dB Technologies Mini Line Array",
	"opis":"dB Technologies Mini Line Array",
	"Cena":"415.950,33 RSD"
},
{
	"slika":"images/o5.jpg",
	"naslov":"EAW RSX12M",
	"title":"EAW RSX12M",
	"alt":"EAW RSX12M",
	"opis":"Aktivni, dvosistemski binski monitor, snage 500W.",
	"Cena":"177.735,00 RSD"
},
{
	"slika":"images/o6.jpg",
	"naslov":"dB Technologies DVA S10 & T8",
	"title":"dB Technologies DVA S10 & T8",
	"alt":"dB Technologies DVA S10 & T8",
	"opis":"Profesionalni aktivni razglasni sistem ukupne snage 9600W...",
	"Cena":"POZVATI ZA CENU"
},
{
	"slika":"images/o7.jpg",
	"naslov":"Turbosound Impact 65T",
	"title":"Turbosound Impact 65T",
	"alt":"Turbosound Impact 65T",
	"opis":"Passive two-way loudspeaker Moulded enclosure Integral line trans...",
	"Cena":"19.065,00 RSD"
},
{
	"slika":"images/o8.jpg",
	"naslov":"Celestion  QXI-008",
	"title":"Celestion  QXI-008",
	"alt":"Celestion  QXI-008",
	"opis":"Two-way full-range speakers",
	"Cena":"30.750,00 RSD"
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
