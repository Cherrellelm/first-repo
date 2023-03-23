function addMenuItem(code, item, price, isAvailable, isLocallySourced) {
    return {
        code,
        item,
        price,
        isAvailable,
        isLocallySourced
    };
}
// you could delete the first key in code: code, for example and it will function the same way
let menu1 = addMenuItem("CC", "Chicken Chili", 7, true, false);

let menu2 = addMenuItem("SO", "Soda", 1, false, true);

console.log(menu1.price);
console.log("price" in menu1); // boolean checking to see if the key exists, can use in an if condition
console.log(menu2.price);

//use a for loop to loop through all keys in the menu1 object
for(let key in menu1 ) {
    console.log("For the " + key + ", the value is " + menu1[key]);
}
