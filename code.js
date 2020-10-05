var canvas;
var canvasContext;
var x = 0;
var y = 0;
var xDir = 5;
var yDir = 5;
var paddle1Y = 250;
const PADDLE_HEIGHT = 100;

window.onload = function () {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  var fps = 60;
  setInterval(function () {
    moveEverything();
    drawEverything();
  }, 1000 / fps);
  canvas.addEventListener("mousemove", function (evt) {
    var mousePos = calculateMousePos(evt);
    paddle1Y = mousePos.y - PADDLE_HEIGHT / 2;
  });
};

function calculateMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY,
  };
}

function moveEverything() {
  if (x > canvas.clientWidth || x < 0) xDir *= -1;
  x += xDir;
  if (y > canvas.clientHeight || y < 0) yDir *= -1;
  y += yDir;
}

function drawEverything() {
  colorRect(0, 0, canvas.clientWidth, canvas.clientHeight, "black"); // draw playing field
  colorRect(0, paddle1Y, 10, PADDLE_HEIGHT, "white"); //draw paddle
  colorCirc(x, y, 10, "white"); // draw ball
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
