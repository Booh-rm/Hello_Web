function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const date = now.toDateString();
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const time = document.querySelector('.time');
    const dateElem = document.querySelector('.date');
    time.innerText = timeString;
    dateElem.innerText = date;
    updateBackground(hours);
  }
  
  function updateBackground(hours) {
    const backgroundColors = ['#001f3f', '#0074D9', '#7FDBFF', '#39CCCC', '#3D9970', '#2ECC40', '#01FF70', '#FFDC00', '#FF851B', '#FF4136', '#85144b', '#F012BE'];
    const index = Math.floor(hours / 2);
    const backgroundColor = backgroundColors[index];
    document.body.style.backgroundColor = backgroundColor;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  