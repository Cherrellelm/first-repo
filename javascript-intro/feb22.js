let breakfastMenu = ["Grits", "Mac & Cheese", "Potatoes", "French Toast", "Coffee", "Orange Juice"];
let breakfastPrices = [" $3", " $4", " $3", " $6", " $2", " $2"];

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
    breakfastItems.textContent = breakfastMenu[counter] + breakfastPrices[counter];
    breakfast.appendChild(breakfastItems);
    breakfastItems.classList.add('item');
}
    /*breakfast.setAttribute('id','item' + divName);
    breakfast.appendChild(prices);
    prices = document.createElement('div');
    prices.textContent = breakfastPrices[counter];
    prices.classList.add('home');
}*/

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