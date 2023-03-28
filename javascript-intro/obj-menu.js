function addMenuItem(code, item, price, isAvailable, isLocallySourced) {
  return {
    code,
    item,
    price,
    isAvailable,
    isLocallySourced,
    prepare() {
      console.log("Your delicious " + this.item + " will be ready shortly");
    },
  };
}
// v numbers must be in "", they are converted into strings if  you add + in front "+44"
let countryCodes = {
  91: "India",
  44: "United Kingdom",
  1: "USA",
};
// you could delete the first key in code: code, for example and it will function the same way
let menu1 = addMenuItem("CC", "Chicken Chili", 7, true, false);
menu1.prepare();

let menu2 = addMenuItem("SO", "Soda", 1, false, true);

console.log(menu1.price);
console.log("price" in menu1); // boolean checking to see if the key exists, can use in an if condition
console.log(menu2.price);

/*//use a for loop to loop through all keys in the menu1 object
for(let key in menu1 ) {
    console.log("For the " + key + ", the value is " + menu1[key]);
}

for (let code in countryCodes) {
    console.log("Dial " + code + " before calling your firend in " + countryCodes[code]);
}
*/

let stateTax = {
  stateAbbr: "GA",
  stateName: "Georgia",
  taxRate: 4,
  calculateTax(amount) {
    return amount * (this.taxRate / 100);
  },
};

console.log(stateTax.stateName);

stateTax.stateName = "GEORGIA";

console.log(stateTax.stateName);

console.log(stateTax.calculateTax(1000));

let user = {
  name: "John",
  surname: "Smith",
};

user.name = "pete";

//delete user.name;

console.log(user.name);

function isEmpty(userOb) {
  for (let key2 in user) {
    console.log(false);
  }
  console.log(true);
}
isEmpty(user);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
  console.log(sum);
}
