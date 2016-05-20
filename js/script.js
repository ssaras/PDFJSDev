// /**
//  * script.js
//  */

// function renderPDF(file) {
//     console.log("Document to Render: " + file);

//     console.log("PDF.js getting document");
//     PDFJS.getDocument("/pdfs/" + file).then(function(pdf) {

//         console.log("PDF.js getting page");
//         pdf.getPage(1).then(function(page) {

//             var scale = 1.035;
//             var viewport = page.getViewport(scale);
//             var canvas = document.getElementById('pdf-renderer');
//             var context = canvas.getContext('2d');
//             canvas.height = viewport.height;
//             canvas.width = viewport.width;

//             var renderContext = {
//                 canvasContext: context,
//                 viewport: viewport
//             };

//             console.log("PDF.js rendering document to page");
//             try {
//                 page.render(renderContext);
//                 console.log("PDF sucessfully rendered");
//             } catch (e) {
//                 console.log("Error Rendering PDF: " + e);
//             }

//         });
//     })
// }

// $(document).ready(function() {
//     console.log("script.js started");

//     $(".renderPDF").click(function() {
//         renderPDF($(this).html());
//     });
//     // $("#sidebarToggle").click(function() {
//     // 	var outerContainer = $("#outerContainer");
//     //     if (outerContainer.hasClass("sidebarOpen")) {
//     //     	outerContainer.removeClass("sidebarOpen");
//     //     } else {
//     //     	outerContainer.addClass("sidebarOpen");
//     //     }
        
//     // });
// });
