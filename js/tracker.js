// To store the leads
let myLeads = [];

const inputEl = document.querySelector("#input-el");

// For the SAVE INPUT button

// Getting the SAVE INPUT button element
const InputBtn = document.getElementById("input-btn");

// Adding an event listener to it
InputBtn.addEventListener("click", function() {
    console.log("Input saved!");
});

InputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
});

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
}

