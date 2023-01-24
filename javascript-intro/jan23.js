/*Convert age in years to age in days*/

let ageInYears;
let ageInDays;

ageInYears = 65;

console.log(`If someone is ${ageInYears}, they are ${ageInDays} days old`);

ageInDays = convertAgeToDays ();

function convertAgeToDays (){
return ageInYears * 365;
};