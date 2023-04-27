const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const restartBtn = document.getElementById('restartBtn');

restartBtn.addEventListener('click', restartGame);


class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.speed = 5;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    checkCollision(enemy) {
        if (this.x < enemy.x + enemy.width && this.x + this.width > enemy.x && this.y < enemy.y + enemy.height && this.y + this.height > enemy.y) {
            return true;
        }
        return false;
    }
}

class Enemy {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.speed = 3;
        this.color = color;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        this.y += this.speed;
    }

}

const player = new Player(250, 450);
const enemies = [];
let score = 0;
let win = false;
let gameOver = false;

const enemyGenerator = setInterval(() => {
    const randomX = Math.floor(Math.random() * 470);
    const enemy = new Enemy(randomX, 0, 'blue');
    enemies.push(enemy);
    if (score >= 6) {
        clearInterval(enemyGenerator);
        enemyGenerator = null;
    }
}, 2000);

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    if (player.x < 0) {
        player.x = 0;
    }
    if (player.x > canvas.width - player.width) {
        player.x = canvas.width - player.width;
    }
    if (player.y < 0) {
        player.y = 0;
    }
    if (player.y > canvas.height - player.height) {
        player.y = canvas.height - player.height;
    }

    enemies.forEach(enemy => {
        enemy.draw();
        enemy.move();
        if (enemy.y > canvas.height) {
            enemies.splice(enemies.indexOf(enemy), 1);
        }
        if (player.checkCollision(enemy)) {
            score++;
            enemies.splice(enemies.indexOf(enemy), 1);
        }
    });

    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText(`Score: ${score}`, 10, 40);

    if (score >= 4 && !win) {
        win = true;
        ctx.fillStyle = 'green';
        ctx.font = '50px Arial';
        ctx.fillText('You Win!', canvas.width / 2 - 100, canvas.height / 2);
    }
    if (!win) {
        requestAnimationFrame(gameLoop);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'green';
        ctx.font = '50px Arial';
        ctx.fillText('You Win!', canvas.width / 2 - 100, canvas.height / 2);
    }
}

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowLeft':
            player.moveLeft();
            break;
        case 'ArrowRight':
            player.moveRight();
            break;
        case 'ArrowUp':
            player.moveUp();
            break;
        case 'ArrowDown':
            player.moveDown();
            break;
    }
});

gameLoop();

function restartGame() {
    player.x = 250;
    player.y = 450;
    score = 0;
    win = false;
    gameOver = false;
    gameLoop();
}
