let employees = ["Cherrelle", "kat", "JayW"];
let fruits = ["Mango", "Apple", "Bananas", "Sapota", "Strawberry", "Pineapple", "Papaya", "sugarcane", "Blueberry", "Apricot"];
let prices = [10, 25, 300];
let countries = ["Japan", "Ecuador", "Mexico", "Portugal", "Ghana"];
let capitals = ["Tokyo", "Quito", "Mexico City", "Lisbon", "Accra"];

console.log(employees);
console.log(typeof(employees));
console.log(employees[0]);
console.log(employees[1]);
console.log(employees[2]);

console.log(fruits);

for (let counter = 0; counter < fruits.length; counter++){
    console.log(`I love ${fruits[counter]}.`);
}

for (let counter = 0; counter < countries.length; counter++) {
    console.log(`I live in ${countries[counter]}`);
}

for (let counter = 0; counter < countries.length; counter++) {
    console.log(`${capitals[counter]} is the capital of ${countries[counter]}`);
}