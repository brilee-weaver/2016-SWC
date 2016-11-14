var ctx = document.getElementById("walker").getContext('2d');

var beginX = 0;
var beginY = 0;

var velocityX = 0;
var velocityY = 0;

var clearScreen = function() {
  ctx.fillStyle = "hsla(0,10%,100%,0.6)";
  ctx.fillRect(0,0,400,400);
};

var makeColor = function(hue, sat, light, alph) {
  return "hsla(" + hue + "," + sat + "%," + light + "%," + alph + ")";
};

var drawDot = function (x, y) {
  clearScreen();
  var alph = Math.random();
  var size = Math.random() * 20;
  ctx.fillStyle = makeColor(240, 100, 25, alph);
  ctx.strokeStyle = ''

  if (beginX > 400 && beginY < 0){
    velocityX = Math.random();
    velocityY = Math.random();
  }

  if (beginX > 400 && beginY > 400) {
    velocityX = Math.random();
    velocityY = Math.random();
  }

  if (beginX < 0 && beginY < 400) {
    velocityX = Math.random() * -15;
    velocityY = Math.random();
  }

  if (beginX < 0 && beginY > 0) {
    velocityX = Math.random();
    velocityY = Math.random();
  }

  beginX = Math.random();
  beginY = Math.random();
  ctx.fillRect(beginX, beginY, size, size);
};

drawDot(ctx);

setInterval(drawDot, 100);
