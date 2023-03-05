let btn = document.querySelector("#submitBtn");
let stateName = document.querySelector("#statename");
let outputDiv = document.querySelector('#output');

let outputLine;

btn.addEventListener('click', () => displayStateName());

btn.addEventListener('mouseover', () => console.log("UFO is hovering over us!!!"));

let stateOption = document.createElement("option");
stateOption.text = "South Carolina";
stateOption.value = "SC";
stateName.appendChild(stateOption);

function displayStateName() {

    if (!document.getElementById("outputMessage")) {
        outputLine = document.createElement('p');
        outputLine.setAttribute('id', 'outputMessage');
}

    outputLine.textContent = statename.value;
    outputDiv.appendChild(outputLine);
}