(function(){
  // create a wrapper around native canvas element (with id="c")
  var canvas = new fabric.StaticCanvas('c');

  canvas.setBackgroundImage('images/19.jpeg', canvas.renderAll.bind(canvas), {
    backgroundImageOpacity: 1,
    backgroundImageStretch: false
  });

  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    canvas.setHeight(window.innerHeight);
    canvas.setWidth(window.innerWidth);
    canvas.renderAll();
  }

  resizeCanvas();

  var text = new fabric.Text('Hello World!', {
    fill: 'rgb(120,120,0)',
    left: 0,
    top: 0,
    fontFamily: 'Helvetica',
    fontSize: 40,
    shadow: 'black 2px 2px 2px'
  });
  canvas.add(text);

  // canvas.centerObject(text);

})();
