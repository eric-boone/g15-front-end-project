var stage;

function init() {
  stage = new createjs.Stage("demoCanvas");

  demoCanvas.width = window.innerWidth;
  demoCanvas.height = window.innerHeight;

  var canvas = document.getElementById('demoCanvas');
  var context = canvas.getContext('2d');
  var bgImage = new Image();
  bgImage.src = "images/19.jpeg";
  bgImage.onload = function(){
    context.save();
    //matrix
    // var widthRatio = canvas width / image width
    // var heightRatio = canvas hieght / image height
    // whicher ever is bigger send to scaleFactor

    var widthRatio = canvas.width / bgImage.width;
    var heightRatio = canvas.height / bgImage.height;
    // console.log('hR'+heightRatio);
    // console.log('wR'+widthRatio);
    var scaleFactor = function(){
      if (widthRatio >= heightRatio){
        return widthRatio;
      } else {
        return heightRatio;
      }
    }
    console.log(scaleFactor());

    context.translate(canvas.width/2, canvas.height/2);
    context.scale(scaleFactor, scaleFactor);
    context.translate((-bgImage.width/2),(-bgImage.height)/2);


    context.drawImage(bgImage,0,0);
    context.restore();
  }


  // var grass = new createjs.Bitmap("images/19.jpeg")
  //
  //   var imageSize = grass.getBounds();
  //
  //   grass.setTransform(
  //   demoCanvas.width / 2 - 6000 / 2, // x=0, The horizontal translation (x position) in pixels
  //   demoCanvas.height / 2 - 4000 / 2, //y=0, The vertical translation (y position) in pixels
  //   1, //scaleX=1, The horizontal scale, as a percentage of 1
  //   1, //scaleY=1, the vertical scale, as a percentage of 1
  //   0, //rotation=0, The rotation, in degrees
  //   0, //skewX=0, The horizontal skew factor
  //   0, //skewY=0, The vertical skew factor
  //   0, //regX=0, The horizontal registration point in pixels
  //   0); //regY=0, The vertical registration point in pixels
  //
  //   grass.scaleX
  //
  //   console.log(grass.x);
  //
  // grass.image.onload = function() {
  //   stage.update();
  // }
  // stage.addChild(grass);

  window.addEventListener('resize', function(){
    console.log('hello');
    demoCanvas.width = window.innerWidth;
    demoCanvas.height = window.innerHeight;

      stage.update();


  }, true);


  ///Text only below here

  var txt = new createjs.Text("", "18px Arial", "#111");

  txt.text = "This wrapped multi-line text is rendered using the Text Object.\n\n";

  txt.text += "Text is fairly limited in canvas and EaselJS. It's fine for simple labels, titles, and HUD elements. You are limited to a single style per Text object, and the text is not selectable, editable, or accessible.\n\n";

  txt.text += "For more complicated text, you can use DOMElement to include HTML text in your display list. It's also worth taking a look at BitmapText for visually rich text for games or similar scenarios.\n\n";

  txt.text += "Text line heights & bounds are approximated, but accurate enough for most uses (for example, the grey background on this text).";

  txt.lineWidth = 550;
	txt.lineHeight = 22;
	txt.textBaseline = "top";
	txt.textAlign = "left";
	txt.y = 50;
	txt.x = (stage.canvas.width - 550) / 2;

  stage.addChild(txt);

  stage.update();

}
