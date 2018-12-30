var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = canvas.height / 2;
context.translate(radius, radius);
var x=0,y=0;
context.rect(180,180,50,100);

setInterval(drawLine, 1000);
function drawLine(){

    
    context.moveTo(250, 250);
    context.lineTo(210,210);
    context.rotate(20*Math.PI/180);
context.stroke();


}
