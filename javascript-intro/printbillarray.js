/*Objective: Prepare a bill for the customer
Example 1

Customer Input
let order = [2,0,0,1,1,2];

Program Output
2 X CHICKEN CHILI = 14
1 X SWEET POTATO = 4
1 X HOMEMADE BROWNIE = 2
2 X SODA = 2
TOTAL = 22

Example 2

Customer Input
let order = [0,0,0,0,0,2];

Program Output
2 X SODA = 2
TOTAL = 2
*/

let menuItems = ["CHICKEN CHILI","JERK TILAPIA","BLACK BEANS","SWEET POTATO","HOMEMADE BROWNIE","SODA"];
let menuPrices = [7, 7, 4, 4, 2, 1];

//Customer Input
let order = [2,0,4,1,1,2];
let counter = 0;
let total = 0;
let result;
let taxRate = 0.0775;
let taxAmount = 0;
let tipRate = 0.2;
let tipAmount = 0;
let totalWithTip = 0;
let totalWithTax = 0;

while (counter < menuItems.length) {
    if (order[counter] > 0) {
        result = (order[counter] * menuPrices[counter]);
        console.log(order[counter] + " X " + menuItems[counter] + " = " + result);
        total = total + result;
    }
    counter++;
}
taxAmount = total * taxRate;
totalWithTax = total + taxAmount;
tipAmount = totalWithTax * tipRate;
totalWithTip = totalWithTax + tipAmount;

console.log("TOTAL = $" + total);
console.log("Tax = $" + taxAmount);
console.log("Total bill = $" + totalWithTax);
console.log("Tip amount = $" + tipAmount);
console.log("Grand total = $" + totalWithTip);
