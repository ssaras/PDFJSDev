// var Annotator = require("annotator");

// $ = Annotator.Util.$;

// $(function() {
// 	var ann = new Annotator(document.body);
// }());

var app = new annotator.App();
app.include(annotator.ui.main);
app.include(annotator.storage.http);
app.start();