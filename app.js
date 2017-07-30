var score = 0;
var flag = true;
var noOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var scoreDisplay = document.querySelector("#score");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var colorDisplay = document.querySelector("#color-display");




init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}
function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	 	modeButtons[i].addEventListener("click", function(){
	 	score = 0;
	 	scoreDisplay.textContent = score;
	 	modeButtons[0].classList.remove("selected");
	 	modeButtons[1].classList.remove("selected");
	 	this.classList.add("selected");
	 	this.textContent === "Easy" ? noOfSquares = 3: noOfSquares = 6;
	 	reset();
	 });
	}
}
function setUpSquares(){
		for(var i = 0 ; i < squares.length; i++){
		//Add event listeners
		squares[i].addEventListener("click", function(){
		//grab the color of the box clicked
		var clickedColor = this.style.backgroundColor;
		//compare clicked color
		if(clickedColor === pickedColor){
			h1.style.backgroundColor = pickedColor;
			messageDisplay.textContent = "Thats Right!!";
			changeColor(pickedColor);
			resetButton.textContent = "Play again?";
			if(flag) {
			score++;
			flag = false;
			scoreDisplay.textContent = score;
			}
		}
		else{
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = "Try Again!";
		}
		});
	}
}
function reset(){
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	colors = generateRandomColor(noOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	flag = true;
	for(var i = 0 ; i < squares.length; i++){
	// Add initial colors
	if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor= colors[i];
		}
		else{
			squares[i].style.display = 'none';
		}
	}
}

resetButton.addEventListener("click", function(){
	reset();
});

function randomColor(){
	var r = 0, g = 0, b = 0;
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
	var col = "rgb("+r+", "+g+", "+b+")";
	return col;
}
function pickColor(){
	return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColor(size){
	var colorList = [];
	for(var i = 0 ; i < size; i++){
		var color = randomColor();
		colorList.push(color);
	}
	return colorList;
}
function changeColor(color){
	for(var i = 0 ; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
