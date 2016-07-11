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
		this.canvasId = 'annotationCanvasPage_' + this.pageNumber;
		this.newCanvas = document.createElement('canvas');
		this.canvasContainer = document.getElementById('annotationCanvasContainer');
	}

	AnnotationCanvas.prototype = {
		constructor: AnnotationCanvas, 
		echoSettings: function AnnotationCanvas_echoSettings() {
			console.log(this.settings);
		},
		echoX: function AnnotationCanvas_echoX() {
			console.log(this.x);
		},
		echoY: function AnnotationCanvas_echoY() {
			console.log(this.y);
		},
		echoPageNumber: function AnnotationCanvas_echoPageNumber() {
			console.log(this.pageNumber);
		},
        createCanvas: function AnnotationCanvas_createCanvas() {
            
            // Initialize and append canvas
            this.newCanvas.setAttribute('id', this.canvasId);
            this.newCanvas.setAttribute('class', 'annotationCanvas');
            this.canvasContainer.appendChild(this.newCanvas);
            
            // Initialize FabricJS
            this.newCanvas = new fabric.Canvas(this.canvasId, { 
				selection: true,
				allowTouchScrolling : true,
				isDrawingMode: true
			});
			
			// Set canvas dimensions
			this.newCanvas.setDimensions({
				width: this.x,
				height: this.y
			});



			// Hey, it worked!
			console.log("Page " + this.pageNumber + " rendered");
        }
	};
	return AnnotationCanvas;
})();
