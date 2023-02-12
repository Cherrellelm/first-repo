let employees = ["Cherrelle", "kat", "JayW"];
let fruits = ["Mango", "Apple", "Bananas", "Sapota", "Strawberry", "Pineapple", "Papaya", "sugarcane", "Blueberry", "Apricot"];
let prices = [10, 25, 300];

console.log(employees);
console.log(typeof(employees));
console.log(employees[0]);
console.log(employees[1]);
console.log(employees[2]);

console.log(fruits);

for (let counter = 0; counter < fruits.length; counter++){
    console.log(`I love ${fruits[counter]}.`)
}
