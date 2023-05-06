/*
[X] Create array of unsorted numbers
[X] Loop through all numbers and display array
[X] Outer loop (lefthand side)- For first number in comparison, we start with the first number and repeat one number less than the size of the group.
[X] Inner loop (righthand side)- For second number in comparison, we start with +1 number of the left and repeat until the end of the group
[X] Compare lefthand side with righthand side and swap 
[X] Loop through all numbers and display array
*/

let arrNumber = [20, 63, 18, 44, 9, 53, 5, 27, 76, 8];
let swapNumber;

console.log("displaying unsorted array");

for (let outCounter = 0; outCounter < arrNumber.length; outCounter++) {
  console.log(arrNumber[outCounter]);
}

console.log("displaying outter loop");

for (let outCounter = 0; outCounter < arrNumber.length - 1; outCounter++) {
  for (let inCounter = outCounter + 1; inCounter < arrNumber.length; inCounter++) {

    if(arrNumber[outCounter] > arrNumber[inCounter]){
      swapNumber = arrNumber[outCounter];
      arrNumber[outCounter] = arrNumber[inCounter];
      arrNumber[inCounter] = swapNumber;
    }
   // console.log("left side: " + arrNumber[outCounter] +" <> right side: " + arrNumber[inCounter]);
  }
}

console.log("displaying sorted array");

for (let outCounter = 0; outCounter < arrNumber.length; outCounter++) {
  console.log(arrNumber[outCounter]);
}