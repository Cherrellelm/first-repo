//first variation
let total;

total = sum(10,20); 

console.log(total); 

function sum(first, second) {
    return first + second;
}

//on line 13 you could remove the curly braces and let total2 = (first, second) => first + second;
//if you have multiple lines you have to use the curly braces
//Second variation
let total2 = (first, second) => {
    return first + second;
}

console.log(total2(50,60)); 

//third variation
let total3 = (first, second) => first + second;

console.log(total3(200,400));

//if there is one paremeter, you don't need ()

//let greetings2 = language => =0

//greetings into an arrow function

let greetings = (language, studentName) => {
    if(language == "HAWAII") {
        return "Aloha " + studentName;
    } else if(language == "SPANISH") {
        return "Hola " + studentName;
    }else {
        return "Hello " + studentName;
    }
}

console.log(greetings ("SPANISH", "Cherrelle"));
console.log(greetings ("HAWAII", "Kat"));
console.log(greetings ("HINDI", "JayW"));

let meow = studentName => "Namaste " + studentName;

console.log(meow("Cherrelle"));
console.log(meow("Kat"));
console.log(meow("JayW"));

function isPositive(number) {
    return number >= 0;
}

console.log(isPositive(-28));

//anonymous function
document.addEventListener('click', function() {
    console.log("Click event fired");
})

document.addEventListener('click', () => console.log("Click event fired"));