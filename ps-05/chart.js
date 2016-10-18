var canvas = document.getElementById('eyeChart');
var context = canvas.getContext('2d');

console.log(context);

var width = 500;
var height = 500;

var x = 0;
var y = 0;
var gridSize = 20;

for (x = 0; x <= width; x = x + gridSize) {
  for (y = 0; y <= height; y = y + gridSize) {
    context.fillStyle = "#330033";
    context.font = "15px Trirong";
    context.fillText('E', x, y);
  }
}
