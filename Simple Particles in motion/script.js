const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

class WaterDrop {
    constructor(x, y, size, speed) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speed = speed;
    }
  
    draw() {
      ctx.beginPath();
      ctx.fillStyle = "#0077be";
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  
    update() {
      this.x += this.speed;
      if (this.x > canvas.width + this.size) {
        this.x = -this.size;
      }
      this.draw();
    }
  }
  
  const waterDrops = [];
  
  for (let i = 0; i < 1400; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2 + canvas.height / 4;
    const size = Math.random() * 3 + 1;
    const speed = Math.random() * 2 + 1;
    waterDrops.push(new WaterDrop(x, y, size, speed));
  }
  
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    waterDrops.forEach((drop) => {
      drop.update();
    });
  }
  
  animate();
  