const cover = document.querySelector(".cover");
cover.addEventListener("mouseenter", () => {
  cover.style.transform = "scale(1.1)";
});
cover.addEventListener("mouseleave", () => {
  cover.style.transform = "scale(1)";
});
