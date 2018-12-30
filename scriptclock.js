var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.translate(180,180);
setInterval(clock, 1000);
// clock();
function clock() {
    context.lineWidth = 10;
    context.strokeStyle = '#5b5b5b';
    context.beginPath();
    context.arc(0, 0, 160, 0, Math.PI * 2, true);
    context.fillStyle = 'white';
    context.fill();
    context.stroke();
    
    context.beginPath();
    context.lineWidth = 1;
    context.arc(0, 0, 5, 0, Math.PI * 2, true);
    context.fillStyle = 'black';
    context.fill();
    context.stroke();
    
    

    for (var i = 1; i <= 60; i++) {
        if (i <= 12) {
            context.beginPath();
            context.moveTo( 120 * Math.cos(i * Math.PI / 6),  120 * Math.sin(i * Math.PI / 6));
            context.lineTo( 145 * Math.cos(i * Math.PI / 6),  145 * Math.sin(i * Math.PI / 6));
            context.lineWidth = 3;
            context.strokeStyle = '#b3b3b3';
            context.stroke();
            
        }
        if ((6 * i) % 30 != 0) {
            context.beginPath();

            context.moveTo( 135 * Math.cos(i * Math.PI / 30),  135 * Math.sin(i * Math.PI / 30));
            context.lineTo( 145 * Math.cos(i * Math.PI / 30),  145 * Math.sin(i * Math.PI / 30));
            context.lineWidth = 3;
            context.strokeStyle = '#b3b3b3';
            context.stroke();
            

        }
    }
    context.fillStyle = '#5c5c5c';
    context.font = '20px Arial';
    context.fillText(12, -10, -95);
    context.fillStyle = '#5c5c5c';
    context.font = '20px Arial';
    context.fillText(6, -5, 110);
    context.fillStyle = '#5c5c5c';
    context.font = '20px Arial';
    context.fillText(3, 100, 5);
    context.fillStyle = '#5c5c5c';
    context.font = '20px Arial';
    context.fillText(9, -110, 5);
   setTime();
}
function setTime() {
    var date = new Date();
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours();
var pi=Math.PI;
context.rotate(pi/2);

context.rect(50,0,40,40);
context.font = '20px Arial';
context.fillText(date.getDate(),50,0);

context.rotate(-pi/2);


var secondangle=(pi/2)*((seconds/15)-1);
var minuteangle=(pi/2)*((minutes/15)-1);
var hourangle=(pi/2)*((hours/3)+(minutes/180)-1);
    // context.rotate(((Math.PI) / 2) * (seconds / 15 - 1));
    
    context.rotate(secondangle);
    context.fillStyle='orange';
    context.fillRect(0, 0, 100, 1);
    context.rotate(-secondangle);
    
    context.rotate(minuteangle);
    context.fillStyle='#5b5b5b';

    context.fillRect(0, 0, 100, 4);
    context.rotate(-minuteangle);
    context.rotate(hourangle);
    context.fillStyle='#5b5b5b';

    context.fillRect(0, 0, 70, 6);
    context.rotate(-hourangle);



    // context.strokeStyle = 'gray';
    // context.stroke();

    //context.strokeRect(180, 180, 100, 5);
    // context.rotate((Math.PI) / 2 * (minutes / 15 - 1));
    // context.rect(180, 180, 100, 5);
    // context.strokeRect(180, 180, 100, 5);

}