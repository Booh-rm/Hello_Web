const eyes = document.querySelector(".eyes");
const leftEye = document.querySelector(".left-eye");
const rightEye = document.querySelector(".right-eye");
const leftPupil = document.querySelector(".left-eye .pupil");
const rightPupil = document.querySelector(".right-eye .pupil");
const mouth = document.querySelector(".mouth");

mouth.addEventListener("click", () => {
  mouth.classList.toggle("smiling");
});

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const eyeX = eyes.getBoundingClientRect().left;
  const eyeY = eyes.getBoundingClientRect().top;

  const eyeCenterX = eyeX + eyes.offsetWidth / 2;
  const eyeCenterY = eyeY + eyes.offsetHeight / 2;

  const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);

  const maxDistance = 15;

  const eyeDistanceX = Math.sin(angle) * maxDistance;
  const eyeDistanceY = Math.cos(angle) * maxDistance;

  leftPupil.style.transform = `translate(${eyeDistanceX}px, ${eyeDistanceY}px)`;
  rightPupil.style.transform = `translate(${eyeDistanceX}px, ${eyeDistanceY}px)`;
});
