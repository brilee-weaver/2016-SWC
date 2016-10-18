var x = 800;
var y = 500;
var getColor = function(hue, saturation, lightness, alpha) {
  var colorString = "hsla(" +
    hue + ", "
    + saturation + "%,"
    + lightness  + "%,"
    + alpha + ")";
  return colorString;
};

var canvas = document.getElementById('makeLines');
var context = canvas.getContext('2d');

console.log(context);

function drawlines() {
    for (var x = 0; x < 1150; x += 10) {
      context.moveTo(300, x+5);
      context.lineTo(x+6, 75);
    }

  context.strokeStyle = getColor(0,40,10,1);
  context.lineWidth = 1;
  context.stroke();
}

getColor();
drawlines();
