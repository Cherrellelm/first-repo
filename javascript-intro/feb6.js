//#1 — Print the numbers from 0 to 15
/*
for (let counter = 10; counter >=-20; counter--) {
    if (counter % 2 == 0){
        console.log(counter);
    }
    
}
*/
//Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
/*
for (let i = 50; i >=20; i--) {
    if (i % 3==0) {
     console.log(i);
    }
    
}
*/
// while loop practice
//Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive 
//value greater than 5,000 but less than 30,000.

let startingFuel = 6000;
let astronauts;
let altitude;

while (startingFuel >= 0) {
    if (startingFuel >= 5000 && startingFuel <= 30000){
        startingFuel = startingFuel + 1000;
    console.log(startingFuel); 
}
}
/*
let startingFuel = 1000;


for (startingFuel = < 5000; startingFuel >=5000 && startingFuel <=30000; startingFuel = startingFuel + 1000) {
    console.log(startingFuel);
}
*/