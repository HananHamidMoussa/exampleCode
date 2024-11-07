//MACHINES
//Hente maskiner og plassere innhold inn i html
export const machines = [ //eksportere slik at objekter kan senere hentes.
    {title: "Cannon", imgSrc:"images/cannon.png", price:"100"},
    {title: "Catapult", imgSrc:"images/catapult.png", price:"75"}
]

localStorage.setItem('machines', JSON.stringify(machines)); /*lagrer objekt i localStorage 
slik at vi kan kalle på den.*/


//Hente første gitte html - selektor
export const articleMachines = document.querySelector('.article__machines');


//For å kjøre hvert element fra array listen ovenfor.
machines.forEach(machine => {
    const machineHTML = `
    <div class = "article__machines-item">
    <h3 class = "article__machines-item__title">${machine.title}</h3>
    <img src="${machine.imgSrc}" alt = "${machine.title}" class ="article__machines-img">
    <button type = "button" class = "article__machines-button"> Buy for ${machine.price} 
    <img src ="images/gold-coin.png" alt = "icon" class = "machine-buttons"</button>
    <img src ="images/wood.png" alt = "icon-1" class ="machine-buttons"</button>
    <img src ="images/metal.png" alt = "icon-2" class="machine-buttons"</button>

    </div>
    `;
    articleMachines.innerHTML += machineHTML;
});