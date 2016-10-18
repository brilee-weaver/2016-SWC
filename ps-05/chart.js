var canvas = document.getElementById('eyeChart');
var context = canvas.getContext('2d');

console.log(context);

var width = 400;
var height = 500;

var x = 0;
var y = 0;
var gridSize = 20;

for (x = 0; x <= width; x = x + gridSize) {
  for (y = 0; y <= height; y = y + gridSize) {
    context.fillStyle = "black";
    context.font = "15px Trirong";
    context.fillText('E', x, y);
  }
}

//*var getColor = function(hue, saturation, lightness, alpha) {
  //*var colorString = "hsla(" +
    //*hue + ", "
    //*+ saturation + "%,"
    //*+ lightness  + "%,"
    //*+ alpha + ")";
  //*return colorString;
//*};

//*function resizeText(multiplier) {
  //*if (document.canvas.style.fontSize == "") {
    //*document.canvas.style.fontSize = "1.0em";
  //*}
  //*document.canvas.style.fontSize = parseFloat(document.canvas.style.fontSize) + (multiplier * 0.2) + "em";
//*}

//*function resizeText();
