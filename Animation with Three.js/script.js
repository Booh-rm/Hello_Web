var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cubeMesh = new THREE.Mesh(geometry, material);

var cubeMatrix = [];
var separation = 2;
var xOffset = ((10 - 1) * separation) / 2;
var yOffset = ((10 - 1) * separation) / 2;

for (var i = 0; i < 10; i++) {
    cubeMatrix[i] = [];
    for (var j = 0; j < 10; j++) {
        var cube = cubeMesh.clone();
        cube.position.x = i * separation - xOffset;
        cube.position.y = j * separation - yOffset;
        scene.add(cube);
        cubeMatrix[i][j] = cube;
    }
}

var angle = 0;
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        cubeMatrix[i][j].position.z = Math.sin(angle) * 5;
        cubeMatrix[i][j].rotation.x = Math.sin(angle) * 2;
        cubeMatrix[i][j].rotation.y = Math.cos(angle) * 2;
        angle += 0.1;
    }
}

function animate() {
    requestAnimationFrame(animate);

    var angle = 0;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            cubeMatrix[i][j].position.z = Math.sin(angle) * 5;
            cubeMatrix[i][j].rotation.x += 0.01;
            cubeMatrix[i][j].rotation.y += 0.01;
            angle += 0.1;
        }
    }
    renderer.render(scene, camera);
}
animate();
