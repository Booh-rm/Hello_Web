const text = document.querySelector('.text');
const container = document.querySelector('.container');

const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A'];

let currentColorIndex = 0;

function changeBackgroundColor() {
    const body = document.querySelector('body');
    const newColor = colors[currentColorIndex];

    body.style.transition = 'background-color 1s ease-in-out';
    body.style.backgroundColor = newColor;

    currentColorIndex = (currentColorIndex + 1) % colors.length;

    setTimeout(changeBackgroundColor, 3000);
}

changeBackgroundColor();

container.addEventListener('mousemove', e => {
    const x = e.clientX - container.offsetLeft;
    const y = e.clientY - container.offsetTop;

    text.style.transform = `translate(${-x}px, ${-y}px)`;
});
