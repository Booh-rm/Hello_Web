const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

const blockSize = 10;
const widthInBlocks = width / blockSize;
const heightInBlocks = height / blockSize;

let score = 0;

const drawBorder = function () {
  ctx.fillStyle = 'Gray';
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(0, 0, blockSize, height);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
};

const drawScore = function () {
  ctx.font = '20px Arial';
  ctx.fillStyle = 'Black';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText('Score: ' + score, blockSize, blockSize);
};

const gameOver = function () {
  clearInterval(intervalId);
  ctx.font = '60px Arial';
  ctx.fillStyle = 'Black';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Game Over', width / 2, height / 2);
};


const directions = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

const theSnake = {
  body: [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }],
  direction: 'right'
};

document.addEventListener('keydown', function (event) {
  const newDirection = directions[event.keyCode];
  if (newDirection !== undefined) {
    theSnake.direction = newDirection;
  }
});

const Apple = function () {
  this.position = { x: 0, y: 0 };

  this.move = function () {
    let newApplePosition = {
      x: Math.floor(Math.random() * (widthInBlocks - 2)) + 1,
      y: Math.floor(Math.random() * (heightInBlocks - 2)) + 1
    };

    let onSnake = true;
    while (onSnake) {
      onSnake = false;
      for (let i = 0; i < theSnake.body.length; i++) {
        if (theSnake.body[i].x === newApplePosition.x && theSnake.body[i].y === newApplePosition.y) {
          onSnake = true;
          newApplePosition = {
            x: Math.floor(Math.random() * (widthInBlocks - 2)) + 1,
            y: Math.floor(Math.random() * (heightInBlocks - 2)) + 1
          };
          break;
        }
      }
    }

    this.position = newApplePosition;
  };


  this.draw = function () {
    const x = this.position.x * blockSize;
    const y = this.position.y * blockSize;
    ctx.fillStyle = 'Red';
    ctx.fillRect(x, y, blockSize, blockSize);
  };

  this.checkCollision = function () {
    if (theSnake.body[0].x === this.position.x && theSnake.body[0].y === this.position.y) {
      score++;
      theSnake.body.push({ x: 0, y: 0 });
      this.move();
    }
  };
  
};

const apple = new Apple();
apple.move();

const moveSnake = function () {
  const head = theSnake.body[0];
  let newHead;


  switch (theSnake.direction) {
    case 'left':
      newHead = { x: head.x - 1, y: head.y };
      break;
    case 'up':
      newHead = { x: head.x, y: head.y - 1 };
      break;
    case 'right':
      newHead = { x: head.x + 1, y: head.y };
      break;
    case 'down':
      newHead = { x: head.x, y: head.y + 1 };
      break;
  }

  theSnake.body.unshift(newHead);
  if (theSnake.body[0].x < 0 || theSnake.body[0].x >= widthInBlocks || theSnake.body[0].y < 0 || theSnake.body[0].y >= heightInBlocks) {
    gameOver();
    return;
  }
  for (let i = 1; i < theSnake.body.length; i++) {
    if (theSnake.body[0].x === theSnake.body[i].x && theSnake.body[0].y === theSnake.body[i].y) {
      gameOver();
      return;
    }
  }

  if (theSnake.body[0].x === apple.position.x && theSnake.body[0].y === apple.position.y) {
    score++;
    theSnake.body.push({ x: 0, y: 0 });
    apple.move();
  }

  theSnake.body.pop();
};

const drawSnake = function () {
  for (let i = 0; i < theSnake.body.length; i++) {
    const x = theSnake.body[i].x * blockSize;
    const y = theSnake.body[i].y * blockSize;
    ctx.fillStyle = 'Black';
    ctx.fillRect(x, y, blockSize, blockSize);
  }
};

const DEFAULT_INTERVAL = 100;

const gameLoop = function () {
  ctx.clearRect(0, 0, width, height);
  drawScore();
  moveSnake();
  apple.checkCollision();
  drawBorder();
  drawSnake();
  apple.draw();
  
};


let intervalId = setInterval(gameLoop, DEFAULT_INTERVAL);

const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', function() {
  score = 0;
  theSnake.body = [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }];
  theSnake.direction = 'right';
  apple.move();
  clearInterval(intervalId);
  intervalId = setInterval(gameLoop, DEFAULT_INTERVAL);
});