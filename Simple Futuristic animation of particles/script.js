const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let particles = [];

for (let i = 0; i < 100; i++) {
	particles.push({
		x: Math.random() * canvas.width,
		y: Math.random() * canvas.height,
		size: Math.random() * 5,
		speed: Math.random() * 3 + 1,
		color: `hsl(${Math.random() * 360}, 100%, 50%)`
	});
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	particles.forEach(particle => {
		particle.x += particle.speed;
		if (particle.x > canvas.width) {
			particle.x = 0;
		}

		ctx.fillStyle = particle.color;
		ctx.beginPath();
		ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
		ctx.fill();
	});

	requestAnimationFrame(animate);
}

animate();

gsap.to(canvas, {
	backgroundColor: '#000',
	duration: 2,
	repeat: -1,
	yoyo: true
});
