// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

let num = 22;

function isEvenOrOdd() {
if(num % 2 === 0) {
    console.log ('even');
} else {
    console.log ('odd');
}
}

num = isEvenOrOdd();

/* A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

Create a function which calculates the amount of fuel it needs, given the distance. */

let distance = 5;
let fuel = distance * 10;

function calculateFuel (n) {
     if (distance > 0 && fuel >= 100) {
		console.log (fuel);
	} else if (fuel < 100) {
		console.log (100);
	}
}

calculateFuel(distance);