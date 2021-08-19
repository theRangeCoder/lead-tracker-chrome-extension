// To store the leads
let myLeads = [];

const inputEl = document.querySelector("#input-el");
const InputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const DeleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// A function to render the leads on the page
function render(leads) {
    // Since DOM manipulation comes at a cost, we manipulate the DOM outside the for loop, to render the leads

    let leadItems = "";
    for (let i = 0; i < leads.length; i++) {
        leadItems += `<li>
        <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
        </li>`;
    }

    ulEl.innerHTML = leadItems;
}

// Getting the leads from the local storage
let leadsFromLocalStorage = localStorage.getItem("myLeads");
// Converting the string of leads to an array
leadsFromLocalStorage = JSON.parse(leadsFromLocalStorage);

// Checking the local storage for non-emptiness before rendering out the previously saved leads
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

DeleteBtn.addEventListener("click", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

InputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";

    // Storing the leads in the local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    });
});



