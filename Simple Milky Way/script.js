const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const starCount = 200;
const stars = [];

function Star(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
}

for (let i = 0; i < starCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2 + 1;
    const color = `rgba(255, 255, 255, ${Math.random()})`;
    stars.push(new Star(x, y, size, color));
}

function drawStars() {
    stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
    });
}

function drawCore() {
    const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 4
    );
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 4, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
}

let rotation = 0;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawCore();
    rotation += 0.001;
    canvas.style.transform = `rotate(${rotation}rad)`;
    requestAnimationFrame(animate);
}

animate();