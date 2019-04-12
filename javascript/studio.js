var niz = [
    {
	"slika":"images/s1.jpg",
	"naslov":"Genelec 8030B",
	"title":"Genelec 8030B",
	"alt":"Genelec 8030B",
	"opis":"Studijski Monitor LF - 5'', HF- 3/4'', SPL - 100dB, 50Hz - 25kHz...",
	"Cena":"71.199,78 RSD"
},
{
	"slika":"images/s2.jpg",
	"naslov":"AKG K-240 MKII",
	"title":"AKG K-240 MKII",
	"alt":"AKG K-240 MKII",
	"opis":"Professional studio headphones",
	"Cena":"15.900,21 RSD"
},
{
	"slika":"images/s3.jpg",
	"naslov":"Focusrite Scarlett 18i20 2nd Generation",
	"title":"Focusrite Scarlett 18i20 2nd Generation",
	"alt":"Focusrite Scarlett 18i20 2nd Generation",
	"opis":"18 in/20 out USB zvučna kartica sa 2 nezavisna stereo headphones ...",
	"Cena":"53.999,46 RSD"
},
{
	"slika":"images/S4.jpg",
	"naslov":"Mackie MR5mk3",
	"title":"Mackie MR5mk3",
	"alt":"Mackie MR5mk3",
	"opis":"Studijski Monitor LF - 5,25'', HF- 1'', SPL - 102dB, 57Hz - 20kHz..",
	"Cena":"15.867,00 RSD"
},
{
	"slika":"images/s5.jpg",
	"naslov":"Shure KSM32-SL",
	"title":"Shure KSM32-SL",
	"alt":"Shure KSM32-SL",
	"opis":"Cardioid mikrofon premium klase za vokale, duvace i gudace. Ekst...",
	"Cena":"80.565,00 RSD"
},
{
	"slika":"images/s6.jpg",
	"naslov":"Soundsation K2Twin",
	"title":"Soundsation K2Twin",
	"alt":"Soundsation K2Twin",
	"opis":"Upareni studijski kondenzatorski mikrofoni.",
	"Cena":"10.455,00 RSD"
},
{
	"slika":"images/s7.jpg",
	"naslov":"RME Babyface Pro",
	"title":"VoRME Babyface Pro",
	"alt":"RME Babyface Pro",
	"opis":"Vrhunska USB zvucna kartica sa 2 Mikrofonska Preampa, 2 linijska ...",
	"Cena":"99.015,00 RSD"
},
{
	"slika":"images/s8.png",
	"naslov":"Mackie MCU-PRO",
	"title":"Mackie MCU-PRO",
	"alt":"Mackie MCU-PRO",
	"opis":"Studijski DAW kontroler sa motorizovanim faderima",
	"Cena":"184.377,00 RSD"
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
