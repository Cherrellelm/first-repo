// we are learning loops today!

// Repetitive action, counter, check condition

//counter = counter + 1; you could also do counter++ instead and counter-- is the same as counter -1

//step 1) initialize a counter, step 2) check the condition, step 3) increment/decrement)
for (counter = 1; counter <= 100; counter++) {

//Begin a loop

//wrap this function call inside a loop
rollDice(counter);

//End a loop
}
function rollDice(localCounter) {
    console.log(`I'm on roll number ${localCounter}!!! `);
}

