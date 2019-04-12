var eMail=document.querySelector('#mail');
var lozinka=document.querySelector('#lozinka');
function provera (){
var reeMail=/^[\w]+[\.\_\-\w]*\@[\w]+([\.][\w]+)+$/;
var reLozinka=/^\S{8,}$/;

if(!reeMail.test(eMail.value)){
document.querySelector('#porukaZaMail').style.color="red";
document.querySelector('#porukaZaMail').innerHTML="E-mail adresa nije dobro uneta!";
}
else {
document.querySelector('#mail').style.border="1px solid green";}
if(!reLozinka.test(lozinka.value)){
document.querySelector('#porukaZaLozinku').style.color="red";
document.querySelector('#porukaZaLozinku').innerHTML="Lozinka mora sadržati minimalno 8 karaktera i ne sme sadržati razmake.";
}
else {
document.querySelector('#lozinka').style.border="1px solid green";}
}

var ime=document.querySelector('#imeK');
var mail=document.querySelector('#eMailK');
function posalji(){
var reIme=/^[A-ZČĆŠĐŽ][a-zčćšđž]{2,9}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,14})+$/;
var reMail=/^[\w]+[\.\_\-\w]*@[\w]+([\.][\w]+)+$/;
if(!reIme.test(ime.value)){
document.querySelector('#porukaZaImeK').style.color="red";
document.querySelector('#porukaZaImeK').innerHTML="Ime nije dobro uneto";}
else {
document.querySelector('#imeK').style.border="1px solid green";}
if(!reMail.test(mail.value)){
document.querySelector('#porukaZaMailK').style.color="red";
document.querySelector('#porukaZaMailK').innerHTML="E-mail adresa nije dobro uneta";
}
else {
document.querySelector('#eMailK').style.border="1px solid green";}
}

var imeR=document.querySelector('#imeR');
var mailR=document.querySelector('#eMailR');
var lozinkaR=document.querySelector('#lozinkaR');
function registracija(){
var reIme=/^[A-ZČĆŠĐŽ][a-zčćšđž]{2,9}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,14})+$/;
var reMail=/^[\w]+[\.\_\-\w]*@[\w]+([\.][\w]+)+$/;
var reLozinka=/^\S{8,}$/;
if(!reIme.test(imeR.value)){
document.querySelector('#porukaZaImeR').style.color="red";
document.querySelector('#porukaZaImeR').innerHTML="Ime nije dobro uneto";}
else {
document.querySelector('#imeR').style.border="1px solid green";}
if(!reMail.test(mailR.value)){
document.querySelector('#porukaZaMailR').style.color="red";
document.querySelector('#porukaZaMailR').innerHTML="E-mail adresa nije dobro uneta";
}
else {
document.querySelector('#eMailR').style.border="1px solid green";}
if(!reLozinka.test(lozinkaR.value)){
document.querySelector('#porukaZaLozinkuR').style.color="red";
document.querySelector('#porukaZaLozinkuR').innerHTML="Lozinka mora sadržati minimalno 8 karaktera i ne sme sadržati razmake.";
}
else {
document.querySelector('#lozinkaR').style.border="1px solid green";}
}