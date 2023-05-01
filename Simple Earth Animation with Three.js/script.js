const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(5, 32, 32);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
const earth = new THREE.Mesh(geometry, material);
const starGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const starCount = 200;
const stars = new THREE.Group();

scene.add(earth);

for (let i = 0; i < starCount; i++) {
    const star = new THREE.Mesh(starGeometry, starMaterial);
    star.position.set(
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        Math.random() * -500
    );
    star.blinkPhase = Math.random() * Math.PI * 2;
    star.blinkSpeed = Math.random() * 0.05 + 0.05;
    stars.add(star);
}
scene.add(stars);

function animateStars() {
    stars.children.forEach(star => {
        star.blinkPhase += star.blinkSpeed;
        star.scale.set(
            Math.sin(star.blinkPhase) * 0.5 + 1,
            Math.sin(star.blinkPhase) * 0.5 + 1,
            Math.sin(star.blinkPhase) * 0.5 + 1
        );
    });
}


function animate() {
    requestAnimationFrame(animate);

    earth.rotation.y += 0.001;

    animateStars();

    renderer.render(scene, camera);
}

animate();