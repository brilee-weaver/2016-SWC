function draw() {
    var canvas = document.getElementById('myGrid');
  if (canvas.getContext) {
      var drawingPad = canvas.getContext('2d');

    drawingPad.fillRect (20%,5%,30,30)
    drawingPad.fillStyle = "hsla(0,0%,50%,1)";
