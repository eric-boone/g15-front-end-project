$(document).ready(function(){
  $('#reload').click(function(){
    window.location.reload();
  })

  $.get("https://www.reddit.com/r/Showerthoughts.json", function(data){
      var ran = Math.floor(Math.random()*28);
      addTextToCanvas(data.data.children[ran].data.title);
  })

})

////easeljs canvas magic
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

    // var grass = new createjs.Bitmap("https://source.unsplash.com/random")
    var grass = new createjs.Bitmap("images/19.jpeg")

      var imageSize = grass.getBounds();

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

  stage.addChild(grass);
  stage.update();
}

function addTextToCanvas(text){
  var txt = new createjs.Text("", "", "");

  txt.text += text;

  txt.font = "75px Roboto Condensed";
  txt.color = "#FBFFC9"
  txt.lineWidth = demoCanvas.width/1.5;
  txt.lineHeight = 75;
  txt.textBaseline = "top";
  txt.textAlign = "left";
  txt.y = stage.canvas.height / 4;
  txt.x = stage.canvas.width / 5;
  txt.shadow = new createjs.Shadow("#000",3,3,0);

  stage.addChild(txt);
  stage.update();
}
