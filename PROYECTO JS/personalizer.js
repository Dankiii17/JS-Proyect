function toggleMenu() {
    var menu = document.getElementById("menu");
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = "red";
}

function changeBackgroundColor2() {
    document.body.style.backgroundColor = "lightblue";
}

function changeBackgroundColor3() {
    document.body.style.backgroundColor = "green";
}

function changeBackgroundColor4() {
    document.body.style.backgroundColor = "pink";
}

function changeBackgroundColor5() {
    document.body.style.backgroundColor = "yellow";
}

function changeFontSize(size) {
    var elements = document.querySelectorAll(".text");
    elements.forEach(function(element) {
        element.style.fontSize = size + "px";
    });
}

function changeFont(font) {
    var elements = document.querySelectorAll(".text");
    elements.forEach(function(element) {
        element.style.fontFamily = font;
    });
}
