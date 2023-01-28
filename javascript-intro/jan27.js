//The Fortune Teller

let numberOfChildren = 3;
let partnerName = 'Bob';
let locations = 'New York';
let jobTitle = 'Software Engineer';

function tellFortune(children, partner, lLocation, job) {
 console.log ('You will be a ' + job + ' in ' + lLocation + ', and married to ' + partner + ' with ' + children + ' kids.');
}

tellFortune(numberOfChildren, partnerName, locations, jobTitle);

// The Puppy Age Calculator

function calculateDogAge (puppyAge) {
console.log ('Your doggie is ' + (puppyAge * 7) + ' years old in dog years!')
}

calculateDogAge(2);
calculateDogAge(5);
calculateDogAge(11);
