var canvas = document.getElementById("matrix");
var context = canvas.getContext("2d");

var characterSize = 20;

var characters = "abcdefghijklmnopqrstuvwxyz0123456789";

var matrix = [];

for (var i = 0; i < canvas.width / characterSize; i++) {
  matrix[i] = [];
  for (var j = 0; j < canvas.height / characterSize; j++) {
    matrix[i][j] = characters.charAt(Math.floor(Math.random() * characters.length));
  }
}

function draw() {
  context.fillStyle = "rgba(0, 0, 0, 0.1)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "rgba(0, 255, 0, 0.05)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0.05)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
  context.font = characterSize + "px monospace";
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      var character = matrix[i][j];
      context.fillText(character, i * characterSize, j * characterSize);
    }
  }
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (j === 0) {
        matrix[i][j] = characters.charAt(Math.floor(Math.random() * characters.length));
      } else {
        matrix[i][j] = matrix[i][j - 1];
      }
    }
  }
  setTimeout(function() {
    requestAnimationFrame(draw);
  }, 75);
}
draw();
