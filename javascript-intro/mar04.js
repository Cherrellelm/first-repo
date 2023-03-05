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
let outputDiv = document.querySelector('#output');

let outputLine;
loadStates();

btn.addEventListener('click', () => displayStateName());

btn.addEventListener('mouseover', () => console.log("UFO is hovering over us!!!"));

function displayStateName() {

    if (!document.getElementById("outputMessage")) {
        outputLine = document.createElement('p');
        outputLine.setAttribute('id', 'outputMessage');
}

    outputLine.textContent = statename.value;
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

