//https://avantutor.com/blog/10-simple-javascript-for-loop-exercises/
//Exedrcise 5 - Given a string change the every second letter to an uppercase ‘Z’. Assume there are no space.

let str1 = "javascript";

for (counter = 0; counter <= str1.length; counter++) {
    if(counter % 2 == 1) {
        console.log(str1.replace(str1, "Z"));
    } else {
        console.log(str1.charAt(counter));
    }
}

//Exercise 6 - Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

let str2 = "don't know why";

for ( counter = 0; counter <= str2.length; counter++) {

}
if(str2.match("y")){
    console.log("yes");
}else {
    console.log("no");
}   
/*
// Exercise 7 - Given a number n Calculate the factorial of the number

let n2 = 4;

for (counter = 1; counter <= n2; counter++) {
    n2 = n2 * counter
        console.log (n2);
}
*/

//repeat a string

let str = "Hello";
let n = str.repeat(3);

function repeatStr (n, s) {

       console.log(n);
   
  }
  
  repeatStr(n, str);