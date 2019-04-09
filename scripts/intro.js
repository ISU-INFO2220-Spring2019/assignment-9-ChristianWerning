//    Christian Werning
//January 16, 2019
//INFO 2220
//Jon Holmes
//Assignment 3 – Part III
//Purpose: JS normal

var loadLast = "I loaded last";
var arrNumbers;
var averageNumbers = 0;
var sumNumbers = 0;

alert("The script in the header has run.");


if (typeof arrNumbers === "undefined") {
    arrNumbers = new Array();
}
else {
    alert("arrNumbers was not undefined!");
}

arrNumbers.push(34);
arrNumbers.push(5.5);
arrNumbers.push(33.5);
arrNumbers.push(46.5);
arrNumbers.push(59);
arrNumbers.push(64);
arrNumbers.push(43);
arrNumbers.push(64);
arrNumbers.push(48);
arrNumbers.push(49);
arrNumbers.push(40);
arrNumbers.push(59);
arrNumbers.push(44);
arrNumbers.push(54);
arrNumbers.push(19.5);
arrNumbers.push(25);
arrNumbers.push(69);
arrNumbers.push(23);

for (var i = 0; i < arrNumbers.length; i++) {
    sumNumbers += arrNumbers[i];
}

averageNumbers = sumNumbers / arrNumbers.length;
alert(averageNumbers);

function getName() {
    return "Christian Werning";
}