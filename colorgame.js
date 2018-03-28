var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var restartButton = document.getElementById("reset");
var message = document.querySelector("#message");
var modeBtns = document.querySelectorAll(".mode");

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
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "easy" ? numSquares = 3:numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for(var i=0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            console.log(clickedColor + "\n" + pickedColor);
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
    for (var i = 0; i < num; i++) {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
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
