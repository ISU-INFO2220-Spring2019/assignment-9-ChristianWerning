
var personHolder;
var characters = new Array();


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age;
    this.stepsToTake;


    this.getSequentialCount = function() {

        if (arguments.length > 0) {
            return "No Parameters allowed";
        }

        var result = "";

        for (var i = 1; i <= this.stepsToTake; i++) {
            result += i + " ";
        }

        return result;

    }


    this.oddAgeSum = function() {
        if (arguments.length > 0) {
            return "No Parameters allowed";
        }

        var sum = 0;

        for (var i = 1; i < this.age; i = i+2) {
            sum += i;
        }

        return sum;
    }


}


function Converter() {

    // source: http://www.sengpielaudio.com/Rechner-fahrenheitformel.htm
    // formel: °C = (°F − 32) / 1,8
    this.convertDegreesInC = function(degreesF) {
        if (!isNaN(degreesF)) {
            return (degreesF - 32) / 1.8
        }
        else {
            return "Wrong or no Parameter given";
        }
    }

    // source: http://www.sengpielaudio.com/Rechner-fahrenheitformel.htm
    // formel: °F = °C × 1,8 + 32
    this.convertDegreesInF = function() {
        if (!isNaN(arguments[0])){
            return arguments[0] * 1.8 + 32;
        }
        else {
            return "Wrong or no Parameter given";
        }
    
    }
}


function sayHello() {
    var name = prompt("Please enter your name:");
    if (name !== "" && name !== null) {
        alert("Hello, " + name);
    }
    else {
        alert("You did not type in your name!");
    }
}

function greet(greeting) {
    var name = prompt("Please enter your name:");
    if (name !== "" && name !== null) {
        alert(greeting + ", " + name);
    }
    else {
        alert("You did not type in your name!");
    }
}

function doMaths(number1, number2) {

    if (!isNaN(number1) && !isNaN(number2)) {

        var result = number1 + "" + number2 + "\r\n";
        result += (number1 + number2) + "\r\n";
        result += (number1 - number2) + "\r\n";
        result += (number1 * number2) + "\r\n";
        result += (number1 / number2) + "\r\n";


        alert(result);
    }
    else {
        alert("Parameters are not numbers");
    }
    
}


function createPerson() {

    var firstName = prompt("Please enter your first name:");
    var lastName = prompt("Please enter your last name:");

    do {
        var age = prompt("Please enter your age (must be valid otherwise you have to enter it again):");
    } while (isNaN(age) || age < 1 || age > 150)

    personHolder = new Person(firstName, lastName);
    personHolder.age = age;
}


function showSteps() {

    if (typeof personHolder !== "undefined") {
        personHolder.stepsToTake = 10;
        var steps = personHolder.getSequentialCount();

        alert(personHolder.firstName + " " + personHolder.lastName + " took steps \r\n" + steps);
    }
    else {
        alert("Object does not exist; please click the 'Fill Object' button first.");
    }

}

function getDegreesInC(degreesInF) {
    var converter = new Converter();
    alert(converter.convertDegreesInC(degreesInF));
}

function getDegreesInF(degreesInC) {
    var converter = new Converter();
    alert(converter.convertDegreesInF(degreesInC));
}


function fillCharacterArray() {
    var firstNames = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
    var lastNames = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
    var ages = [36, 34, 7, 34, 32, 8];


    for (var i = 0; i < firstNames.length; i++) {
        var person = new Person(firstNames[i], lastNames[i]);
        var character = Object.create(person);
        character.age = ages[i];
        characters.push(character);
    }
}


function getCharacterAt(position) {
    if (characters.length > 0) {
        var character = characters[position];
        alert(character.firstName + " your odd age sum is " + character.oddAgeSum());
    }
    else {
        alert("Array has not been filled; please click the 'Fill characters array' button first.");
    }
}