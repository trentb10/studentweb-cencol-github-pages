/* global vars */

var userSetRows;
var userSetColumns;
var inputRows = document.getElementById("numberRows");
var inputColumns = document.getElementById("numberColumns");
var tableExists = false;

/* event listeners */

window.addEventListener("load", signTM10);
document.getElementById("btnCreateTable").addEventListener("click", verifyValues);
document.getElementById("btnReset").addEventListener("click", resetTable);

/* functions */

function verifyValues() {
    var validValues = false;
    
    try {
        if (!(inputRows.value >= 1 && inputRows.value <= 15 && inputColumns.value >= 1 && inputColumns.value <= 15)) {
           throw "Values for rows and columns must be between 1 and 15, inclusive.";
        } else {
            validValues = true;
        }
     }
     catch(message) {
        alert(message);
        inputRows.value = "";
        inputColumns.value = "";
     }

     if (validValues) {
        createTable();
    }
     
}

function createTable() {
    userSetRows = inputRows.value;
    userSetColumns = inputColumns.value;

    console.log("Creating table using set values...");
    console.log("Rows: " + userSetRows + " Columns: " + userSetColumns);

    // start table
    var table = "<table>"
    
    for (var row = 1; row <= userSetRows; row++) {
        table += "<tr>";   
            for (var column = 1; column <= userSetColumns; column++) {
                table += "<td>" + row + "," + column + "</td>";
            }
        table += "</tr>";
    }

    // close table
    table += "</table>";

    document.getElementById("table").innerHTML = table;
    tableExists = true;
}

function resetTable() {
    try {
        if (!tableExists) {
            throw "You must create a table before you can reset it!";
        } else {
            table = "";
            inputRows.value = "";
            inputColumns.value = "";
            document.getElementById("table").innerHTML = table;
            tableExists = false;
        }
    }
    catch(message) {
        alert(message);
    }
}

function signTM10() {
    console.log("TMinus10 is signing on. (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧");
}