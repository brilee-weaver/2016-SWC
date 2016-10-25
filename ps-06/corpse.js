var myCanvas = document.getElementById('corpse');
var ctx = myCanvas.getContext('2d');

var brileeweaver = {};

var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
  });
}

brileeweaver.drawTop = function(ctx) {
  drawImage("https://brileeweaver.github.io/2016-SWC/ps-06/MonsterHead.jpg", ctx, 0, 0);
};

brileeweaver.drawMiddle = function(ctx) {
  drawImage("http://brileeweaver.github.io/2016-SWC/ps-06/MonsterBody.jpg", ctx, 0, 240);
};

brileeweaver.drawBottom = function(ctx) {
  drawImage("https://brileeweaver.github.io/2016-SWC/ps-06/MonsterFeet.jpg", ctx, 0, 480);
};

brileeweaver.drawCorpse = function(ctx) {
  brileeweaver.drawTop(ctx);
  brileeweaver.drawMiddle(ctx);
  brileeweaver.drawBottom(ctx);
};

window.brileeweaver = brileeweaver;

window.brileeweaver.drawCorpse(ctx);
