let breakfastMenu = ["Grits", "Mac & Cheese", "Potatoes", "French Toast", "Coffee", "Orange Juice"];
let breakfastPrices = ["$3.00", "$4.00", "$3.00", "$6.00", "$2.00", "$2.00"];

let breakfast = document.querySelector('#breakfast');

let breakfastItems;
let item;
let home;
let prices;
let horLine;

horLine = document.createElement('hr');
breakfast.appendChild(horLine);


for (let counter = 0; counter < breakfastMenu.length; counter++) {
    let divID = counter + 1;
    let divName = "item" + divID;
    breakfastItems = document.createElement('div');
    breakfastItems.setAttribute('id','item' + divName);
    breakfastItems.textContent = breakfastMenu[counter];
    breakfast.appendChild(breakfastItems);
    breakfastItems.classList.add('item');

    prices = document.createElement('span');    
    breakfastItems.appendChild(prices);
    prices.textContent = breakfastPrices[counter];
    prices.classList.add('home');
}

//Don't repeat yourself ^
/*
breakfastItems = document.createElement('div');
breakfastItems.setAttribute('id', 'item1');
breakfastItems.textContent = 'Grits';
breakfast.appendChild(breakfastItems);

breakfastItems = document.createElement('div');
breakfastItems.setAttribute('id', 'item1');
breakfastItems.textContent = 'French Toast';
breakfast.appendChild(breakfastItems);

breakfastItems = document.createElement('div');
breakfastItems.setAttribute('id', 'item1');
breakfastItems.textContent = 'Potatoes';
breakfast.appendChild(breakfastItems);

breakfastItems = document.createElement('div');
breakfastItems.setAttribute('id', 'item1');
breakfastItems.textContent = 'Coffee';
breakfast.appendChild(breakfastItems);
*/