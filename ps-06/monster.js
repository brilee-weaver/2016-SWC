var canvas = document.getElementById('myMonster');
var ctx = canvas.getContext('2d');

var brileeweaver = {};

brileeweaver.drawHead = function(ctx) {
  drawImage('//brileeweaver.github.io/2016-SWC/ps-06/MonsterHead.jpg', ctx, 0, 0);
};

brileeweaver.drawBody = function(ctx) {
  drawImage('//brileeweaver.github.io/2016-SWC/ps-06/MonsterHead.jpg', ctx, 0, 0);
};

brileeweaver.drawFeet = function(ctx) {
  drawImage('//brileeweaver.github.io/2016-SWC/ps-06/MonsterHead.jpg', ctx, 0, 0);
};

brileeweaver.drawCorpse = function(ctx) {
  brileeweaver.drawHead(ctx);
  brileeweaver.drawBody(ctx);
  brileeweaver.drawFeet(ctx);
};

window.brileeweaver = brileeweaver;
