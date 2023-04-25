const boton = document.querySelector("#boton");
const sonido = document.querySelector("#sonido");
let soundOn = false;

boton.addEventListener("click", () => {
	if (soundOn) {
		soundOn = false;
		boton.style.backgroundColor = "blue";
		sonido.pause();
	} else {
		soundOn = true;
		boton.style.backgroundColor = "green";
		sonido.play();
	}
});
