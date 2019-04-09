$(document).ready(function () {

    var btnTogglePsStatus = 0;

    $("#btnChangeSpan").click(function () {
        $("#spnOne").text("New Text for the Span");
    });

    $("#btnAppendToSpan").click(function () {
        $("#spnOne").append(" == Text at the back ");
    });

    $("#btnPrependToSpan").click(function () {
        $("#spnOne").prepend("Text at the front -- ");
    });

    $("#btnBeforeSpan").click(function () {
        $("#spnOne").before("Text Before ++ ");
    });

    $("#btnAfterSpan").click(function () {
        $("#spnOne").after(" @@ Text After");
    });

    $("#btnShowSpan").click(function () {
        alert($("#spnOne").text());
    });

    $("#btnNumberPs").click(function () {

        //$("#divNumbers p").each(function (index) {
        //    $(this).prepend((index + 1) + ". ");
        //});

        var para = $("#divNumbers p");
        for (var i = 0; i < para.length; i++) {
            para[i].prepend((i + 1) + ". ");
        }
      
    });

    $("#btnClassPSuccess").click(function () {
        $("#divClass p").addClass("success");
    });

    $("#btnClassPError").click(function () {
        $("#divClass p:even").removeClass("success");
        $("#divClass p:even").addClass("error");
    });

    $("#btnClassPWarning").click(function () {
        $("#divClass p").removeClass();
        $("#divClass p").addClass("warning");
    });

    $("#btnAddLastNames").click(function () {
        var startpoint = $(".bff").parent();
        startpoint.children().eq(0).append($("<strong>Flintstone</strong>"));
        startpoint.children().eq(1).append($("<em>Rubble</em>"));
        startpoint.children().eq(2).append($("<del>Dinosaur</del>"));

    });

    $("#btnRemoveLarry").click(function () {
        $(".first").remove();
    });

    $("#btnClearCurly").click(function () {
        $(".second").empty();
    });

    $("#btnRemoveMoeLastName").click(function () {
        $(".third span").remove();
    });

    $("#btnRemoveShempLastName").click(function () {
        $(".third").parent().children().last().find("span").remove();
    });

    $("#btnChangeText").click(function () {
        $("#spnTwo").parent().parent().children().eq(1).children().eq(1).text("I was Changed.");
    });

    $("#btnTogglePs").click(function () {
        if (btnTogglePsStatus === 0) {
            $("p").hide();
            $(this).text("Show All Ps");
            btnTogglePsStatus = 1;
        }
        else {
            $("p").show();
            $(this).text("Hide All Ps");
            btnTogglePsStatus = 0;
        }
    });



});