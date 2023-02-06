//Write a program that displays the num ber of times each number is rolled in a die
//Initialize a counter and include the check condition with an increment
//display each side of the die and the number of instances the roll landed on each number

let randomNumber = 0;

let countOnes = 0;
let countTwos = 0;
let countThrees = 0;
let countFours = 0;
let countFives = 0; 
let countSixes = 0; // store how many times we rolled a 6


for (let counter = 1; counter <=10; counter++) {
    randomNumber = getRandomNumber(1, 6);

    console.log (`Random number returned by Jay is ${randomNumber}`);

    if (randomNumber == 1) {
        countOnes = countOnes + 1;
    }

    if (randomNumber == 2) {
        countTwos = countTwos + 1;
    }

    if (randomNumber == 3) {
        countThrees = countThrees + 1;
    }

    if (randomNumber == 4) {
        countFours = countFours + 1;
    }

    if (randomNumber == 5) {
        countFives = countFives + 1;
    }

    if (randomNumber == 6) {
        countSixes = countSixes + 1;
    }
}

console.log ('Completed rolling the die 10 times !!!');
console.log(`The outcome of ONE occured ${countOnes} times.`)
console.log(`The outcome of TWO occured ${countTwos} times.`)
console.log(`The outcome of THREE occured ${countThrees} times.`)
console.log(`The outcome of FOUR occured ${countFours} times.`)
console.log(`The outcome of FIVE occured ${countFives} times.`)
console.log(`The outcome of SIX occured ${countSixes} times.`)


function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}



/*
let randomNumber = 0;
randomNumber = Math.random();

// display random numers
console.log(randomNumber);

//display a random number between 1 and 100
console.log(randomNumber* 100);

//display a random number between 1 and 100 rounded down

console.log(Math.floor(randomNumber * 100));

//display a random number between 1 and 100 rounded up
console.log(Math.ceil(randomNumber * 100));
*/