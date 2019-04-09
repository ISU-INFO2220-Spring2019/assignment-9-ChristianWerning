//    Christian Werning
//February 13, 2019
//INFO 2220
//Jon Holmes
//Assignment 5 – Part II
//Purpose: JS DOM

var firstNames = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
var lastNames = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
var ages = [36, 34, 7, 34, 32, 8];


function showInnerText() {
    alert(document.getElementById("pOne").innerText);
}

function showInnerHTML() {
    alert(document.getElementById("pOne").innerHTML);
}

function numberList() {
    var liElements = document.getElementsByTagName("li");
    for (var i = 0; i < liElements.length; i++) {
        liElements[i].appendChild(document.createTextNode(" " + (i + 1)));
    }
}

function markRows() {
    var trElements = document.getElementById("tblMarkRows").getElementsByTagName("tr");

    for (var i = 1; i < trElements.length; i = i + 2) {
        trElements[i].classList.add("other");
    }
}

function addRows() {
    var tblAddRows = document.getElementById("tblAddRows");

    for (var i = 0; i < firstNames.length; i++) {
        var row = document.createElement("tr");
        var tdFirstName = document.createElement("td");
        tdFirstName.innerText = firstNames[i];
        var tdLastName = document.createElement("td");
        tdLastName.innerText = lastNames[i];
        var tdAge = document.createElement("td");
        tdAge.innerText = ages[i];
        row.appendChild(tdFirstName);
        row.appendChild(tdLastName);
        row.appendChild(tdAge);

        if (i % 2 === 0) {
            row.classList.add("other");
        }

        tblAddRows.appendChild(row);
    }
}

function addSuccess() {
    addMessage("success");
}

function addWarning() {
    addMessage("warning");
}

function addError() {
    addMessage("error");
}


function addMessage(kindOfMessage) {
    var messagesContainer = document.getElementById("divMessages");
    var newMessage = document.createElement("div");
    newMessage.classList.add(kindOfMessage);
    newMessage.appendChild(document.createTextNode("This is a " + kindOfMessage + " Message"));
    messagesContainer.appendChild(newMessage);
}