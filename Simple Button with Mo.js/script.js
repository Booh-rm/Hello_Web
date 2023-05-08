const button = document.querySelector('button');

button.addEventListener('click', () => {
    const timeline = new mojs.Timeline();

    const burst = new mojs.Burst({
        radius: { 0: 350 },
        count: 40,
        children: {
            shape: 'circle',
            fill: '#0f0',
            duration: 1500,
            easing: 'quad.out',
        }
    });

    timeline.add(burst);

    const fade = new mojs.Html({
        el: 'button',
        duration: 500,
        opacity: { 1: 0 },
        onComplete: () => {
            button.style.opacity = 1;
            setTimeout(() => {
                timeline.play();
            }, 2000);
        }
    });

    timeline.add(fade);

    timeline.play();
});