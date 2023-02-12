let employees = ["Cherrelle", "kat", "JayW"];
let fruits = ["Mango", "Apple", "Bananas", "Sapota", "Strawberry", "Pineapple", "Papaya", "sugarcane", "Blueberry", "Apricot"];
let prices = [10, 25, 300];
let countries = ["Japan", "Ecuador", "Mexico", "Portugal", "Ghana"];
let capitals = ["Tokyo", "Quito", "Mexico City", "Lisbon", "Accra"];

console.log(countries.join(" ^ "));

countries.pop()
console.log(countries.join(" ^ "));

countries.pop()
console.log(countries.join(" ^ "));

countries.pop()
console.log(countries.join(" ^ "));

countries.pop()
console.log(countries.join(" ^ "));

//array methods
console.log(Array.isArray(fruits));
// push() adds an element to an array and returns the length pop() removes the last elements and returns the removed element
//shift() removes the first element and shifts all elements down on the index
countries.push("India");
capitals.push("New Delhi");

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

console.log(fruits.toString());
console.log(fruits.join(" :) ")); //- what you put in the () will go in between array elements

