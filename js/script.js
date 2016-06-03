/**
 * script.js
 */

 var canvas;
 var context;
 var drawing;

function putPoint(e) {
	var x = e.offsetX;;
	var y = e.offsetY;

	var radius = 5;
	var startAngle = 0;
	var endAngle = Math.PI * 2;
	var antiClockwise = false;
	
	console.log(e);
	console.log(e.target.getBoundingClientRect());
	console.log('x: ' + x);
	console.log('y: ' + y);
	
	context.beginPath();
	context.arc(x, y, radius, startAngle, endAngle, antiClockwise);
	context.fill();
}

function initializeAnnotationCanvas() {		
	var viewer = $('#viewer');
	var page = $('.page');
	var w = viewer.innerWidth();
	var h = page.innerHeight() * window.pdfPageCount;
	
	canvas = document.getElementById('annotationCanvas');
	context = canvas.getContext('2d');
	drawing = false;
	
	console.log("pdfPageCount: " + window.pdfPageCount);
	console.log(viewer);
	console.log(w);
	console.log(h);

	canvas.width = w;
	canvas.height = h;

	canvas.addEventListener('mousedown', putPoint);
}