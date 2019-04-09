//    Christian Werning
//January 16, 2019
//INFO 2220
//Jon Holmes
//Assignment 3 – Part IV
//Purpose: JS end

var greeting = prompt("Please enter a greeting:");

if (greeting !== "" && greeting !== null) {
    alert(greeting + " " + getName());
}
else {
    alert("I am sorry " + getName() + "; I do not know what to do.");
}

loadLast = "I really am last";