// var canvas;
// var canvasCount = 0;

// function createCanvas(x, y, pageNumber){
// 	var canvasClone = $(".annotationCanvasClone");
// 	var canvas = canvasClone.clone();
// 	canvas.attr('id', );
// }

// function DrawState() {
// 	this.circle = false;
// 	this.rectangle = false;
// 	this.line = false;
// 	this.free = false;
// 	this.select = false;
// }

var AnnotationCanvas = (function AnnotationCanvasClosure() {
	function AnnotationCanvas(settings) {
		this.settings = settings;
		this.x = settings.x;
		this.y = settings.y;
		this.pageNumber = settings.pageNumber;
		this.newCanvas = document.createElement('canvas');
		this.canvasContainer = document.getElementById('annotationCanvasContainer');
	}

	AnnotationCanvas.prototype = {
		echoSettings: function() {
			console.log(this.settings);
		},
		echoX: function newCanvas_echoX() {
			console.log(this.x);
		},
		echoY: function newCanvas_echoY() {
			console.log(this.y);
		},
		echoPageNumber: function newCanvas_echoPageNumber() {
			console.log(this.pageNumber);
		},
        createCanvas: function newCanvas_createCanvas() {
        	var canvasId = 'newCanvasPage_' + this.pageNumber;
        	// var
            this.newCanvas.setAttribute('id', canvasId);
            this.newCanvas.setAttribute('class', 'newCanvas');
            this.canvasContainer.appendChild(this.newCanvas);
            this.newCanvas = new fabric.Canvas('canvasId', { 
				selection: true,
				allowTouchScrolling : true,
				isDrawingMode: true
			});
			this.newCanvas.setDimensions({
				width: this.x,
				height: this.y
			});
        }
	};
	return AnnotationCanvas;
})();
