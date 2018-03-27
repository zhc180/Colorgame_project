var colors = generateColors(6);
var pickedColor = colors[Math.floor(Math.random() * colors.length)];
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
//var message = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i=0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor + "\n" + pickedColor);
        if (clickedColor === pickedColor) {
            message.textContent = "Correct!";
            changeColorsAll(clickedColor);
        } else {
            message.textContent = "Try again!";
            this.style.backgroundColor = "#232323";
        }
    });
}

function generateColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        arr[i] = "rgb(" + r + ", " + g + ", " + b + ")";
    }
    return arr;
}

function changeColorsAll(color) {
    h1.style.backgroundColor = color;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
