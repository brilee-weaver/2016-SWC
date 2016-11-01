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

brileeweaver.drawSlot = function(ctx) {
  drawImage("https://brileeweaver.github.io/2016-SWC/ps-07/machine.png", ctx, 0, 0);
};


brileeweaver.drawMachine = function(ctx) {
  brileeweaver.drawSlot(ctx);
};

brileeweaver.drawLight = function(ctx) {
    drawImage("https://brileeweaver.github.io/2016-SWC/ps-07/green_light.png", ctx, 240, 0);
}

brileeweaver.drawGreen = function(ctx) {
  brileeweaver.drawLight(ctx);
}

brileeweaver.drawChange = function(ctx) {
  drawImage("https://brileeweaver.github.io/2016-SWC/ps-07/change.png", ctx, 180, 510);
}

brileeweaver.drawWinnings = function(ctx){
  brileeweaver.drawChange(ctx);
}


window.brileeweaver = brileeweaver;

window.brileeweaver.drawMachine(ctx);

window.brileeweaver.drawGreen(ctx);

window.brileeweaver.drawWinnings(ctx);
