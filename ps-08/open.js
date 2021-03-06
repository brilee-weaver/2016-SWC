var ctx = document.getElementById("sign").getContext('2d');

var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, 40, y);
  });
}

var drawOpen = function() {
  clearScreen();
  drawImage("https://brileeweaver.github.io/2016-SWC/ps-08/open.png", ctx, 0, 0);
};

var beginX = 0;
var beginY = 0;

var velocityX = 0;
var velocityY = 0;

var clearScreen = function() {
  ctx.fillStyle = "hsla(0,10%,0%,0.6)";
  ctx.fillRect(0,0,600,400);
};

var drawDot = function (x, y) {
  clearScreen();
  var size = 20;
  ctx.fillStyle = "red"
  ctx.strokeStyle = ''

  if(beginX > 580 && beginY < 21) {
    velocityX = 0;
    velocityY = 21;
  }
  if (beginX > 580 && beginY > 350) {
    velocityX = -21;
    velocityY = 0;
  }
  if (beginX < 21 && beginY > 350) {
    velocityX = 0;
    velocityY = -21;
  }
  if (beginX < 21 && beginY < 21) {
    velocityY = 0;
    velocityX = 21;
  }

  beginX = beginX + velocityX;
  beginY = beginY + velocityY;
  ctx.fillRect(beginX, beginY, size, size);
};

drawOpen(ctx);

setInterval(drawDot, 100);
setInterval(drawOpen, 1000);
