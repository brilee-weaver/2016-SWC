var canvas = document.getElementById('makeLines');
var context = canvas.getContext('2d');

console.log(context);

var width = 800;
var height = 500;

var getColor = function(hue, saturation, lightness, alpha) {
  var colorString = "hsla(" +
    hue + ", "
    + saturation + "%,"
    + lightness  + "%,"
    + alpha + ")";
  return colorString;
};

var x = 0;
var y = 0;

function drawlines() {
    for (var x = 0; x <= width; x = x) {
      context.strokeStyle = getColor(x*20,30,10,1);
      context.lineWidth = (x*2)/1000;
      context.moveTo(300, x+5);
      context.lineTo(x+6, 75);

    }

  context.stroke();
}

getColor();
drawlines();
