
let menuItems = ["Chicken Chili","Jerk Tilapia","Black Beans","Sweet Potato","Homemade Brownie","Soda"];
let menuCodes = ["CC","JT","BB","SP","HB","SO"];
let menuPrices = [7, 7, 4, 4, 2, 1];
let arrOrderTotal = [];

let lineItemPrice = 0;

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
let tipAmount = [25, 20,15];

let submitBtn = document.querySelector("#submitBtn");
let addOrderBtn = document.querySelector("#addOrderBtn");
let clearOrderBtn = document.querySelector("#clearOrderBtn");

let stateName = document.querySelector("#statename");
let outputDiv = document.querySelector("#output");
let orderTotal = document.querySelector("#orderTotal");
let orderItem = document.querySelector("#orders");
let tipSelect = document.querySelector("#tip");
let outputLine;

let itemCount = 1;

loadStates();



submitBtn.addEventListener('click', () => displayTaxCalcuation());

addOrderBtn.addEventListener('click', () => addToOrder());

clearOrderBtn.addEventListener('click', () => clearOrder());



let addToOrder = () => loadOrderItem();

let clearOrder = () => {
    console.log("In the ClearOrder function");
    let parentDiv = document.querySelector("#orders");
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild);
    }
    itemCount = 1;
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
 // loadStates displays <option value="AL">Alabama</option> in html
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


    let itemLabel = document.createElement("label");
    let itemLabelID = "itemNumber" + itemCount;
    itemLabel.setAttribute('id', itemLabelID);
    itemLabel.innerText = itemCount + ".";
    //Attach this "label" to the parent DIV
    itemDiv.append(itemLabel);

    let itemSelect = document.createElement("select");
    let itemSelectID = "itemDescription" + itemCount;
    itemSelect.setAttribute('id', itemSelectID);

    //<option value="" disabled selected hidden>Choose an item</option>

    let itemOption = document.createElement("option");
    itemOption.text = "Choose an Item";
    itemOption.value = "";
    itemOption.selected = true;
    itemOption.disabled = true;
    itemOption.hidden = true;
    
    itemSelect.appendChild(itemOption);

    for(counter=0; counter < menuItems.length; counter++) {
        let itemOption = document.createElement("option");
        itemOption.text = menuItems[counter];
        itemOption.value = menuCodes[counter];
        itemSelect.appendChild(itemOption);
    }
  
    itemSelect.addEventListener('change', () => computeLineItem(itemSelect.id, itemSelect.value));
    itemDiv.append(itemSelect);

    //<label id="itemPrice0">$4.00</label>

    let itemPrice = document.createElement("label");
    let itemPriceID = "itemPrice" + itemCount;


    itemPrice.setAttribute('id', itemPriceID);
    itemPrice.innerText = "$0.00";
    itemDiv.append(itemPrice);

    let itemSelectQty = document.createElement("select");
    let itemSelectQtyID = "itemQuantity" + itemCount;
    itemSelectQty.setAttribute('id', itemSelectQtyID);

    for(counter=1; counter <= 5; counter++) {
        let itemQtyOption = document.createElement("option");
        itemQtyOption.text = counter;
        itemQtyOption.value = counter;
        itemSelectQty.appendChild(itemQtyOption);
    }
    itemSelectQty.addEventListener('change', () => computeLineItem(itemSelect.id, itemSelect.value));
    itemDiv.append(itemSelectQty);

    let itemCostNumber = 0;

    let itemCost = document.createElement("label");
    let itemCostID = "itemCost" + itemCount;
    itemCost.setAttribute('id', itemCostID);
    itemCost.innerText = "$0.00";
    itemDiv.append(itemCost);


    orderItem.appendChild(itemDiv);
    
    arrOrderTotal[itemCount -1] = 0;
    itemCount++;
}

function computeLineItem(itemID, menuCode) {

    let itemNumber = itemID.substring(15);

    console.log("In computeLineItem() >>" + itemID + ">>" + menuCode + ">>" + itemNumber);
    lineItemPrice = getPrice(menuCode);
    //let itemDiv = document.querySelector("#"+itemID);
    let itemPriceID = "itemPrice" + itemNumber;
    let itemPrice = document.querySelector("#"+itemPriceID);
    itemPrice.innerText = "$" + lineItemPrice.toFixed(2);
   
    let itemSelectQty = document.querySelector("#itemQuantity"+itemNumber);
    let lineItemCost = lineItemPrice * itemSelectQty.value;
    
    let itemCostID = "itemCost" + itemNumber;
    let itemCost = document.querySelector("#"+itemCostID);
    itemCost.innerText = "$" +lineItemCost.toFixed(2);

    arrOrderTotal[itemNumber - 1] = lineItemCost;

    let orderTotal = document.querySelector("#orderTotal");
    orderTotal.value = computeOrderTotal();
}


function getPrice(menuCode) {
    
    for(counter=0; counter < menuCodes.length; counter++) {
        if(menuCode == menuCodes[counter]) {
            return menuPrices[counter];
        }
    }
}

function computeOrderTotal() {
    let orderTotal = 0;

    for (counter =0; counter < arrOrderTotal.length; counter++) {
        orderTotal = orderTotal + arrOrderTotal[counter];
    }
    //return the sum
    return orderTotal;
}

function tipOptions() {
    let tipInput = document.creatElement("INPUT");
    let tipInputId = "tipSelect" + itemCount;
    tipInput.text = tipAmount[counter];
    tipInput.value = tipAmount[counter];
    tipInput.setAttribute('type', 'checkbox');
    tipInput.setAttribute('id', tipInputId);


//<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
}
 /* loadStates displays <option value="AL">Alabama</option> in html
 function loadStates() {

    for(counter = 0; counter < arrStateName.length; counter++) {
        let stateOption = document.createElement("option");
        stateOption.text = arrStateName[counter];
        stateOption.value = arrStateAbbr[counter];
        stateName.appendChild(stateOption);
    }*/

    tipOptions();