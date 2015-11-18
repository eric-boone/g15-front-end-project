var canvasToJPEG = function(){
  var canvas = document.getElementById("demoCanvas");
  var dataURL = canvas.toDataURL("image/jpeg", 1.0);
  var exImage = document.getElementById("exportedImage");
  console.log(dataURL);
}
