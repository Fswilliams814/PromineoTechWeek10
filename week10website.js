//start by grabbing the input data from the html using the element IDs and setting it to a variable
var myTable = document.getElementById("myTable");
var date = document.getElementById("date");
var customerName = document.getElementById("name");
var improvementArea = document.getElementById("improvementArea");
var number = document.getElementById("number")

//checking to make sure each variable is pulling the right data
console.log(myTable);
console.log(customerName);
console.log(date);
console.log(improvementArea);

//this function will run when the user inputs info
function addInfo() {
    var newRow = myTable.insertRow(1); //adds a new row with the insertRow() method
    var cell1 = newRow.insertCell(0); //adds new cell to the row (repeat total 4 times to add 3 new cells)
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = date.value; //assign value to the cell in the HTML page
    cell2.innerHTML = customerName.value;
    cell3.innerHTML = number.value;
    cell4.innerHTML = improvementArea.value;
    let newForm = document.getElementById("form");
    newForm.onsubmit();
    newForm.reset();
}

