let firstNumber = 500;
let secondNumber = 100;
let sum;
let diff;
let multi;
let globalSUM5;


sum = addNumbers(firstNumber, secondNumber);
diff = subtractNumbers(firstNumber, secondNumber);
multi = multiplyNumbers(firstNumber, secondNumber);
globalSUM5 = addFive(1, 2, 3, 4, 5);

console.log("Sum of numbers is : " + sum);
console.log("Difference of numbers is : " + diff);
console.log("Product of numbers is : " + multi );
console.log("Sum of FIVE numbers is : " + globalSUM5 );
console.log("Using Amazing FLEX_ADD : " + flexAdd());
console.log("Using Amazing FLEX_ADD : " + flexAdd(1,2));
console.log("Using Amazing FLEX_ADD : " + flexAdd(1,2,3));
console.log("Using Amazing FLEX_ADD : " + flexAdd(1,2,3,4));
console.log("Using Amazing FLEX_ADD : " + flexAdd(1,2,3,4,5));

let showMessage;

showMessage = personalGreeting("Joe Dirt");
console.log(showMessage);

showMessage = personalGreeting();
console.log(showMessage);


// created function that accepts two parameters 
// and returns sum of numbers
function addNumbers(first, second) {
    let localSum;
    localSum = first + second;
    return localSum;
}

function subtractNumbers(yee, haw) {
    return yee - haw;
}

function multiplyNumbers (yee, haw) {
    return yee * haw;
}

// Create a function to ADD five numbers and return the sum
function addFive(first, second, third, fourth, fifth) {
    let sumOfFive;
    sumOfFive = first + second + third + fourth + fifth;
    return sumOfFive;
}

function flexAdd(first=0,second=0,third=0,fourth=0,fifth=0) {
    let sumOfFive;
    sumOfFive = first + second + third + fourth + fifth;
    return sumOfFive;
}

function personalGreeting(fName="Martians") {
    //let message;
    //message = "Good Evening " + fName;
    //return message;
    return "Good Evening " + fName;
}