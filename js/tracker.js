// To store the leads
let myLeads = [];

const inputEl = document.querySelector("#input-el");
const InputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// Adding an event listener to it
InputBtn.addEventListener("click", function() {
    console.log("Input saved!");
});

InputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    renderLeads();
});





