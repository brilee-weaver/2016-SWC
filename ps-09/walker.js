var ctx = document.getElementById("walker").getContext('2d');

var width = 400;
var height = 400;
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

  var move = function(p) {
    var speed = p.speed;
    var direction = Math.random();
    if (direction < 0.70) {
      beginX = beginX + speed;
    } else if (direction < 0.80) {
      beginX = beginX - speed;
    } else {
      beginX = beginX + speed;
    }
  }

  var wrap = function(point) {
    if (beginX > width) {
      beginX = 0;
    }
    if (beginY > height) {
      beginX = 0;
    }
    if (beginY < 0) {
      beginY = height;
    }
    if (beginX < 0){
      beginX = width;
    }

  };

  ctx.fillRect(beginX, beginY, size, size);
};

drawDot(ctx);

setInterval(drawDot, 100);
