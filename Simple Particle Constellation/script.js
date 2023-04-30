const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particleCount = 100;
const particles = [];

function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speed = Math.random() * 2 + 1;
    this.angle = Math.random() * 360;
}

for (let i = 0; i < particleCount; i++) {
    const x = canvas.width / 2 + Math.random() * 200 - 100;
    const y = canvas.height / 2 + Math.random() * 200 - 100;
    const radius = Math.random() * 3 + 1;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    particles.push(new Particle(x, y, radius, color));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
        const radians = particle.angle * Math.PI / 180;
        const x = particle.x + Math.cos(radians) * particle.speed;
        const y = particle.y + Math.sin(radians) * particle.speed;
        particle.x = x;
        particle.y = y;
        particle.angle += 2;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
    });
    requestAnimationFrame(animate);
}

animate();