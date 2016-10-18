var canvas = document.getElementById('lines')
var drawingPad = canvas.getContext('2d')

x = 0;
y = 0;

for (var x = 0; x < 50; x++) {

drawingPad.beginPath();
drawingPad.moveTo(x*50,y*15);
drawingPad.lineTo(x+160,y+500);
drawingPad.stroke();
drawingPad.lineWidth = x*.01;

}
