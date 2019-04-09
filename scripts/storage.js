var people = JSON.parse(localStorage.getItem("persons")) || [];
var index;

$(document).ready(function () {
    displayPeople();


    if (localStorage.getItem("username") !== null) {
        $("#userName").val(localStorage.getItem("username"));
    }
    else {
        $("#userName").val("");
    }

    

    $(".radioGroup").click(function () {
        $("#selectedGroup").html($(this).attr("data-value"));
    });


    $("#login").click(function () {

        var username = $("#userName").val();
        var password = $("#password").val();
        var rememberMe = $("#rememberUser").prop("checked");

        if (username === "weaver" && password === "tester") {

            if (rememberMe) {
                localStorage.setItem("username", username);
            }
            else {
                localStorage.removeItem("username");
            }
            
            
            alert("You logged in.")
        }
        else {
            alert("Login Failed.");
        }


        window.location.reload();

    });


    $("#forgetUser").click(function(){
        localStorage.removeItem("username");
        window.location.reload();
    });


    function Person(name, phone, age, group) {
        this.name = name;
        this.phone = phone;
        this.age = age;
        this.group = group;
    }


    $("#addPerson").click(function () {

        var person = new Person($("#name").val(), $("#phone").val(), $("#age").val(), $("input[name='group']:checked").attr("data-value"));

        if (validateInput(person.name, person.phone, person.age)) {
            if (index > -1) {
                people[index] = person;
                $("#addPerson").html("Add Person");

                $("#userList").html("");
                displayPeople();

                index = -1;
            }
            else {
                people.push(person);
                displayPerson(person, people.length - 1);
            }

            localStorage.setItem("persons", JSON.stringify(people));
        }
    });


    $("#clearStorage").click(function () {
        localStorage.removeItem("persons");
        window.location.reload();
    });

});


function displayPerson(person, position) {
    var ul = $("#userList");
    var li = $("<li>").addClass("personsLi");

    switch (person.group) {
        case "1": li.addClass("group1"); break;
        case "2": li.addClass("group2"); break;
        case "3": li.addClass("group3"); break;
    }

    var nameEle = $("<span>").addClass("personsName").append(person.name);
    var editEle = $("<button>").addClass("personEdit").attr("data-index", position).append("Edit");
    editEle.click(personEditEvent);
    var ageEle = $("<span>").append(person.age);
    var groupEle = $("<span>").addClass("personsGroup").append(person.group);
    var phoneEle = $("<span>").append(person.phone);
    li.append(groupEle)
        .append(nameEle)
        .append(ageEle)
        .append(phoneEle);
    if (!ul.hasClass("hideEdit")) {
        li.append(editEle);
    }
    ul.append(li);
};


function displayPeople() {
    for (var i = 0; i < people.length; i++) {
        displayPerson(people[i], i);
    }
}

function personEditEvent() {
    index = $(this).attr("data-index");

    var personInEdit = people[index];


    $("#name").val(personInEdit.name);
    $("#phone").val(personInEdit.phone);
    $("#age").val(personInEdit.age);
    $("#group" + personInEdit.group).prop("checked", true);
    $("#selectedGroup").html(personInEdit.group);

    $("#addPerson").html("Save Changes");
}

function validateInput(name, phone, age) {

    var result = 1;
    var msg = "";
    if (name === "" || !name.match(/^[a-zA-Z\s]*$/)) {
        result = 0;
        msg += "The name is empty or contains symbols which are not allowed! \n\r";
    }

    if (!$.isNumeric(phone) || phone.trim().length !== 10) {
        result = 0;
        msg += "Your phone number is empty or incorrect! \n\r";
    }

    if (!$.isNumeric(age) || age < 0) {
        result = 0;
        msg += "Your age must be over 0 and can not contain any letters! \n\r";
    }

    if (msg !== "") {
        alert(msg);
    }

    return result;
    
}