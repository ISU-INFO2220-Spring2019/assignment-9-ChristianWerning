var btnSayHello;

function moveMouse(e) {
    e = e || window.event;
    var x = e.x;
    var y = e.y;

    var mouseCoords = document.getElementById("mouseCoords");
    mouseCoords.innerText = "x: " + x + " y: " + y;
}

function mousePressed(e) {
    e = e || window.event;
    var trgt = e.target || e.srcElement;

    if (trgt !== e.currentTarget) {
        trgt.className = "pressed";
    }

}


function resetClass(e) {
    e = e || window.event;
    var trgt = e.target || e.srcElement;
    trgt.className = "";
}

function mouseHeadOver(e) {
    e = e || window.event;
    e.currentTarget.className = "overHead";
}





window.onload = function (e) {
    e = e || window.event;
    var section = document.getElementById("mouseCoords").parentNode;

    section.onmousemove = moveMouse;
    section.onmousedown = mousePressed;
    section.onmouseup = resetClass;

    var headers = section.getElementsByTagName("h1");

    for (var i = 0; i < headers.length; i++) {
        headers[i].onmouseover = mouseHeadOver;
        headers[i].onmouseleave = resetClass;
    }

    btnSayHello = document.getElementById("btnSayHello");
    btnSayHello.onclick = function (e) {
        alert("Hello User");
    }
    btnSayHello.onmousemove = function (e) {
        e = e || window.event;
        e.stopPropagation();
        document.getElementById("mouseCoords").innerText = "Over the button";
    }
}