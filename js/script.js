/**
 * script.js
 */

var canvas = document.getElementById('annotationCanvas');
var context = canvas.getContext('2d');
var radius = 10;
var circle = Math.PI * 2;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function putPoint(e) {
	var xOffset = e.clientX + document.documentElement.scrollLeft;
	var yOffset = e.clientY + document.documentElement.scrollTop;
	
	console.log(e);
	console.log("offset X: " + e.offsetX);
	console.log("offset Y: " + e.offsetY);
	
	context.beginPath();
	context.arc(xOffset, yOffset, radius, 0, circle, false);
	context.fill();
}

canvas.addEventListener('mousedown', putPoint);

$(document).ready(function() {
	console.log("jquery loaded");
    console.log("script.js started");

    // $("#print").click(function() {
    //     alert("hi");
    //     $(".mainNav").hide();
    //     $(".fileExplorer").hide();
    // });
    
});
