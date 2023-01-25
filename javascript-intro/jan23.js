/*Convert age in years to age in days*/

let ageInYears = 65;
let ageInDays;

ageInDays = convertAgeToDays(ageInYears);

console.log('The age in days is: '+ ageInDays );

function convertAgeToDays(yearsAge){
    let daysAge;
    daysAge = yearsAge * 365;
return daysAge;
}



//The Farm Problem
 
let chickens = 2;
let cows = 4;
let pigs = 4;
let totalLegs;

totalLegs = animalLegs(chickens, cows, pigs)

function animalLegs(animal1, animal2, animal3) {
     
 let totalLegs = (animal1 + animal2 + animal3);
    
    return totalLegs;
}
console.log('The total number of legs is '+ totalLegs);

