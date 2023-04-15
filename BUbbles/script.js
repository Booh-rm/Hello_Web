const container = document.querySelector('.container');

function createBubble() {
	const bubble = document.createElement('div');
	bubble.classList.add('bubble');
	container.appendChild(bubble);

	const size = Math.random() * 200 + 100 + 'px';
	bubble.style.width = size;
	bubble.style.height = size;
	bubble.style.left = Math.random() * 100 + 'vw';

	const hue = Math.floor(Math.random() * 360);
	bubble.style.backgroundColor = 'hsl(' + hue + ', 70%, 50%)';

	setTimeout(() => {
		bubble.remove();
	}, 5000);
}

setInterval(createBubble, 200);
