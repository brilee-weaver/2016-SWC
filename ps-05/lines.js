var w = 800;
var h = 500;

var canvas = document.GetElementById('makeLines');
var context = canvas.getContext('2d');

console.log(context);

function drawlines() {
    for (var w = 0; w < 400; x++){
    for (var h = 0; y < 250; y++){
      context.beginPath();
      context.moveTo( w, h);
      context.lineTo( w, h + 20);
      context.stroke();
    }
  }
}

context.strokeStyle = "black";
context.lineWidth = (w-2)/y;
context.stroke();

drawlines ();
