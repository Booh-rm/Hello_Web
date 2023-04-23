const cells = document.getElementsByTagName('td');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let moves = 0;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked);
}

resetButton.addEventListener('click', resetGame);

function cellClicked() {
  if (this.innerHTML === '') {
    this.innerHTML = currentPlayer;
    this.classList.add(currentPlayer);
    moves++;
    if (checkWin()) {
      message.innerHTML = `${currentPlayer} wins!`;
      disableCells();
    } else if (moves === 9) {
      message.innerHTML = "It's a tie!";
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      message.innerHTML = `${currentPlayer}'s turn`;
    }
  }
}

function checkWin() {
  for (let i = 0; i < winPatterns.length; i++) {
    let pattern = winPatterns[i];
    if (
      cells[pattern[0]].innerHTML === currentPlayer &&
      cells[pattern[1]].innerHTML === currentPlayer &&
      cells[pattern[2]].innerHTML === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function disableCells() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener('click', cellClicked);
  }
}

resetButton.innerHTML = 'Reset';
resetButton.addEventListener('click', resetGame);
document.body.appendChild(resetButton);

function resetGame() {
  currentPlayer = 'X';
  moves = 0;
  message.innerHTML = `${currentPlayer}'s turn`;
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = '';
    cells[i].classList.remove('X', 'O');
    cells[i].addEventListener('click', cellClicked);
  }
}