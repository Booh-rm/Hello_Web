const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

function generateBubbles() {
  for (let i = 0; i < 50; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.classList.add(colors[Math.floor(Math.random() * colors.length)]);
    bubble.style.left = `${Math.floor(Math.random() * 100)}vw`;
    bubble.style.top = `${Math.floor(Math.random() * 100)}vh`;
    bubble.style.animationDelay = `${Math.floor(Math.random() * 10)}s`;
    document.body.appendChild(bubble);
  }
}

function changeBubblePosition() {
  const bubbles = document.querySelectorAll(".bubble");
  bubbles.forEach((bubble) => {
    bubble.style.left = `${Math.floor(Math.random() * 100)}vw`;
    bubble.style.top = `${Math.floor(Math.random() * 100)}vh`;
  });
}

generateBubbles();

setInterval(changeBubblePosition, 5000);
