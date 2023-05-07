const imagen = document.getElementById('imagen');

const animacion = anime({
    targets: imagen,
    scale: [
        { value: 1, duration: 0 },
        { value: 1.2, duration: 500, easing: 'easeInOutQuad' },
        { value: 1, duration: 500, easing: 'easeInOutQuad' }
    ],
    rotate: [
        { value: 0, duration: 0 },
        { value: '+=360', duration: 1000, easing: 'easeInOutSine' }
    ],
    borderRadius: [
        { value: '0%', duration: 0 },
        { value: '50%', duration: 1000, easing: 'easeInOutQuad' }
    ],
    boxShadow: [
        { value: '0px 0px 0px rgba(0,0,0,0)', duration: 0 },
        { value: '10px 10px 20px rgba(0,0,0,0.3)', duration: 1000, easing: 'easeOutSine' },
        { value: '0px 0px 0px rgba(0,0,0,0)', duration: 1000, easing: 'easeInOutQuad' }
    ],
    loop: true
});

imagen.addEventListener('click', () => {
    animacion.restart();
});
