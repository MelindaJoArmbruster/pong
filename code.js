var canvas;
var canvasContext;
var x = 0;
var y = 0;
var xDir = 1;
var yDir = 1;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    var fps = 30;
    setInterval(function () {
        moveEverything();
        drawEverything();
    }, 1000/30);
    
  
}

function moveEverything(){
    if (x > canvas.clientWidth) {xDir*=(-1)}
    if (x < 0) {xDir*=(-1)}
    x += xDir;
    if (y > canvas.clientHeight) {yDir*=(-1)}
    if (y < 0) {yDir*=(-1)}
    y += yDir; 
}

function drawEverything() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(x,y,10,100);
    
}