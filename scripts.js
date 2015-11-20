$(document).ready(function(){
  $('#reload').click(function(){
    randomThought = true;
    getRandomImage();
  })

  $('#newText').click(function(){
    stage.removeChildAt(stage.children.length-1);
    randomThought = true;
    getRandomThought();
  })

  $('#newBackground').click(function(){
    randomThought = false;
    getRandomImage();
  })

  $('#save').click(function(){
    var canvas = document.getElementById("demoCanvas"), ctx = canvas.getContext("2d");
    canvas.toBlob(function(blob) {
        saveAs(blob, "ILoveShowerThoughtsAndEarthPorns.png");
    });
    return false;
  })

})

var currentRandomThought = "";
var randomThought = true;
getRandomImage();

// /r/ShowerThoughts
function getRandomThought(){
  $.get("https://www.reddit.com/r/Showerthoughts.json", function(data){
      var ran = Math.floor(Math.random()*28);
      currentRandomThought = data.data.children[ran].data.title;
      addTextToCanvas(data.data.children[ran].data.title);

  })
}
var currentRandomImage = "";

// images for background
function getRandomImage(){
  $.get("https://www.reddit.com/user/theyangmaster/m/earthporns.json", function(data){
    var validImages = [];
    // checks for file endings for valid images
    for(var i = 0; i < data.data.children.length; i++) {
      if(data.data.children[i].data.url.match(/\.(jpg|jpeg|png|gif|bmp|tiff)$/i)) {
        validImages.push(data.data.children[i].data.url);
      }
    }
    // chooses a random valid image
    var ran = Math.floor(Math.random()*validImages.length);
    addBackgroundToCanvas(validImages[ran]);
    currentRandomImage  = validImages[ran];
  })
}

////easeljs canvas stuff
var stage;

function init() {
  stage = new createjs.Stage("demoCanvas");

//canvas resizing
  demoCanvas.width = window.innerWidth;
  demoCanvas.height = window.innerHeight;

  window.addEventListener('resize', function(){
    demoCanvas.width = window.innerWidth;
    demoCanvas.height = window.innerHeight;

    // addTextToCanvas(currentRandomThought);
    randomThought = false;
    addBackgroundToCanvas(currentRandomImage);

    stage.update();
  }, true);

}

// background image for canvas with easelJS
function addBackgroundToCanvas(url){
  var grass = new createjs.Bitmap(url);
  var imageSize = grass.getBounds();

  grass.image.crossOrigin = "";

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
    stage.addChild(grass);
    stage.update();
    // calling the below now so that text apears on top of image
    if(randomThought){
      getRandomThought();
    } else {
      addTextToCanvas(currentRandomThought);
    }
  }
}

// text for canvas with easelJS
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

// imgur

$(function(){
  $("#postToImgur").click(function(){
    var imageData = stage.toDataURL(stage);
    localStorage.setItem("imageBase64", imageData);
    var cleanImageData = imageData.replace(/.*,/, '');
    // console.log(imageData);
    // console.log(cleanImageData);
    $.ajax({
        url: "https://api.imgur.com/3/upload",
        type: "POST",
        datatype: "json",
        data: {image: cleanImageData, type:'base64'},
        success: function(data){
          // console.log(data);
          var imgLocation = data.data.link;
          // console.log(imgLocation);
          window.open(imgLocation);
        },
        error: function(data){
          // console.log(data);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Client-ID 53e2cde7435ee97");
        }
    });
  });


});
