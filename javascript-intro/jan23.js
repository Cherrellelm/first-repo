/*Convert age in years to age in days*/

let ageInYears = 65;
let ageInDays;

ageInDays = convertAgeToDays ();

console.log('The age in days is: '+ ageInDays );

function convertAgeToDays (){
    
return ageInYears * 365;
}
