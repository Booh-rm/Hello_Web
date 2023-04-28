const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particleCount = 200;
const particles = [];

function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.radius = Math.random() * 5 + 1;
    this.alpha = Math.random() * 0.5 + 0.5;
}

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x > canvas.width + particle.radius || particle.x < -particle.radius ||
            particle.y > canvas.height + particle.radius || particle.y < -particle.radius) {
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
        }
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
        ctx.fill();
    });
    requestAnimationFrame(animate);
}

animate();