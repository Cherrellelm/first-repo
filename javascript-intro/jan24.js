//convert miles to kilometers (fomula miles x 1.6 Test data: 100mi => 160km)

let miles = 100;
let kilometers;

kilometers = convertMiToKm(miles);

function convertMiToKm(lmiles) {
    let lkilometers = lmiles * 1.6
    return lkilometers;
}

console.log('100 miles is ' +  kilometers + ' kilometers');

//Convert Fahrenheit to Celsius (formula [F-32] x 5/9 Test data: 212 F =>100C)

let fahrenheit = 212;
let celsius;

celsius = convertFahrenheitToCelsius (fahrenheit)

function convertFahrenheitToCelsius(lFahrenheit) {
    let lCelsius = (lFahrenheit-32)*5/9
    return lCelsius
}

console.log('212 degrees F is ' + celsius + ' degrees C' )


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