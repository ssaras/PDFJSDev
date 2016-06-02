/**
 * script.js
 */

var canvas = document.getElementById('annotationCanvas');
var context = canvas.getContext('2d');
var drawing = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function putPoint(e) {
		
	var bx = e.target.getBoundingClientRect().top;
	var by = e.target.getBoundingClientRect().left

	var cx = e.clientX;
	var cy = e.clientY;

	var ox = e.offsetX;
	var oy = e.offsetY;

	var x = ox;//e.offsetX + bx;
	//460
	var y = oy;//e.offsetY; //- by;

	var radius = 5;
	var startAngle = 0;
	var endAngle = Math.PI * 2;
	var antiClockwise = false;
	
	console.log(e);
	console.log(e.target.getBoundingClientRect());		
	console.log('');
	console.log("Bound X: " + bx);
	console.log("Bound Y: " + by);
	console.log('');
	console.log("offset X: " + ox);
	console.log("offset Y: " + oy);
	console.log('');
	console.log("client X: " + cx);
	console.log("client Y: " + cy);
	console.log('');
	console.log('x: ' + x);
	console.log('y: ' + y);
	
	context.beginPath();
	context.arc(x, y, radius, startAngle, endAngle, antiClockwise);
	context.fill();
}
canvas.addEventListener('mousedown', putPoint);

$(document).ready(function() {
	var viewer = $('#viewer');
	console.log(viewer);
	viewer.each(function() {
		console.log($(this));
	});
});
