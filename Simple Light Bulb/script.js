const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.fillStyle = "black";
context.beginPath();
context.arc(50, 50, 40, 0, Math.PI * 2);
context.fill();

context.strokeStyle = "yellow";
context.lineWidth = 2;
context.beginPath();
context.moveTo(40, 50);
context.lineTo(60, 50);
context.stroke();

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (isOn) {
        context.fillStyle = "yellow";
        context.beginPath();
        context.arc(50, 50, 40, 0, Math.PI * 2);
        context.fill();
    } else {
        context.fillStyle = "black";
        context.beginPath();
        context.arc(50, 50, 40, 0, Math.PI * 2);
        context.fill();
    }

    isOn = !isOn;

    setTimeout(animate, 500);
}

let isOn = false;
animate();
