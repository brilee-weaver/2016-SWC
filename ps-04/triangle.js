var canvas = document.getElementById('triangle')
var drawingPad = canvas.getContext('2d')




drawTriangle (20,20,10);
function drawTriangle (gridX, gridY, baseSize) {

  var height = baseSize;
  var leftSide = baseSize * gridX;
  var halfWidth = (baseSize) / 2;
  var rightSide = leftSide + baseSide;
  var top = height * gridY;
  var bottom = top + height;
  drawingPad.beginPath();
  drawingPad.moveTo(halfWidth, top);
  drawingPad.lineTo(rightSide, bottom);
  drawingPad.lineTo(leftSide, bottom);
  drawingPad.lineTo(halfWidth, top);
  drawingPad.lineWidth = 1;

  drawingPad.stroke(x * size, y * size, size, size);

}
