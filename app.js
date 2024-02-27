var audio = new Audio("spacemusic.mp3");

let Cuerpo = document.getElementById("sun").addEventListener("click", () => {
  audio.play();
  let audioCreated = document.getElementById("audio");
  audioCreated.innerHTML = '<button id="silenciar">Silenciar</button>';
  document.getElementById('h2').textContent = 'Ahora Click En Nuestro Hogar';
  let stopAudio = document
    .getElementById("silenciar")
    .addEventListener("click", () => {
      audio.pause();
      
    });
});

var mercurio = document
  .getElementById("mercurio")
  .addEventListener("click", merf);

function merf() {
  window.open("https://github.com/zalda1518");
}

var venus = document.getElementById("venus").addEventListener("click", venf);

function venf() {
  window.open("");
}

var tierra = document.getElementById("earth").addEventListener("click", tief);

function tief() {
  window.open("https://zalda1518.github.io/ecomerce/");
  document.getElementById('h2').textContent = 'Ahora Click En Marte';
}

var marte = document.getElementById("marte").addEventListener("click", marf);

function marf() {
  window.open("https://zalda1518.github.io/codes/");
  document.getElementById('h2').textContent = 'Ahora Click En Jupiter';
}

var jupiter = document
  .getElementById("jupiter")
  .addEventListener("click", jupf);

function jupf() {
  window.open("https://zalda1518.github.io/facebook/");
  document.getElementById('h2').textContent = 'Busca El Del Anillo y Click';
}

var saturno = document
  .getElementById("saturno")
  .addEventListener("click", satf);

function satf() {
  window.open("https://codigosemtelco.000webhostapp.com/");
}

var uranio = document.getElementById("uranio").addEventListener("click", uraf);

function uraf() {
  window.open("https://es.wikipedia.org/wiki/Uranio_(planeta)");
}

var neptuno = document
  .getElementById("neptuno")
  .addEventListener("click", nepf);

function nepf() {
  window.open("https://es.wikipedia.org/wiki/Neptuno_(planeta)");
}

var pluton = document.getElementById("pluton").addEventListener("click", pluf);

function pluf() {
  window.open("https://es.wikipedia.org/wiki/Pluton_(planeta)");
}
