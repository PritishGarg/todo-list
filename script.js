const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Add cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for the '×' symbol
        li.appendChild(span);

        listContainer.appendChild(li); // Add the list item to the container
        inputBox.value = ''; // Clear the input box

        // Add click event to remove task
        span.addEventListener("click", function () {
            li.remove();
        });
    }
}
        
// Fix the event listener syntax
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
}, false);

function saveData(){
    localStorage.setItem("Data",listContainer.innerHTML);
}    
function showTask(){
    listContainer.innerHtml=localStorage.getItem("data");
}
showTask();