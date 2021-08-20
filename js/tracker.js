// To store the leads
let MyLeads = [];

const InputEl = document.getElementById("input-el");
const InputBtn = document.getElementById("input-btn");
const UlEl = document.getElementById("ul-el");
const DeleteBtn = document.getElementById("delete-btn");
const TabBtn = document.getElementById("tab-btn");

// A function to render the leads on the page
function render(leads) {
    // Since DOM manipulation comes at a cost, we manipulate the DOM outside the for loop, to render the leads

    let leadItems = "";
    for (let i = 0; i < leads.length; i++) {
        leadItems += `<li>
        <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
        </li>`;
    }

    UlEl.innerHTML = leadItems;
}

// Getting the leads from the local storage
let LeadsFromLocalStorage = localStorage.getItem("MyLeads");
// Converting the string of leads to an array
LeadsFromLocalStorage = JSON.parse(LeadsFromLocalStorage);

// Checking the local storage for non-emptiness before rendering out the previously saved leads
if (LeadsFromLocalStorage) {
    MyLeads = LeadsFromLocalStorage;
    render(MyLeads);
}

DeleteBtn.addEventListener("click", function() {
    localStorage.clear();
    MyLeads = [];
    render(MyLeads);
});

InputBtn.addEventListener("click", function() {
    MyLeads.push(InputEl.value);
    InputEl.value = "";

    // Storing the leads in the local storage
    localStorage.setItem("MyLeads", JSON.stringify(MyLeads));
    render(MyLeads);
});

TabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        MyLeads.push(tabs[0].url)
        localStorage.setItem("MyLeads", JSON.stringify(MyLeads) )
        render(MyLeads)
    });
});



