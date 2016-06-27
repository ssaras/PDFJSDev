function LOG_PDFViewerApplication(PDFViewerApplication) {
	console.log("PDFViewerApplication:\n");
    console.log("---------------------");
    console.log(PDFViewerApplication);
}
function LOG_PDFJS(PDFJS) {
	console.log("PDFJS:\n");  
    console.log("------");
    console.log(PDFJS);
}
function LOG_PDFPageRendered(pageWidth, pageHeight, pageNumber){
	console.log(" page rendered ");
	  console.log("---------------");
	  console.log("x: " + pageWidth);
	  console.log("y: " + pageHeight);
	  console.log(pageNumber);
}


