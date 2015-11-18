var stage;

function init() {
  stage = new createjs.Stage("demoCanvas");

//canvas resizing
  demoCanvas.width = window.innerWidth;
  demoCanvas.height = window.innerHeight;

  window.addEventListener('resize', function(){
    console.log('hello');
    demoCanvas.width = window.innerWidth;
    demoCanvas.height = window.innerHeight;
    stage.update();
  }, true);

  // background image

    // var canvas = document.getElementById('demoCanvas');
    // var context = canvas.getContext('2d');
    // var bgImage = new Image();
    // bgImage.src = "images/19.jpeg";
    // bgImage.onload = function(){
    //   var widthRatio = canvas.width / bgImage.width;
    //   var heightRatio = canvas.height / bgImage.height;
    //   var scaleFactor = function(){
    //     if (widthRatio >= heightRatio){
    //       return widthRatio;
    //     } else {
    //       return heightRatio;
    //     }
    //   }
    //   context.save();
    //   context.translate(canvas.width/2, canvas.height/2);
    //   context.scale(scaleFactor(), scaleFactor());
    //   context.translate((-bgImage.width/2),(-bgImage.height)/2);
    //   context.drawImage(bgImage,0,0);
    //   context.restore();
    //
    // }


    var grass = new createjs.Bitmap("images/19.jpeg")

      var imageSize = grass.getBounds();

      // console.log(grass.image.width);
      // console.log(grass.image.height);
      //
      // grass.setTransform(
      // demoCanvas.width / 2 - 6000 / 2, // x=0, The horizontal translation (x position) in pixels
      // demoCanvas.height / 2 - 4000 / 2, //y=0, The vertical translation (y position) in pixels
      // 0.2, //scaleX=1, The horizontal scale, as a percentage of 1
      // 0.2, //scaleY=1, the vertical scale, as a percentage of 1
      // 0, //rotation=0, The rotation, in degrees
      // 0, //skewX=0, The horizontal skew factor
      // 0, //skewY=0, The vertical skew factor
      // 0, //regX=0, The horizontal registration point in pixels
      // 0); //regY=0, The vertical registration point in pixels

    grass.image.onload = function() {
      var widthRatio = demoCanvas.width / grass.image.width;
      var heightRatio = demoCanvas.height / grass.image.height;
      var scaleFactor = function(){
        if (widthRatio >= heightRatio){
          return widthRatio;
        } else {
          return heightRatio;
        }
      }
      var scale = scaleFactor();
      grass.setTransform(0, 0, scale, scale);
      stage.update();

      canvasToJPEG();
    }

  //text stuff

  var txt = new createjs.Text("", "", "");

  // txt.text += ranTitle;

  txt.text += "Text is fairly limited in canvas and EaselJS. It's fine for simple labels, titles, and HUD elements. You are limited to a single style per Text object, and the text is not selectable, editable, or accessible.";

  txt.font = "40px Roboto Condensed";
  txt.color = "#FBFFC9"
  txt.lineWidth = demoCanvas.width/1.8;
  txt.lineHeight = 45;
  txt.textBaseline = "top";
  txt.textAlign = "left";
  txt.y = stage.canvas.height / 4;
  txt.x = stage.canvas.width / 4;
  txt.shadow = new createjs.Shadow("#000",3,3,0);

  stage.addChild(grass);
  stage.addChild(txt);
  stage.update();
}
