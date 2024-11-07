import { generateStatusbar, updateStatus } from "./modules/statusbar.js";

generateStatusbar();

//Hente lagrede objekter fra localStorage
let purchasedObjects = JSON.parse(localStorage.getItem('purchasedObjects')) || [];


//plasserer kjøpte objekter på "your-army".html
function displaypurchasedObjects() {
    purchasedObjects.forEach(object => {
        let armySection;
        let newObjectDiv = document.createElement('div');
        newObjectDiv.classList.add('army-object');
    
        newObjectDiv.innerHTML =`
        <h3 class ="article__army-titles">${object.title}</h3>
        <img src="${object.imgSrc}" alt="${object.title}">
        `;

        if (object.type === 'warrior') {
        armySection = document.querySelector('.article__army-warriors');
    } else if (object.type === 'animal') {
        armySection=document.querySelector('.article__army-animals');
    } else if (object.type === 'machine'){
        armySection=document.querySelector('.article__army-machines');
    }
    
    if(armySection){
        armySection.appendChild(newObjectDiv);
    }
});
}

//funksjon kjøres
displaypurchasedObjects();


//Søkebaren - hente html div og gi verdi
// Søkefunksjon - vise filtrerte resultater
function searchByType() {
    const searchQuery = document.getElementById('article__searchBar').value.toLocaleLowerCase();

    //Hente fra html 
    const warriorsSection = document.querySelector('.article__army-warriors');
    const animalsSection = document.querySelector('.article__army-animals');
    const machinesSection = document.querySelector('.article__army-machines');


    warriorsSection.style.display='none';
    animalsSection.style.display='none';
    machinesSection.style.display='none';

    if(searchQuery === 'warriors') {
        warriorsSection.style.display = 'block';
    } else if (searchQuery === 'animals') {
        animalsSection.style.display = 'block';
    } else if (searchQuery === 'machines') {
        animalsSection.style.display = 'block';
    } else {
        warriorsSection.style.display = 'block';
        animalsSection.style.display = 'block';
        machinesSection.style.display = 'block'
    }
}


//Funksjonalitet på knapper 
document.getElementById('searchButton').addEventListener('click', searchByType);
document.getElementById('article__searchBar').addEventListener('input', searchByType);




