/**
 * script.js
 */

 var canvas;
 var context;
 var rect, circle, isDown, origX, origY;

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

function drawRect() {
	 // body...  
}

function initializeAnnotationCanvas() {
	
	/************************
	 * Initialization Code
	 ***********************/
	var viewer = $('#viewer'),
		page = $('.page');

	var w = viewer.innerWidth(),
		h = page.innerHeight() * window.pdfPageCount;

	var canvasSave = document.getElementById('save-mode'),
		canvasClear = document.getElementById('clear-mode'),
	    canvasRedraw = document.getElementById('redraw-mode');
	    canvasDrawRect = document.getElementById('draw-rect');

	var cdc = ''; // store canvas data	

	canvas = new fabric.Canvas('annotationCanvas', { selection: false });
	
	canvas.setDimensions({
		width: w,
		height: h
	});

	canvas.on('mouse:down', function(o){
		isDown = true;
		var pointer = canvas.getPointer(o.e);
		origX = pointer.x;
		origY = pointer.y;
		console.log(origX);
		console.log(origY);
		rect = new fabric.Rect({
			left: pointer.x,
			top: pointer.y,
			strokeWidth: 3,
			stroke: 'red',
			selectable: true,
			opacity : 0.5
	  	});
	  	canvas.add(rect);
	});

	canvas.on('mouse:move', function(o){
		if (!isDown) return;
		var pointer = canvas.getPointer(o.e);
		rect.set({ 
			width: Math.abs(origX - pointer.x),
			height: Math.abs(origY - pointer.y)
		});
		canvas.renderAll();
	});

	canvas.on('mouse:up', function(o){
		isDown = false;
	});

	// ------------------------------------------ //
			
	// canvas.isDrawingMode = true;
	canvasSave.onclick = function() {
		canvas.isDrawingMode = false;
		cdc = JSON.stringify(canvas);
		console.log(cdc);
	};
	canvasClear.onclick = function() {
		canvas.clear();
	};
	canvasRedraw.onclick = function() {
		canvas.loadFromJSON(cdc);
		canvas.renderAll();
	};


}

