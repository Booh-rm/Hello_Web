const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 50;
let y = 50;
let dx = 2;
let dy = 2;
let color = '#FFA500';

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    if (x + dx > canvas.width - 30 || x + dx < 30) {
        dx = -dx;
        color = getRandomColor();
    }
    if (y + dy > canvas.height - 30 || y + dy < 30) {
        dy = -dy;
        color = getRandomColor();
    }
    x += dx;
    y += dy;
}

setInterval(animate, 10);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}