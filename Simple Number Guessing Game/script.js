const body = document.querySelector('body');

document.addEventListener('mousemove', e => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    body.style.backgroundPositionX = -x * 50 + 25 + '%';
    body.style.backgroundPositionY = -y * 50 + 25 + '%';
});


let secretNumber;

function generateSecretNumber() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
}

function guessNumber() {
    const guess = Number(document.getElementById('guess').value);
    const message = document.getElementById('message');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number.';
        return;
    }

    if (guess === secretNumber) {
        message.innerHTML = '<strong>Congratulations! You guessed the number.</strong>';
        message.className = 'success';
    } else if (guess < secretNumber) {
        message.innerHTML = '<strong>The number is greater.</strong>';
        message.className = 'error';
    } else {
        message.innerHTML = '<strong>The number is less.</strong>';
        message.className = 'error';
    }
}

function resetGame() {
    generateSecretNumber();
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = '';
}

generateSecretNumber();

document.getElementById('submit').addEventListener('click', guessNumber);
document.getElementById('reset').addEventListener('click', resetGame);
