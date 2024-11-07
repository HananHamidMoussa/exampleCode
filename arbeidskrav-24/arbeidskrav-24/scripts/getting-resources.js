import {generateStatusbar, updateStatus} from "./modules/statusbar.js";

//funksjon som er eksportert. 
generateStatusbar();


//hente statusbaren fra statusbar.js
const goldCountElement = document.getElementById("coin");
const woodCountElement = document.getElementById("wood");
const metalCountElement = document.getElementById("metal");

//Hente bildene fra getting-resources.html
const minesImg = document.querySelector("#minesImg");
const woodsImg = document.querySelector("#woodsImg");

//Definere funksjonen ved trykk på mineImg
function mineResources() {
   const randomValue = Math.random(); //random funksjonalitet på variabel
   const amount = Math.floor(Math.random() * 25) + 1; // tilfeldig mengde mellom 1 og 10

   if(randomValue < 0.75) { //75% sjanse for å få metall
    updateStatus("metal", metalCountElement, amount);
   } else { //resterende 25% for gull
    updateStatus("coin", goldCountElement, amount);
   }
}

//Definere funksjonen ved trykk på woodsImg
function woodResources() {//random funksjonalitet på variabel
    const amount = Math.floor(Math.random() * 25) + 1; // tilfeldig mengde mellom 1 og 10
    updateStatus("wood", woodCountElement, amount);

}

//klikkfunksjon
minesImg.addEventListener('click', mineResources);
woodsImg.addEventListener('click', woodResources);

