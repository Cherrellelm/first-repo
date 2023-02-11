//https://avantutor.com/blog/10-simple-javascript-for-loop-exercises/
//Exedrcise 5 - Given a string change the every second letter to an uppercase ‘Z’. Assume there are no space.

let str1 = "javascript";

for (i = 0; i <= str1.length; i++) {
    if(i % 2 == 0) {
        console.log(str1.replace(str1, "Z"));
    } else {
        console.log(str1.charAt(i));
    }
}

//Exercise 6 - Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

let str2 = "don't know why";

for ( i = 0; i <= str2.length; i++) {
    if(str2.match("y")){
        console.log('yes');
    }else {
        console.log('no');
    }   
}