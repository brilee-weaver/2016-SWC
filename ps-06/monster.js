var canvas = document.getElementById('myMonster');
var ctx = canvas.getContext('2d');

var brileeweaver = {};

var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
  });
}

brileeweaver.drawHead = function(ctx) {
  drawImage('//brileeweaver.github.io/2016-SWC/ps-06/MonsterHead.jpg', ctx, 0, 0);
};

brileeweaver.drawBody = function(ctx) {
  drawImage('//brileeweaver.github.io/2016-SWC/ps-06/MonsterBody.jpg', ctx, 0, 0);
};

brileeweaver.drawFeet = function(ctx) {
  drawImage('//brileeweaver.github.io/2016-SWC/ps-06/MonsterFeet.jpg', ctx, 0, 0);
};

brileeweaver.drawCorpse = function(ctx) {
  brileeweaver.drawHead(ctx);
  brileeweaver.drawBody(ctx);
  brileeweaver.drawFeet(ctx);
};

window.brileeweaver = brileeweaver;
