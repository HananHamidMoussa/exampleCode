import { generateStatusbar, storageData, updateStatus } from "./modules/statusbar.js"; //import av statusbar
import { warriors } from "./modules/warriors.js";
import { animals } from "./modules/animals.js"; 
import { machines } from "./modules/machines.js";

//kODEN KJØRES
generateStatusbar();

//Kjøpe objekter
let purchasedObjects = JSON.parse(localStorage.getItem('purchasedObjects')) || [];

//lagre kjøpte objekter
function savePurchasedObjects() {
    localStorage.setItem('purchasedObjects', JSON.stringify(purchasedObjects));
}


//Importerer objekter som skal være med i siden
//WARRIORS 
const warriorsData = localStorage.getItem('warriors');
const warrior = JSON.parse(warriorsData);

//ANIMALS 
const animalsData = localStorage.getItem('animals');
const animal = JSON.parse(animalsData);

//MACHINES
const machinesData = localStorage.getItem('machines');
const machine = JSON.parse(machinesData);

//Funksjonalitet på knapp
const articleWarriorsButtons = document.querySelectorAll('.article__warriors-button');
const articleAnimalsButtons = document.querySelectorAll('.article__animals-button');
const articleMachinesButtons = document.querySelectorAll('.article__machines-button');

//VED KJØP AV WARROR
function buyingWarriors(){
    articleWarriorsButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
        const price = warriors[index].price;
        const coinCountElement = document.getElementById('coin');
        let currentCoins = storageData('coin');

        if (currentCoins >= price) {
            updateStatus('coin', coinCountElement, -price);

            purchasedObjects.push({
                type:'warrior',
                title:warriors[index].title,
                imgSrc:warriors[index].imgSrc
            });

    
            savePurchasedObjects(); //GÅR INN I LOCAL STORAGE 

            console.log("You just bougt a warrior!");
        }else {
            console.log("Not enough balance. You need to get more resources.")
        }
    });
}); }


//VED KJØP AV ANIMAL
function buyingAnimals(){
articleAnimalsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const price = animals[index].price;
        const coinCountElement = document.getElementById('coin');
        let currentCoins = storageData('coin');

        if (currentCoins >= price) {
            updateStatus('coin', coinCountElement, -price);

            purchasedObjects.push({
                type:'animal',
                title:animals[index].title,
                imgSrc:animals[index].imgSrc
            });

            savePurchasedObjects(); //GÅR INN I LOCAL STORAGE 


            console.log("You just bougt an animal!");
        } else {
            console.log("Not enough balance. You need to get more resources.")
        }
    });
}); }

//VED KJØP AV MACHINES
function buyingMachines(){
articleMachinesButtons.forEach((button, index) => {
    button.addEventListener('click',() => {
        const price = machines[index].price;

        const coinCountElement = document.getElementById('coin');
        const woodCountElement = document.getElementById('wood');
        const metalCountElement = document.getElementById('metal');
        
        let currentCoins = storageData('coin');
        let currentWoods = storageData('wood');
        let currentMetals = storageData('metal');

        if(currentCoins >= price && currentMetals >= price && currentWoods >= price) {
            updateStatus('coin', coinCountElement, -price);
            updateStatus('metal', metalCountElement, -price);
            updateStatus('wood', woodCountElement, -price);

            purchasedObjects.push({
                type:'machine',
                title:machines[index].title,
                imgSrc:machines[index].imgSrc
            });

            savePurchasedObjects(); //GÅR INN I LOCAL STORAGE 

            console.log("You just bougt a machine!");
        } else {
            console.log("Not enough balance. You need to get more resources.")
        }
    });
}); }



//kODEN KJØRES
buyingWarriors();
buyingMachines();
buyingAnimals();

