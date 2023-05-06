var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var waterGeometry = new THREE.PlaneBufferGeometry(10, 10);
var waterMaterial = new THREE.MeshStandardMaterial({ color: '#4477ff', transparent: true, opacity: 0.8 });
var water = new THREE.Mesh(waterGeometry, waterMaterial);
water.rotation.x = -Math.PI / 2;
water.position.y = -1;
scene.add(water);

var mountainsGeometry = new THREE.ConeBufferGeometry(5, 10, 5);
var mountainsMaterial = new THREE.MeshStandardMaterial({ color: '#388E3C' });
var mountains = new THREE.Mesh(mountainsGeometry, mountainsMaterial);
mountains.position.y = -1;
mountains.position.z = -10;
scene.add(mountains);

var mountainsGeometry = new THREE.ConeBufferGeometry(5, 10, 5);
var mountainsMaterial = new THREE.MeshStandardMaterial({ color: '#388E3C' });
var mountains = new THREE.Mesh(mountainsGeometry, mountainsMaterial);
mountains.position.y = 1;
mountains.position.z = -13;
mountains.position.x = -5;
scene.add(mountains);

var mountainsGeometry = new THREE.ConeBufferGeometry(5, 10, 5);
var mountainsMaterial = new THREE.MeshStandardMaterial({ color: '#388E3C' });
var mountains = new THREE.Mesh(mountainsGeometry, mountainsMaterial);
mountains.position.y = 1;
mountains.position.z = -14;
mountains.position.x = 5;
scene.add(mountains);

var islandGeometry = new THREE.CylinderBufferGeometry(1, 1, 0.5, 10);
var islandMaterial = new THREE.MeshStandardMaterial({ color: '#553300' });
var island = new THREE.Mesh(islandGeometry, islandMaterial);
island.position.y = -0.8;
scene.add(island);

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);

var ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

var moonGeometry = new THREE.SphereGeometry(1, 32, 32);
var moonTexture = new THREE.TextureLoader().load('images/moon.jpg');
var moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture, emissive: '#ffffee', emissiveIntensity: 0.5 });
var moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.set(9, 9, -10);
scene.add(moon);


renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
water.receiveShadow = true;
island.castShadow = true;
mountains.castShadow = true;
light.castShadow = true;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
