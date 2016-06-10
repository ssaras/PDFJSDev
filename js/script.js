/**
 * script.js
 */

var canvas,
	context,
	rect,
	circle,
	line,
	free, 
	origX,
	origY,
	isMouseDown = false,
	drawState = "SELECT"; //RECT, CIRC, LINE, FREE, SELECT

/**
 * NOTE: Initial scd (saved canvas data) is in js/scd.js
 */

function saveCanvas() {
	canvas.isDrawingMode = false;
	drawState = "SELECT";
	scd = JSON.stringify(canvas); // save canvas data
	console.log(scd);
}

function clearCanvas() {
	canvas.clear();
	drawState = "SELECT";
}

function loadCanvas() {
	console.log(scd);
	canvas.loadFromJSON(scd);
	canvas.renderAll();
	drawState = "SELECT";
}

function initRect(o) {	
	var pointer = canvas.getPointer(o.e);
	isMouseDown = true;
	origX = pointer.x;
	origY = pointer.y;
	rect = new fabric.Rect({
		left: pointer.x,
		top: pointer.y,
		strokeWidth: 3,
		stroke: 'red',
		selectable: true,
		opacity : 0.5
  	});
  	canvas.add(rect);
}

function drawRect(o){
	if (!isMouseDown) return;
	var pointer = canvas.getPointer(o.e);
	rect.set({ 
		width: Math.abs(origX - pointer.x),
		height: Math.abs(origY - pointer.y)
	});
	canvas.renderAll();
}

function initCirc(o) {	
	var pointer = canvas.getPointer(o.e);
	isMouseDown = true;
	origX = pointer.x;
	origY = pointer.y;
	circle = new fabric.Circle({
		left: pointer.x,
		top: pointer.y,
		radius: 1,
		strokeWidth: 5,
		stroke: 'red',
		selectable: false,
		originX: 'center', originY: 'center',
		opacity : 0.5
	});
	canvas.add(circle);
}

function drawCirc(o) {
	if (!isMouseDown) return;
	var pointer = canvas.getPointer(o.e);
	circle.set({ radius: Math.abs(origX - pointer.x) });
	canvas.renderAll();
}

function initLine(o) {	
	var pointer = canvas.getPointer(o.e);
	isMouseDown = true;
	origX = pointer.x;
	origY = pointer.y;
	rect = new fabric.Rect({
		left: pointer.x,
		top: pointer.y,
		strokeWidth: 3,
		stroke: 'red',
		selectable: true,
		opacity : 1
  	});
  	canvas.add(rect);
}

function drawLine(o){
	if (!isMouseDown) return;
	var pointer = canvas.getPointer(o.e);
	rect.set({ 
		width: Math.abs(origX - pointer.x),
		height: 1
	});
	canvas.renderAll();
}

function initFree (o) {
	 canvas.isDrawingMode = true;
}

function initSelect() {
	canvas.isDrawingMode = false;
}

function initDrawState (o) {
	canvas.isDrawingMode = false;
	switch (drawState) {
		case "RECT":
			initRect(o);
			break;
		case "CIRC":
			initCirc(o);
			break;
		case "LINE":
			initLine(o);
			break;
		case "FREE":
			initFree(o);
			break;
		case "SELECT":
			initSelect(o);
			break;
		default:
			alert("Please Select a Drawing Method")
			break;
	}
}

function renderDrawState (o) {
	switch (drawState) {
		case "RECT":
			drawRect(o);
			break;
		case "CIRC":
			drawCirc(o);
			break;
		case "LINE":
			drawLine(o);
			break;
		default:
			// statements_def
			break;
	}
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
	    canvasRedraw = document.getElementById('redraw-mode'),
	    canvasSetDrawState = $('.setDrawState');
	
	canvas = new fabric.Canvas('annotationCanvas', { selection: false });
	
	canvas.setDimensions({
		height: h
	});

	canvas.on('mouse:down', function(o){
		initDrawState(o);
	});

	canvas.on('mouse:move', function(o){
		renderDrawState(o);
	});

	canvas.on('mouse:up', function(o){
		isMouseDown = false;
	});

	canvasSave.onclick = function() {
		saveCanvas();
	};
	canvasClear.onclick = function() {
		clearCanvas();
	};
	canvasRedraw.onclick = function() {
		loadCanvas();
	};
	canvasSetDrawState.click(function(e) {
		drawState = $(this).attr('drawState');
		console.log(drawState);
	});
}

