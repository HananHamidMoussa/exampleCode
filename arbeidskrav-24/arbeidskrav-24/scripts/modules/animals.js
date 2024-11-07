//ANIMALS 
//Hente animals og plassere innhold inn i HTML. 
export const animals = [//eksportere slik at objekter kan senere hentes. 
    {title:"Elephant", imgSrc:"images/elephant.png", price:"100"},
    {title:"Horse", imgSrc:"images/horse.png", price:"150"},
]

localStorage.setItem('animals', JSON.stringify(animals));
 
//Hente første gitte html - selektor
export const articleAnimals = document.querySelector('.article__animals');

//For å kjøre hvert element fra array listen ovenfor. 
 animals.forEach(animal => {
    const animalHTML = `
    <div class = "article__animals-item">
    <h3 class = "article__warriors-item__title"> ${animal.title}</h2>
    <img src="${animal.imgSrc}" alt ="${animal.title}" class ="article__animals-img">
    <button type ="button" class="article__animals-button"> Buy for ${animal.price}
    <img src ="images/gold-coin.png" alt = "icon" class = "button-icon"</button>
    </div> 
    `;
    articleAnimals.innerHTML += animalHTML;
});
