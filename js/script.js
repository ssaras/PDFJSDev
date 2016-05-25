/**
 * script.js
 */

var canvas = document.getElementById('annotationCanvas');
var context = canvas.getContext('2d');
var drawing = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function putPoint(e) {	
	if(drawing) {
		var x = e.clientX;
		var y = e.clientY;
		var radius = 10;
		var startAngle = 0;
		var endAngle = Math.PI * 2;
		var antiClockwise = false;
		
		console.log(e);
		console.log("offset X: " + e.offsetX);
		console.log("offset Y: " + e.offsetY);
		
		context.beginPath();
		context.arc(x, y, radius, startAngle, endAngle, antiClockwise);
		context.fill();
	}
}

canvas.addEventListener('mouseup', function() {
	drawing = false;
});
canvas.addEventListener('mousedown', function() {
	drawing = true;
});
canvas.addEventListener('mousemove', putPoint);

$(document).ready(function() {
	console.log("jquery loaded");
    console.log("script.js started");
});
