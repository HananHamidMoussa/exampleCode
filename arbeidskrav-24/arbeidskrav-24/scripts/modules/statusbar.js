//Hente statusbar 
export const statusbar = [
    {id: "coin", imgSrc:"images/gold-coin.png", label: "Coin", initialCount: 0},
    {id: "wood", imgSrc: "images/wood.png", label: "Wood", initialCount: 0},
    {id: "metal", imgSrc: "images/metal.png", label: "Metal",initialCount: 0}
];

export function storageData(resource){
    return parseInt(localStorage.getItem(resource) || 0);
}


//Oppdaterer status i HTML og localStorage
export function updateStatus(resource, element, amount) {
    
    const currentCount = parseInt(element.textContent);
    const newCount = currentCount + amount;
    element.textContent = newCount;

    localStorage.setItem(resource, newCount);
}

//Hente førte gitte html - selektor. 
//For å kjøre de 3 elementene fra arrayen ovenfor. 
export function generateStatusbar(){
    const articleStatusbar = document.querySelector('.article__statusbar'); 
    
    statusbar.forEach(item => {
        const statusbarHTML = document.createElement('div');
        statusbarHTML.className = 'statusbar-item';
        statusbarHTML.innerHTML = `
        <img src = "${item.imgSrc}" alt="${item.label}">
        <span id="${item.id}">${storageData(item.id)}</span>`;
        articleStatusbar.appendChild(statusbarHTML);    
});


}




