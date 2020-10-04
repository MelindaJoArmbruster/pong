var canvas;
var canvasContext;
var x = 0;
var y = 0;
var xDir = 5;
var yDir = 5;

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  var fps = 60;
  setInterval(function () {
    moveEverything();
    drawEverything();
  }, 1000 / fps);
};

function moveEverything() {
  if (x > canvas.clientWidth || x < 0) xDir *= -1;
  x += xDir;
  if (y > canvas.clientHeight || y < 0) yDir *= -1;
  y += yDir;
}

function drawEverything() {
  //draw playing field
  colorRect(0, 0, canvas.clientWidth, canvas.clientHeight, "black");

  //draw paddle
  colorRect(0, 300, 10, 100, "white");

  //draw ball
  colorCirc(x, y, 10, "white");
}

function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}

function colorCirc(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}
