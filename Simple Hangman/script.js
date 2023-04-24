const words = ['programacion', 'javascript', 'desarrollo', 'tecnologia', 'computadora'];
const chosenWord = words[Math.floor(Math.random() * words.length)];
let remainingGuesses = 6;
let guessedLetters = [];

const wordContainer = document.getElementById('word-container');
const inputForm = document.getElementById('input-form');
const message = document.getElementById('message');

function updateWordContainer() {
  let wordHTML = '';
  for (let i = 0; i < chosenWord.length; i++) {
    const letter = chosenWord[i];
    if (guessedLetters.includes(letter)) {
      wordHTML += `<div>${letter}</div>`;
    } else {
      wordHTML += '<div></div>';
    }
  }
  wordContainer.innerHTML = wordHTML;
}

function handleInput(event) {
  event.preventDefault();
  const input = document.getElementById('letter').value.toLowerCase();
  if (!/[a-z]/.test(input)) {
    message.textContent = 'Ingresa solo letras del alfabeto';
    return;
  }
  if (guessedLetters.includes(input)) {
    message.textContent = 'Ya ingresaste esta letra';
    return;
  }
  guessedLetters.push(input);
  if (chosenWord.includes(input)) {
    message.textContent = '¡Muy bien! Esa letra está en la palabra';
    updateWordContainer();
    if (!wordContainer.innerHTML.includes('<div></div>')) {
      message.textContent = '¡Felicidades! Ganaste';
      inputForm.remove();
    }
  } else {
    message.textContent = 'Lo siento, esa letra no está en la palabra';
    remainingGuesses--;
    updateHangman();
    if (remainingGuesses === 0) {
      message.textContent = `¡Oh no! La palabra era ${chosenWord}`;
      inputForm.remove();
    }
  }
  document.getElementById('letter').value = '';
}

function updateHangman() {
  const parts = ['head', 'body', 'left-arm', 'right-arm', 'left-leg', 'right-leg'];
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    const element = document.getElementById(part);
    if (i < 6 - remainingGuesses) {
      element.style.opacity = '1';
    }
  }
}

inputForm.addEventListener('submit', handleInput);

updateWordContainer();
