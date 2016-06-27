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
		this.x = settings.x;
		this.y = settings.y;
		this.pageNumber = settings.pageNumber;
		this.canvasClone = null;
	}

	AnnotationCanvas.prototype = {
		echoX: function AnnotationCanvas_echoX() {
			console.log(this.x);
		},
		echoY: function AnnotationCanvas_echoY() {
			console.log(this.y);
		},
		echoPageNumber: function AnnotationCanvas_echoPageNumber() {
			console.log(this.pageNumber);
		}
	};
	return AnnotationCanvas;
})();
