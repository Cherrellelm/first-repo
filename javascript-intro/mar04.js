let arrStateName = [
    "Alabama",
    "Florida",
    "Georgia",
    "North Carolina",
    "South Carolina",
    "Tennessee",
    "Texas",
];

let arrStateAbbr = [
    "AL",
    "FL",
    "GA",
    "NC",
    "SC",
    "TN",
    "TX"
];

let arrStateTax = [4, 6, 4, 4.75, 6, 7, 6.25];

let btn = document.querySelector("#submitBtn");
let stateName = document.querySelector("#statename");
let outputDiv = document.querySelector("#output");
let orderTotal = document.querySelector("#orderTotal");

let outputLine;
loadStates();


btn.addEventListener('click', () => displayTaxCalculation());

btn.addEventListener('mouseover', () => console.log("UFO is hovering over us!!!"));

function displayTaxCalculation() {

    let taxRate = getStateTaxRate(stateName.value);
    let taxAmount = calcTax(Number(orderTotal.value), taxRate);
    let totalBill = Number(orderTotal.value) + taxAmount;

    if (!document.getElementById("outputMessage")) {
        outputLine = document.createElement('p');
        outputLine.setAttribute('id', 'outputMessage');
}

//Thank you for choosing EATS in Georgia. Your bill is $$$$.

    outputLine.textContent = "Thank you for choosing EATS in " + stateName.value + ". " 
        + "Your bill is " + totalBill;

    outputDiv.appendChild(outputLine);
}


function loadStates() {
    for (let counter = 0; counter < arrStateName.length; counter++) {
        let stateOption = document.createElement("option");
        stateOption.text = arrStateName[counter];
        stateOption.value = arrStateAbbr[counter];
        stateName.appendChild(stateOption);
    }
    }

let getStateTaxRate = (stateAbbr) => {

    //search the array for the corresponding tax rate
    for(let counter = 0; counter < arrStateAbbr.length; counter++) {
        if(stateAbbr == arrStateAbbr[counter]) {
                //return the tax rate
            return arrStateTax[counter];
        }
    }

}

let calcTax = (amount, taxRate) => (amount * (taxRate/100));
    //return the tax amount
