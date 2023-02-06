//start at 1

// end at pre-determined value

let endingNumber = 47;

for(let counter = 1; counter <= endingNumber; counter++) {
    // output to console log
    //flag to check divisability by 3
    let isDivisibleByThree = false;
    let isDivisibleByFive = false;
    
    if(counter % 3 ==0) {
        isDivisibleByThree = true;
    }
//check divisability by 5
    if (counter % 5 ==0) {
        isDivisibleByFive = true;
    }
    if (isDivisibleByThree && isDivisibleByFive) {
        console.log ("FizzBuzz")
    }else if (isDivisibleByThree == true){
        console.log ("Fizz");
    } else if (isDivisibleByFive ==true){
        console.log ("Buzz");
    }else {
        console.log(counter);
    }

}

//multiple of 3, print Fizz

//multiple of 5, print Buzz

//multiple of 3 AND 5. print FizzBuzz



//Need to print numbers that are NOT multiple of 3 OR 5