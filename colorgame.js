var numSquares = 6;
var colors = [];
var pickedColor;
var hardMode = false;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var restartButton = document.getElementById("reset");
var message = document.querySelector("#message");
var modeBtns = document.querySelectorAll(".mode");
var container = document.querySelector("#container");

init();

function init() {
    setupModeBtns();
    setupSquares();
    setupRestartBtn();
    reset();
}

function setupModeBtns() {
    for (var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function() {
            for (var j = 0; j < modeBtns.length; j++) {
                modeBtns[j].classList.remove("selected");
            }
            this.classList.add("selected");
            hardMode = false;
            if (this.textContent === "easy") {
                container.style.maxWidth = "800px";
                numSquares = 3;
            } else if (this.textContent === "medium") {
                container.style.maxWidth = "600px";
                numSquares = 6;
            } else {
                container.style.maxWidth = "400px";
                numSquares = 9;
                if (this.textContent === "expert") {
                    hardMode = true;
                }
            }
            reset();
        });
    }
}

function setupSquares() {
    for(var i=0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                message.textContent = "Correct!";
                restartButton.textContent = "Play Again?";
                changeColorsAll(clickedColor);
            } else {
                message.textContent = "Try again!";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

function setupRestartBtn() {
    restartButton.addEventListener("click", function() {
        reset();
    });
}

function generateColors(num) {
    var arr = []
    var rFloor = 0;
    var gFloor = 0;
    var bFloor = 0;
    var range = 256;
    if (hardMode == true) {
        rFloor = Math.random() * 156;
        gFloor = Math.random() * 156;
        bFloor = Math.random() * 156;
        range = 10;
    }
    for (var i = 0; i < num; i++) {
        r = Math.floor(rFloor + Math.random() * range);
        g = Math.floor(gFloor + Math.random() * range);
        b = Math.floor(bFloor + Math.random() * range);
        arr[i] = "rgb(" + r + ", " + g + ", " + b + ")";
    }
    return arr;
}

function reset() {
    colors = generateColors(numSquares);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = pickedColor;
    message.textContent = "";
    restartButton.textContent = "New game";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue"
}

function changeColorsAll(color) {
    h1.style.backgroundColor = color;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
