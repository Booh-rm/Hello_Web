const container = document.querySelector(".animation-container");
const colors = ["#E64072", "#FFB900", "#00B4DB", "#8F2D56", "#DAF7A6", "#FF4D4D", "#4A4A4A", "#474747", "#313131", "#29FF7F"];

const particleOptions = {
    shape: "circle",
    fill: colors,
    radius: { 0: 20 },
    duration: 3000,
    easing: "cubic.out",
    isRunLess: true,
    isShowEnd: false,
    isForce3d: true,
    left: "50%",
    top: "50%",
    x: { [-50]: 50 },
    y: { [-50]: 50 }
};

const timeline = new mojs.Timeline();

for (let i = 0; i < 500; i++) {
    const particle = new mojs.Shape({
        ...particleOptions,
        delay: Math.random() * 1000,
        fill: colors[Math.floor(Math.random() * colors.length)],
        radius: { 0: Math.random() * 50 }
    });
    timeline.add(particle);
}

document.addEventListener("click", (event) => {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    timeline.replay();
    timeline.tweens.forEach((tween) => {
        tween.el.style.left = `${x}px`;
        tween.el.style.top = `${y}px`;
    });
});