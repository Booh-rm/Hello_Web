const canvas = document.createElement('pre');
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1';
document.body.appendChild(canvas);

const width = window.innerWidth;
const height = window.innerHeight;

const spaceship = [
    '             *',
    '           / | \\',
    '     *----[ ====== ]----*',
    '           \\ | /',
    '             *'
];

let x = -100;
let y = Math.floor(height / 2) - Math.floor(spaceship.length / 2);

const draw = () => {
    canvas.innerText = '';
    const margin = ' '.repeat(Math.max(0, x));
    for (let i = 0; i < spaceship.length; i++) {
        canvas.innerText += margin + spaceship[i] + '\n';
    }
};

const update = () => {
    x += 0.4;
    if (x > width + 30) {
        x = -100;
    }
};

const loop = () => {
    draw();
    update();
    requestAnimationFrame(loop);
};

loop();