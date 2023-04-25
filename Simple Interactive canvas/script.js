var canvas = document.getElementById("lienzo");
var context = canvas.getContext("2d");
var drawing = false;
var color = "black";

canvas.addEventListener("mousedown", function (event) {
    drawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
});

canvas.addEventListener("mousemove", function (event) {
    if (drawing) {
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        context.strokeStyle = color;
        context.stroke();
    }
});

canvas.addEventListener("mouseup", function (event) {
    drawing = false;
});

function setColor(c) {
    color = c;
}

function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}