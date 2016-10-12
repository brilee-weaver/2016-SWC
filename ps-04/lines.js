var canvas = document.getElementById('lines')
var drawingPad = canvas.getContext('2d')

x = 0;
y = 0;

for (var x = 0; x < 33; x++) {

drawingPad.beginPath();
drawingPad.moveTo(x*20,y*20);
drawingPad.lineTo(x+100,y+500);
drawingPad.stroke();
drawingPad.lineWidth = x-20;

}
