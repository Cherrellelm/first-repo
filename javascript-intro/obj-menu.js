//let menu = new Object();
let menu = {
    code: "CC",
    item: "Chicken Chili",
    price: 7,
    isAvailable: true,
    isVegan: false,
    "Chefs Favorite": true,
};

console.log(menu.item);

let anyKey = "Chefs Favorite"; 

menu[anyKey] = true;
menu.anotherKey = true;

console.log(menu.anotherKey)
