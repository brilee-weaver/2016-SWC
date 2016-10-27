var canvas = document.getElementById('slot');
var ctx = canvas.getContext('2d');


var brileeweaver = {};

var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
  });
}

brileeweaver.drawPic = function(ctx) {
  drawImage("https://brileeweaver.github.io/2016-SWC/ps-07/Slot.png", ctx, 0, 0);
};


brileeweaver.drawSlot = function(ctx) {
  brileeweaver.drawPic(ctx);
};

window.brileeweaver = brileeweaver;

window.brileeweaver.drawSlot(ctx);
