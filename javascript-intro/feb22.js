let breakfastMenu = ["Grits", "Mac & Cheese", "Potatoes", "French Toast", "Coffee", "Orange Juice"];

let breakfast = document.querySelector('#breakfast');

let breakfastItems;
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