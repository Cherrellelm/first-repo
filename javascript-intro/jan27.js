//The Fortune Teller

let numberOfChildren = 3;
let partnerName = 'Bob';
let locations = 'New York';
let jobTitle = 'Software Engineer';

function tellFortune(children, partner, lLocation, job) {
 console.log ('You will be a ' + job + ' in ' + lLocation + ', and married to ' + partner + ' with ' + children + ' kids.');
}

tellFortune(numberOfChildren, partnerName, locations, jobTitle);