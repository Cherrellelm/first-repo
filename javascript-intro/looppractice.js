//https://avantutor.com/blog/10-simple-javascript-for-loop-exercises/
//Exedrcise 5 - Given a string change the every second letter to an uppercase ‘Z’. Assume there are no space.

let str1 = "javascript";

for (countLetters = 0; countLetters <= str1.length; countLetters++) {
    if(countLetters % 2 == 1) {
        console.log(str1.replace(str1, "Z"));
    } else {
        console.log(str1.charAt(countLetters));
    }
}

//Exercise 6 - Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

let str2 = "don't know why";

for ( identifyLetter = 0; identifyLetter <= str2.length; identifyLetter++) {
    if(str2.match("y")){
        console.log("yes");
    }else {
        console.log("no");
    }   
}
/*
// Exercise 7 - Given a number n Calculate the factorial of the number

let n2 = 4;

for (i = 1; i <= n2; i++) {
    n2 = n2 * i
        console.log (n2);
}
*/

//make the variables readable 