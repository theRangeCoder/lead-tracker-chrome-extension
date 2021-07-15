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
    inputEl.value = '';
    renderLeads();
});

// A function to render the leads on the page
function renderLeads() {
    // Since DOM manipulation comes at a cost, we manipulate the DOM outside the for loop, to render the leads

    let leadItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        leadItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    }

    ulEl.innerHTML = leadItems;
}



