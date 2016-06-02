/**
 * script.js
 */

 var canvas;
 var context;
 var drawing;
 var pages = 0;

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

function initializeAnnotationCanvas() {	
	console.log("pdfPageCount: " + window.pdfPageCount);
	console.log("pages: " + ++pages);
	canvas = document.getElementById('annotationCanvas');
	context = canvas.getContext('2d');
	drawing = false;

	// var viewer = document.getElementById('viewer');
	var viewer = $('#viewer');
	var page = $('.page');

	var w = viewer.innerWidth();
	var h = page.innerHeight() * window.pdfPageCount;

	
	console.log(page.innerHeight);

	console.log(viewer);
	console.log(w);
	console.log(h);

	canvas.width = w;
	canvas.height = h;

	canvas.addEventListener('mousedown', putPoint);
}

$(document).ready(function() {
	
});
