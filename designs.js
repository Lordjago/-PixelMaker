// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
//Problem: No user interaction, causes no change to application
//Solution: when user interacts, cause changes appropriately
var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");
var canvas = $("canvas");	
var lastEvent;
var mouseDown = false;

//When clicking on control list items
$(".controls").on("click","li",function(){
	//Deselect sibling elements
	$(this).siblings().removeClass("selected");
	//Select clicked element
	$(this).addClass("selected");
	//cache current color
	color = $(this).css("background-color");
})

//When new color is pressed
// $("#revealColorSelect").click(function(){
// 	//Show color select or hide the color select
// 	changeColor();
// 	$("#colorSelect").toggle();	
// });
//update the new color span
function changeColor(){
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#newColor").css("background-color", "rgb("+r+","+g+","+b+")");
}

//When color sliders change
$("input[type=range]").change(changeColor);

//when add color is pressed
$("#addNewColor").click(function(){
	//Append the color to the controls ul
	var newColor = $("<li></li>");
	newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append(newColor);
	//Select the new color
	newColor.click();
});

//On mouse events on the canvas
canvas.mousedown(function(e){
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e){
	// draw line
	if(mouseDown){
		context.beginPath();// to start a path
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);// where to start the path
		context.lineTo(e.offsetX, e.offsetY);// to draw line 
		context.strokeStyle = color;
		context.stroke();//to draw a line of stroke
		lastEvent = e;
}
}).mouseup(function(){
	mouseDown = false;
}).mouseleave(function(){
	 canvas.mouseup();
});
	//document.getElementByTagName("canvas")[0] == $("canvas")[0]
	//thee first being the javascript code and the later is JQuery
	// to draw codes
// Your code goes here!

}
