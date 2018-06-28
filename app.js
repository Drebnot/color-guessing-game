var numSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
    });
}
// figure out how many squares to show
// pick new colors
// pick new pickedColor
// update page to reflect changes

function reset() {
    colors = generateRandomColors(numSquares);
    // pick new random color of Array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messagedisplay.textContent = "";
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add intital colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function () {
        // grab color of picked square
        var clickedColor = this.style.backgroundColor;
        // compare color to clicked color
        if (clickedColor === pickedColor) {
            messagedisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messagedisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    // change each color to match given color
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make and array
    var arr = []
    // repeat num times
    // get random cololor and push into arr
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    // pick a "red" from 0 -255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 -255 
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 -255 
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

