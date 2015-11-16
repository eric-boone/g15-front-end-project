(function(){
  // create a wrapper around native canvas element (with id="c")
  var canvas = new fabric.Canvas('c');

  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    canvas.setHeight(window.innerHeight);
    canvas.setWidth(window.innerWidth);
    canvas.renderAll();
  }

  resizeCanvas();

})();
