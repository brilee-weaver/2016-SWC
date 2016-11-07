var ctx = document.getElementById("sign").getContext('2d');

var beginX = 0;
var beginY = 0;

var clearScreen = function() {
  ctx.fillStyle = "hsla(0,10%,0%,0.6)";
  ctx.fillRect(0,0,600,400);
};
var drawDot = function (x, y) {
  clearScreen();
  var size = 20;
  ctx.fillStyle = "red"
  ctx.strokeStyle = ''
  beginX = beginX + 21;
  if(beginX > 600) {
    beginX = 580;
    beginY = beginY + 21;
  }
  if (beginY > 400) {
    beginY = 380
    beginX = beginX - 21;
  }
  ctx.fillRect(beginX, beginY, size, size);
};

var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
  });
}

brileeweaver.drawSlot = function(ctx) {
  clearScreen();
  drawImage("https://brileeweaver.github.io/2016-SWC/ps-08/open.png", ctx, 0, 0);
};

window.brileeweaver.drawMachine(ctx);

setInterval(drawDot, 100);
