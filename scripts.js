var stage;

function init() {
  // create the canvas
  stage = new createjs.Stage("demoCanvas");

  // background image, function is below
  createBackground();

  // Ticker for resizeing canvas, the function is below
  createjs.Ticker.addListener(this);

  // canvs resize to fit the screen, the function is below
  window.addEventListener('resize', resize, false);


  // // image background
  // var grass = new createjs.Bitmap("https://c1.staticflickr.com/3/2667/3914436800_db572b68e0_b.jpg");
  // // the image doesnt show up without this
  // grass.image.onload = function() {
  //   stage.update();
  // }
  // stage.addChild(grass);

  // text variable and styles
  var txt = new createjs.Text("", "18px Arial", "#111");

  txt.text = "This wrapped multi-line text is rendered using the Text Object.\n\n";

  txt.text += "Text is fairly limited in canvas and EaselJS. It's fine for simple labels, titles, and HUD elements. You are limited to a single style per Text object, and the text is not selectable, editable, or accessible.\n\n";

  txt.text += "For more complicated text, you can use DOMElement to include HTML text in your display list. It's also worth taking a look at BitmapText for visually rich text for games or similar scenarios.\n\n";

  txt.text += "Text line heights & bounds are approximated, but accurate enough for most uses (for example, the grey background on this text).";

  // text formating stuff, lineWidth is for the word wrap
  txt.lineWidth = 550;
	txt.lineHeight = 22;
	txt.textBaseline = "top";
	txt.textAlign = "left";
	txt.y = 50;
	txt.x = (stage.canvas.width - 550) / 2;

  stage.addChild(txt);

  resize();
}

// tick function
function tick() {
  stage.update();
}

// resize function
function resize() {
  stage.canvas.width = window.innerWidth;
  stage.canvas.height = window.innerHeight;

  

}

// background function
function createBackground() {
  bg = new createjs.Bitmap("https://c1.staticflickr.com/3/2667/3914436800_db572b68e0_b.jpg");
  bg.x = stage.canvas.width / 2;
  bg.y =stage.canvas.height / 2;
  stage.addChild(bg);
}
