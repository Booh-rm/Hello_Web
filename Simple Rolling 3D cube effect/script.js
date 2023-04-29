const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const vertices = [
    { x: -20, y: -20, z: -20 },
    { x: -20, y: 20, z: -20 },
    { x: 20, y: 20, z: -20 },
    { x: 20, y: -20, z: -20 },
    { x: -20, y: -20, z: 20 },
    { x: -20, y: 20, z: 20 },
    { x: 20, y: 20, z: 20 },
    { x: 20, y: -20, z: 20 },
];

const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 4],
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7],
];

const scale = 20;
const speed = 0.00001;
let angleX = 0;
let angleY = 0;
let angleZ = 0;

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const sin1 = Math.sin(angleX);
    const cos1 = Math.cos(angleX);
    for (let vertex of vertices) {
        const y = vertex.y * cos1 + vertex.z * sin1;
        const z = vertex.z * cos1 - vertex.y * sin1;
        vertex.y = y;
        vertex.z = z;
    }

    const sin2 = Math.sin(angleY);
    const cos2 = Math.cos(angleY);
    for (let vertex of vertices) {
        const x = vertex.x * cos2 + vertex.z * sin2;
        const z = vertex.z * cos2 - vertex.x * sin2;
        vertex.x = x;
        vertex.z = z;
    }

    const sin3 = Math.sin(angleZ);
    const cos3 = Math.cos(angleZ);
    for (let vertex of vertices) {
        const x = vertex.x * cos3 + vertex.y * sin3;
        const y = vertex.y * cos3 - vertex.x * sin3;
        vertex.x = x;
        vertex.y = y;
    }

    ctx.beginPath();
    for (let [i, j] of edges) {
        const v1 = vertices[i];
        const v2 = vertices[j];
        ctx.moveTo(v1.x * scale + canvas.width / 2, v1.y * scale + canvas.height / 2);
        ctx.lineTo(v2.x * scale + canvas.width / 2, v2.y * scale + canvas.height / 2);
    }
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();

    angleX += speed;
    angleY += speed;
    angleZ += speed;
}

animate();