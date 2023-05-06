var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, '#6dc7c6');
gradient.addColorStop(1, '#083c5e');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

var starCount = 50;
var starRadius = 2;
var starColor = '#ffffff';
for (var i = 0; i < starCount; i++) {
  var starX = Math.random() * canvas.width;
  var starY = Math.random() * canvas.height * 0.5;
  ctx.fillStyle = starColor;
  ctx.beginPath();
  ctx.arc(starX, starY, starRadius, 0, Math.PI * 2);
  ctx.fill();
}

var moonX = canvas.width * 0.75;
var moonY = canvas.height * 0.25;
var moonRadius = 50;
var moonGradient = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, moonRadius);
moonGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
moonGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
ctx.fillStyle = moonGradient;
ctx.beginPath();
ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
ctx.fill();

var mountainCount = 5;
var mountainHeight = canvas.height * 0.25;
var mountainColor = '#29384e';
var mountainWidth = canvas.width / mountainCount;
for (var i = 0; i < mountainCount; i++) {
  var mountainX = i * mountainWidth;
  var mountainY = canvas.height * 0.5 - mountainHeight;
  ctx.fillStyle = mountainColor;
  ctx.beginPath();
  ctx.moveTo(mountainX, canvas.height);
  ctx.lineTo(mountainX + mountainWidth * 0.5, mountainY);
  ctx.lineTo(mountainX + mountainWidth, canvas.height);
  ctx.fill();
}

var waterGradient = ctx.createLinearGradient(0, canvas.height * 0.5, 0, canvas.height);
waterGradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
waterGradient.addColorStop(1, 'rgba(255, 255, 255, 1)');
ctx.fillStyle = waterGradient;
ctx.fillRect(0, canvas.height * 0.5, canvas.width, canvas.height * 0.5);