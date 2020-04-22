var nos=6;
var colors=generateRandomColors(nos);

var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisp=document.getElementById("colorDisp");
var messageDisp=document.querySelector("#message");


var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

colorDisp.textContent=pickedColor;


easyBtn.addEventListener("click",function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	nos=3;
	colors=generateRandomColors(nos);
	pickedColor=pickColor();
	colorDisp.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i]
		}
		else
		{
			squares[i].style.display="none";
		}
	}
	// body...
});

hardBtn.addEventListener("click",function() {

	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	nos=6;
	colors=generateRandomColors(nos);
	pickedColor=pickColor();
	colorDisp.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		
			squares[i].style.backgroundColor=colors[i]
			squares[i].style.display="block";
		
	}
	// body...
});


resetButton.addEventListener("click",function() {
	messageDisp.textContent="";
	this.textContent="New Colors!"
	colors=generateRandomColors(nos);
	pickedColor=pickColor();
	colorDisp.textContent=pickedColor;
	for(var i=0; i<squares.length; i++)
{
	squares[i].style.backgroundColor=colors[i];
}
h1.style.backgroundColor="steelblue";
	// body...
})
for(var i=0; i<squares.length; i++)
{
	squares[i].style.backgroundColor=colors[i];


	squares[i].addEventListener("click",function() 
	{
		var clickedColor=this.style.backgroundColor;
		if(pickedColor===clickedColor)
		{
			messageDisp.textContent="Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again?"
			
		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisp.textContent="Try Again!";
		}
	});
}

function changeColor(color) {

	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
	// body...
}

function pickColor() {

	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
	// body...
}



function generateRandomColors(num) {
	var arr=[]

	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}

	return arr;
	// body...
}


function randomColor() {

	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return"rgb("+r+", "+g+", "+b+")";
	// body...
}







