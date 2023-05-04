var scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.TorusGeometry(1, 0.5, 16, 100);

var material = new THREE.MeshPhongMaterial({ color: 0xffffff });

var texture = new THREE.TextureLoader().load('https://threejs.org/examples/textures/water.jpg');
material.map = texture;

var torus = new THREE.Mesh(geometry, material);
scene.add(torus);

var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

var pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

var starsGeometry = new THREE.BufferGeometry();
var starVertices = [];
for (var i = 0; i < 1000; i++) {
    var star = new THREE.Vector3();
    star.x = THREE.MathUtils.randFloatSpread(2000);
    star.y = THREE.MathUtils.randFloatSpread(2000);
    star.z = THREE.MathUtils.randFloatSpread(2000);
    starVertices.push(star);
}
starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

var starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
var starField = new THREE.Points(starsGeometry, starsMaterial);
scene.add(starField);

document.addEventListener('mousemove', onDocumentMouseMove);

var mouseX = 0, mouseY = 0;

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    mouseY = (event.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    camera.position.x = mouseX * 5;
    camera.position.y = -mouseY * 5;
}
function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
}


animate();
