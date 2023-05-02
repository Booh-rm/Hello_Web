var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = '#fff';

var particles = [];
var colors = ['#FFFFFF', '#00FFFF', '#FF00FF', '#FFFF00'];
var currentColorIndex = 0;
var useGradient = false;

function init() {
    for (var i = 0; i < 100; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        particles.push({
            x: x,
            y: y,
            speed: Math.random() * 5 + 1,
            radius: Math.random() * 3 + 2,
            direction: Math.random() * Math.PI * 2,
            color: '#fff'
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (useGradient) {
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, colors[currentColorIndex]);
        gradient.addColorStop(1, '#000');
        ctx.fillStyle = gradient;
    } else {
        ctx.fillStyle = particles[0].color;
    }

    for (var i = 0; i < particles.length; i++) {
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    for (var i = 0; i < particles.length; i++) {
        particles[i].x += particles[i].speed * Math.cos(particles[i].direction);
        particles[i].y += particles[i].speed * Math.sin(particles[i].direction);

        if (particles[i].x < 0 || particles[i].x > canvas.width) {
            particles[i].direction = Math.PI - particles[i].direction;
        }

        if (particles[i].y < 0 || particles[i].y > canvas.height) {
            particles[i].direction = -particles[i].direction;
            particles[i].y = canvas.height;
            particles[i].speed *= 0.5;
        }
    }
}

function changeParticleColor() {
    if (currentColorIndex == colors.length - 1) {
        useGradient = true;
    } else {
        currentColorIndex++;
        for (var i = 0; i < particles.length; i++) {
            particles[i].color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
    }
}

function resetParticleColor() {
    useGradient = false;
    currentColorIndex = 0;
    for (var i = 0; i < particles.length; i++) {
        particles[i].color = '#fff';
    }
}

init();
setInterval(draw, 50);
setInterval(changeParticleColor, 5000);
setTimeout(function () {
    setInterval(resetParticleColor, 5000);
}, 2500);
