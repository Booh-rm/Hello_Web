const buttons = document.querySelectorAll('.futuristic-button');
const bodyWidth = document.body.clientWidth;
const bodyHeight = document.body.clientHeight;

function randomPosition() {
    return Math.floor(Math.random() * 80) + 10;
}

function moveButton(button) {
    const randomLeft = Math.floor(Math.random() * (bodyWidth - button.offsetWidth));
    const randomTop = Math.floor(Math.random() * (bodyHeight - button.offsetHeight));
    button.style.left = `${randomLeft}px`;
    button.style.top = `${randomTop}px`;
}

buttons.forEach(button => {
    button.style.left = `${randomPosition()}%`;
    button.style.top = `${randomPosition()}%`;

    button.addEventListener('click', () => {
        const currentIndex = Math.floor(Math.random() * buttons.length);
        const randomIndex = Math.floor(Math.random() * buttons.length);
        const currentButton = buttons[currentIndex];
        const randomButton = buttons[randomIndex];
        const currentButtonStyle = window.getComputedStyle(currentButton);
        const randomButtonStyle = window.getComputedStyle(randomButton);
        currentButton.classList.add('clicked');
        setTimeout(() => {
            const currentLeft = currentButton.offsetLeft;
            const currentTop = currentButton.offsetTop;
            const randomLeft = randomButton.offsetLeft;
            const randomTop = randomButton.offsetTop;
            currentButton.style.left = `${randomLeft}px`;
            currentButton.style.top = `${randomTop}px`;
            randomButton.style.left = `${currentLeft}px`;
            randomButton.style.top = `${currentTop}px`;
            currentButton.classList.remove('clicked');
        }, 1000);
    });

    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

setInterval(() => {
    buttons.forEach(button => {
        moveButton(button);
    });
}, 1000);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const colors = ['black-background', 'white-background', 'red-background', 'orange-background', 'yellow-background', 'green-background', 'cyan-background', 'blue-background', 'purple-background', 'pink-background', 'brown-background', 'gray-background', 'silver-background', 'gold-background', 'teal-background', 'lime-background', 'maroon-background', 'navy-background'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.classList.remove(...colors.filter(color => color !== randomColor));
        document.body.classList.add(randomColor);
    });
});
