$(document).ready(function () {
    var books = "";
    var people = "";

    $.ajax({
        url: "data/books.json",
        success: function (data) {
            books = data;
        },
        error: function () {
            alert("No books found");
        }
    });

    $.ajax({
        url: "data/people.json",
        success: function (data) {
            people = data;
        },
        error: function () {
            alert("No people found");
        }
    });


    $("#btnSearch").click(function () {

        var input = $("#searchText").val().toLowerCase();
        var tableBody = $("#bookTableBody");
        tableBody.empty();

        $.each(books.books, function (index, obj) {
            var select = false;

            if (obj.title.toLowerCase().indexOf(input) >= 0) select = true;
            if (obj.isbn.toLowerCase().indexOf(input) >= 0) select = true;
            if (obj.author.firstname.toLowerCase().indexOf(input) >= 0) select = true;
            if (obj.author.middlename.toLowerCase().indexOf(input) >= 0) select = true;
            if (obj.author.lastname.toLowerCase().indexOf(input) >= 0) select = true;
            $.each(obj.tags, function (indexTags, objTag) {
                if (objTag.toLowerCase().indexOf(input) >= 0) select = true;
            });

            if (select) {
                var tr = $("<tr>");
                var tdTitle = $("<td>").append(obj.title);
                var tdISBN = $("<td>").append(obj.isbn);
                var tdAuthor = $("<td>").append(obj.author.firstname + (obj.author.middlename != "" ? " " + obj.author.middlename : "") + " " + obj.author.lastname);
                var list = $("<ul>");
                $.each(obj.tags, function (indexTags, objTag) {
                    list.append($("<li>").append(objTag));
                });
                var tdTags = $("<td>").append(list);
                tr.append(tdTitle)
                    .append(tdISBN)
                    .append(tdAuthor)
                    .append(tdTags);
                tableBody.append(tr);
            }

        });
    });


    $("#peopleInput").keyup(function () {

        var input = $(this).val().toLowerCase();
        var ul = $("#peopleResult");
        ul.empty();

        $.each(people, function (index, obj) {
            var select = false;

            if (obj.name.toLowerCase().indexOf(input) >= 0) select = true;
            if (obj.phone.indexOf(input) >= 0) select = true;


            if (select) {

                var li = $("<li>").addClass("personsLi");

                switch (obj.group) {
                    case 1: li.addClass("group1"); break;
                    case 2: li.addClass("group2"); break;
                    case 3: li.addClass("group3"); break;
                }
                
                var nameEle = $("<span>").addClass("personsName").append(obj.name);
                var ageEle = $("<span>").append(obj.age);
                var groupEle = $("<span>").addClass("personsGroup").append(obj.group);
                var phoneEle = $("<span>").append(obj.phone);
                li.append(groupEle)
                    .append(nameEle)
                    .append(ageEle)
                    .append(phoneEle);
                ul.append(li);
            }

        });
    });

});