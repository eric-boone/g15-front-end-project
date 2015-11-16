var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// ctx.fillStyle = "green";
// ctx.fillRect(10, 10, 100, 100);



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var background = new Image();
background.src = "http://showerthoughts.eboone.info/images/19.jpeg";
// background.repeat = "no-repeat";
// background.position = "center center";
// background.attachment = "fixed";
// background.size = "cover";

background.onload = function(){
  ctx.drawImage(background,0,0);
}




// below from https://jsfiddle.net/jaredwilli/qFuDr/
// useing mootools
// (function(){
//   var canvas = document.getElementById('canvas');
//   var context = canvas.getContext('2d');
//
//   window.addEventListener('resize', resizeCanvas, false);
//
//   function resizeCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//
//     /* DRAW BELOW HERE */
//     // ctx.fillStyle = "green";
//     // ctx.fillRect(10, 10, 100, 100);
//     /* DRAW ABOVE HERE */
//     drawStuff();
//   }
//   resizeCanvas();
//
//   function drawStuff() {
//     /* DRAW BELOW HERE */
//     ctx.fillStyle = "green";
//     ctx.fillRect(10, 10, 100, 100);
//     /* DRAW ABOVE HERE */
//   }
// })();
