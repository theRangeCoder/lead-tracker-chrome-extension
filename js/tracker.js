// To store the leads
let myLeads = [];

const inputEl = document.querySelector("#input-el");
const InputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const DeleteBtn = document.getElementById("delete-btn");

// Getting the leads from the local storage
let leadsFromLocalStorage = localStorage.getItem("myLeads");
// Converting the string of leads to an array
leadsFromLocalStorage = JSON.parse(leadsFromLocalStorage);

// Checking the local storage for non-emptiness before rendering out the previously saved leads
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

DeleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    renderLeads();
});

InputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";

    // Storing the leads in the local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
});

// A function to render the leads on the page
function renderLeads() {
    // Since DOM manipulation comes at a cost, we manipulate the DOM outside the for loop, to render the leads

    let leadItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        leadItems += `<li>
        <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        </li>`;
    }

    ulEl.innerHTML = leadItems;
}



