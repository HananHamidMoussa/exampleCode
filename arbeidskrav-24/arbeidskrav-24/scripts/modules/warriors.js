//WARRIORS 
//Hente warriors og plassere innhold inn i  HTML.
export const warriors = [ //eksportere slik at objekter kan senere hentes. 
    {title: "Snake", imgSrc: "images/warrior-1.jpg", price: 150},
    {title: "Giant", imgSrc: "images/warrior-2.jpg", price: 100},
    {title: "Big axe", imgSrc: "images/warrior-3.jpg", price: 100}
];

localStorage.setItem('warriors', JSON.stringify(warriors)); /*lagrer objekt i localStorage 
slik at vi kan kalle på den.*/

//Hente første gitte html - selektor
export const articleWarriors = document.querySelector('.article__warriors');

//For å kjøre hvert element fra array listen ovenfor. 
warriors.forEach(warrior => {
    const warriorHTML = `
    <div class="article__warriors-item">
    <h3 class="article__warriors-item__title">${warrior.title}</h3>
    <img src="${warrior.imgSrc}" alt="${warrior.title}" class="article__warriors-img">
    <button type="button" class="article__warriors-button">Buy for ${warrior.price} 
    <img src ="images/gold-coin.png" alt = "icon" class = "button-icon"</button>
    `;
    articleWarriors.innerHTML += warriorHTML;
});