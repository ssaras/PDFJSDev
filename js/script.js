/**
 * script.js
 */

var canvas = document.getElementById('annotationCanvas');
var context = canvas.getContext('2d');
var drawing = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function putPoint(e) {	
	// if(drawing) {
		
		var boundX = e.target.getBoundingClientRect().top;
		var boundY = e.target.getBoundingClientRect().left

		var x = e.offsetX + boundX;
		var y =   460;//e.offsetY; //- boundY;

		var radius = 5;
		var startAngle = 0;
		var endAngle = Math.PI * 2;
		var antiClockwise = false;
		
		console.log(e);
		console.log(e.target.getBoundingClientRect());		
		console.log('');
		console.log("Bound X: " + boundX);
		console.log("Bound Y: " + boundY);
		console.log('');
		console.log("offset X: " + e.offsetX);
		console.log("offset Y: " + e.offsetY);
		console.log('');
		console.log("client X: " + e.clientX);
		console.log("client Y: " + e.clientY);
		console.log('');
		console.log('x: ' + x);
		console.log('y: ' + y);
		
		context.beginPath();
		context.arc(x, y, radius, startAngle, endAngle, antiClockwise);
		context.fill();
	// }
}

// canvas.addEventListener('mouseup', function() {
// 	drawing = false;
// });
// canvas.addEventListener('mousedown', function() {
// 	drawing = true;
// });
canvas.addEventListener('mousedown', putPoint);

$(document).ready(function() {
	// console.log("jquery loaded");
 //    console.log("script.js started");
});
