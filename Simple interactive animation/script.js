const circle = document.getElementById("circle");

circle.addEventListener("click", () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  
  circle.style.transform = `translate(${x}px, ${y}px)`;
});
