function createDrops() {
  const drops = document.createElement("div");
  drops.classList.add("drop");
  drops.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(drops);
}

setInterval(createDrops, 200);

const changeColorButton = document.getElementById("change-color-button");

changeColorButton.addEventListener("click", function() {
  const drops = document.querySelectorAll(".drop");
  drops.forEach(function(drop) {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    drop.style.backgroundColor = randomColor;
  });
});