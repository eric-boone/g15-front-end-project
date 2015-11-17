var stage;

function init() {
  stage = new createjs.Stage("demoCanvas");

  // var grass = new createjs.Bitmap("images/19.jpeg");

  // grass.image.onload = function() {
  //   stage.update();
  // }
  // stage.addChild(grass);

  demoCanvas.width = window.innerWidth;
  demoCanvas.height = window.innerHeight;

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
