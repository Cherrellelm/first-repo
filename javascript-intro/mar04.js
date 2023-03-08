
let menuItems = ["Chicken Chili","Jerk Tilapia","Black Beans","Sweet Potato","Homemade Brownie","Soda"];
let menuCodes = ["CC","JT","BB","SP","HB","SO"];
let menuPrices = [7, 7, 4, 4, 2, 1];

let arrStateName = [
    "Alabama", 
    "Florida",
    "Georgia",
    "North Carolina", 
    "South Carolina", 
    "Tennessee",
    "Texas",
    "California"
];

let arrStateAbbr = [
    "AL", 
    "FL",
    "GA",
    "NC", 
    "SC", 
    "TN",
    "TX",
    "CA"
];

let arrStateTax = [4, 6, 4, 4.75, 6, 7, 6.25, 8];

let submitBtn = document.querySelector("#submitBtn");
let addOrderBtn = document.querySelector("#addOrderBtn");
let clearOrderBtn = document.querySelector("#clearOrderBtn");

let stateName = document.querySelector("#statename");
let outputDiv = document.querySelector('#output');
let orderTotal = document.querySelector("#orderTotal");
let orderItem = document.querySelector("#orders");

let outputLine;

let itemCount = 1;

loadStates();



submitBtn.addEventListener('click', () => displayTaxCalcuation());

addOrderBtn.addEventListener('click', () => addToOrder());

clearOrderBtn.addEventListener('click', () => clearOrder());

function addToOrder() {
   console.log("In the addToOrder function");
   loadOrderItem();   
}

function clearOrder () {
    console.log("In the ClearOrder function");
}


function displayTaxCalcuation() {

    let taxRate = getStateTaxRate(stateName.value);
    let taxAmount = calcTax(Number(orderTotal.value), taxRate);
    let totalBill = Number(orderTotal.value) + taxAmount;

    if (!document.getElementById("outputMessage")) {
        outputLine = document.createElement('p');
        outputLine.setAttribute('id', 'outputMessage');
    }
    
    outputLine.textContent = "Thank you for choosing EATS in " + stateName.value + "." 
                            + "Your bill is " + totalBill;

    outputDiv.appendChild(outputLine);

}

function loadStates() {

    for(counter = 0; counter < arrStateName.length; counter++) {
        let stateOption = document.createElement("option");
        stateOption.text = arrStateName[counter];
        stateOption.value = arrStateAbbr[counter];
        stateName.appendChild(stateOption);
    }

}

function getStateTaxRate(stateAbbr) {

    for(counter = 0; counter < arrStateAbbr.length; counter++) {
        if(stateAbbr == arrStateAbbr[counter]) {
            return arrStateTax[counter];
        }
    }
}

function calcTax(amount, taxRate) {
    return ((amount * taxRate) / 100);
}

function loadOrderItem() {
    let itemDiv = document.createElement("div");
    let itemDivID = "itemDiv" + itemCount;
    itemDiv.setAttribute('id', itemDivID);

    let itemSelect = document.createElement("select");
    let itemSelectID = "itemDescription" + itemCount;
    itemSelect.setAttribute('id', itemSelectID);

    for(counter=0; counter < menuItems.length; counter++) {
        let itemOption = document.createElement("option");
        itemOption.text = menuItems[counter];
        itemOption.value = menuCodes[counter];
        itemSelect.appendChild(itemOption);
    }
    itemDiv.append(itemSelect);

    let itemSelectQty = document.createElement("select");
    let itemSelectQtyID = "itemQuantity" + itemCount;
    itemSelectQty.setAttribute('id', itemSelectQtyID);

    for(counter=1; counter <= 5; counter++) {
        let itemQtyOption = document.createElement("option");
        itemQtyOption.text = counter;
        itemQtyOption.value = counter;
        itemSelectQty.appendChild(itemQtyOption);
    }
    itemDiv.append(itemSelectQty);

    /* 
    let itemAddBtn = document.createElement("button");
    let itemBtnID = "addBtn" + itemCount;
    itemAddBtn.setAttribute('id', itemBtnID);
    itemAddBtn.setAttribute('class', "addButton");
    itemAddBtn.innerHTML = "Add";
    itemAddBtn.addEventListener('click', () => {
        console.log(itemAddBtn.id);
        loadOrderItem();
    });
    itemDiv.append(itemAddBtn);
    */

    orderItem.appendChild(itemDiv);

    itemCount++;
}