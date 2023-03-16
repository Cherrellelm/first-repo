// 2/12/23

//outer loop is the rows
// inner loop is the columns

// output shuld be 
//12345
//12345
//12345
//12345
//12345

for (outCounter = 1; outCounter <= 5; outCounter++) {
    let outText = "";
    for (inCounter = 1; inCounter <= 5; inCounter++) {
        outText = outText + inCounter;
    }
    console.log(outText);
}

// output should be 
//11111
//22222
//33333
//44444
//55555

for (outCounter = 1; outCounter <= 5; outCounter++) {
    let outText = "";
    for (inCounter = 1; inCounter <= 5; inCounter++) {
        outText = outText + outCounter;
    }
    console.log(outText);
}

//output should be 
//***** 
//*****
//*****
//*****
//*****

const showStar = "*";

for (outCounter = 1 ; outCounter <= 5; outCounter++) {
    let outText = ""; // outText is the resetting variable
    for (inCounter = 1; inCounter <= 5; inCounter++) {
        outText = outText + showStar;
    }
    console.log(outText);
}

//output should be
//*
//**
//***
//****
//*****

for (outCounter = 1 ; outCounter <= 5; outCounter++) {
    let outText = "";
    for (inCounter = 1; inCounter <= outCounter; inCounter++) {
    outText = outText + showStar;
    }
    console.log(outText);
}

//output should be
//*****
//****
//***
//**
//*

for (outCounter = 1 ; outCounter <= 5; outCounter++) {
    let outText = "";
    for (inCounter = 1; inCounter <= (6 - outCounter); inCounter++) {
    outText = outText + showStar;
    }
    console.log(outText);
}
