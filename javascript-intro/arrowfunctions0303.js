let total;

total = sum(10,20); 

console.log(total); 

function sum(first, second) {
    return first + second;
}

let total2 = (first, second) => {
    return first + second;
}

console.log(total2(50,60)); 