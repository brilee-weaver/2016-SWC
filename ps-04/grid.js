var canvas = document.getElementById('myGrid');
var ctx = canvas.getContext('2d');


   ctx.fillStyle = "hsla(0,10%,10%,1)";
   ctx.fillRect(0, 0, 20, 20);


  console.log(canvas);
  console.log(ctx);

   var getColor = function(hue, saturation, lightness, alpha) {
     var colorString = "hsla(" +
       hue + ", "
       + saturation + "%,"
       + lightness  + "%,"
       + alpha + ")";
     return colorString;
   };

   var drawSquare = function(x,y,size) {
     ctx.fillRect(x * size, y * size, size , size);
     ctx.strokeStyle = getColor(0, 0, 100, 0.3);
     ctx.strokeRect(x * size, y * size, size, size);
   }


         for(var x = 0 ; x < numX; x++) {
           for(var y = 0 ; y < numY; y++) {
             randomLightness = Math.random() * 100;
             ctx.fillStyle = getColor(0, 0, randomLightness, 0.5);
             drawSquare(x,y,size);
           }
         }
