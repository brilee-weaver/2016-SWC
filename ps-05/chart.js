var canvas = document.getElementById('eyeChart');
var context = canvas.getContext('2d');

console.log(context);

var width = x;
var height = y;

x = 0;
y = 0;

for (x = 0; x <= 50; x++) {
for (y = 0; y <= 50; y++) {
    context.fillRect(x * 50, y * 50, 300, 300);
    context.fillStyle(0,30%,50%,0);
}
}

var letter = "E";
  context.fillStyle = "#330033";
  context.font = "15px Trirong";
  context.fillText("E",100,100);

  context.moveTo(x+25,y+45);
  context.stroke();
