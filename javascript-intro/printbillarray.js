/*Objective: Prepare a bill for the customer
Example 1

Customer Input
let order = [2,0,0,1,1,2];

Program Output
2 X CHICKEN CHILI = 14
1 X SWEET POTATO = 4
1 X HOMEMADE BROWNIE = 4
2 X SODA = 2
TOTAL = 24

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
let order = [2,0,0,1,1,2];
let counter = 0;

while (counter < menuItems.length) {
    if (order[counter] == menuItems[counter]) {
        console.log(`${order[counter]} X ${menuItems[counter]} = (${order[counter]} * ${menuPrices[counter]})`)
    } 
    counter++;
}