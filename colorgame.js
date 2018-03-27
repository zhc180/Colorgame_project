var numSquares = 6;
var colors = generateColors(numSquares);
var pickedColor = colors[Math.floor(Math.random() * colors.length)];
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var restartButton = document.getElementById("reset");
var message = document.querySelector("#message");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateColors(numSquares);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateColors(numSquares);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

restartButton.addEventListener("click", function() {
    colors = generateColors(numSquares);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323"
});

for(var i=0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor + "\n" + pickedColor);
        if (clickedColor === pickedColor) {
            //message.textContent = "Correct!";
            restartButton.textContent = "Play Again?";
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
