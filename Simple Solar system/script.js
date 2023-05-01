const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const sunSize = 80;
      const planetDistances = [80, 120, 170, 220, 270, 320, 370, 420];
      const planetSizes = [4, 6, 8, 10, 12, 14, 16, 18];
      const planetColors = ['#c5db5f', '#78c2ad', '#4485c7', '#3b3a8c', '#b5a642', '#ea7a35', '#f9d71c', '#d35400'];
      const planetSpeeds = [0.01, 0.012, 0.014, 0.016, 0.018, 0.02, 0.022, 0.024];
      const planetAngles = [0, 0, 0, 0, 0, 0, 0, 0];

      function drawSun() {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, sunSize, 0, Math.PI * 2);
        ctx.fillStyle = '#f9d71c';
        ctx.shadowBlur = 100;
        ctx.shadowColor = '#f9d71c';
        ctx.fill();
      }

      function drawPlanet(distance, size, color, angle) {
        const x = canvas.width / 2 + distance * Math.cos(angle);
        const y = canvas.height / 2 + distance * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSun();
        for (let i = 0; i < planetDistances.length; i++) {
          planetAngles[i] += planetSpeeds[i];
          drawPlanet(planetDistances[i], planetSizes[i], planetColors[i], planetAngles[i]);
        }
        requestAnimationFrame(animate);
      }

      animate();