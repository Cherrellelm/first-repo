// 2/12/23

for (outCounter = 1; outCounter <= 5; outCounter++) {
    let outText = "";
    for (inCounter = 1; inCounter <= 5; inCounter++) {
        outText = outText + inCounter;
    }
    console.log(outText);
}

for (outCounter = 1; outCounter <= 5; outCounter++) {
    let outText = "";
    for (inCounter = 1; inCounter <= 5; inCounter++) {
        outText = outText + outCounter;
    }
    console.log(outText);
}