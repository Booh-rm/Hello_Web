var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.CylinderGeometry(1, 1, 3, 32);

var textureLoader = new THREE.TextureLoader();
var texture = textureLoader.load('images/monster_energy_texture.webp');
var material = new THREE.MeshBasicMaterial({ map: texture });

var cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

var light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 10);
scene.add(light);

var starTexture = new THREE.TextureLoader().load('images/stars.png');

var starMaterial = new THREE.SpriteMaterial({
  map: starTexture,
  color: 0x00ff00,
  blending: THREE.AdditiveBlending,
  transparent: true,
  opacity: 0.5,
  depthWrite: false,
  depthTest: false,
  fog: false,
  emissive: 0xffffff,
});

var stars = [];

for (var i = 0; i < 10000; i++) {
  var star = new THREE.Sprite(starMaterial);

  star.position.x = Math.random() * 100 - 50;
  star.position.y = Math.random() * 100 - 50;
  star.position.z = -10;

  star.scale.set(0.1, 0.1, 1);

  stars.push(star);

  scene.add(star);
}

function animateStars() {
  for (var i = 0; i < stars.length; i++) {
    stars[i].material.opacity = 0.5 + 0.5 * Math.sin(Date.now() / 500 + i);
  }
}

function animate() {
  requestAnimationFrame(animate);

  cylinder.rotation.y += 0.004;

  animateStars();

  renderer.render(scene, camera);
}

animate();
