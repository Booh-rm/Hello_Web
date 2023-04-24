const clockElement = document.querySelector('.clock');
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const amPmElement = document.querySelector('.am-pm');
const alarmElement = document.querySelector('.alarm');
const setAlarmButton = document.querySelector('#set-alarm');
const alarmTimeInput = document.querySelector('#alarm-time');
const alarmSound = document.querySelector('#alarm-sound');

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();

  if (hours > 12) {
    hours -= 12;
    amPmElement.textContent = 'PM';
  } else {
    amPmElement.textContent = 'AM';
  }

  hourElement.textContent = hours.toString().padStart(2, '0');
  minuteElement.textContent = minutes.toString().padStart(2, '0');

  if (alarmSound.paused === false) {
    document.querySelector('.digits').classList.add('alarm-active');
  } else {
    document.querySelector('.digits').classList.remove('alarm-active');
    document.querySelector('.digits').classList.add('alarm-inactive');
  }
}

setInterval(updateClock, 1000);

function setAlarm() {
  const now = new Date();
  const alarmTime = new Date(alarmTimeInput.value);

  if (alarmTime <= now) {
    alarmElement.classList.add('alarm-failure');
    setTimeout(() => {
      alarmElement.classList.remove('alarm-failure');
    }, 2000);
    return;
  }

  const timeUntilAlarm = alarmTime.getTime() - now.getTime();

  setTimeout(() => {
    alarmElement.classList.add('alarm-success');
    alarmSound.play();
    document.querySelector('.digits').classList.add('alarm-active');
  }, timeUntilAlarm);

  setTimeout(() => {
    alarmElement.classList.remove('alarm-success');
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.querySelector('.digits').classList.remove('alarm-active');
    document.querySelector('.digits').classList.add('alarm-inactive');
  }, timeUntilAlarm + 2000);

}

setAlarmButton.addEventListener('click', () => {
    setAlarm();
    alert('¡La alarma se ha programado!');
  });
  

alarmSound.addEventListener('ended', () => {
  alarmSound.currentTime = 0;
  alarmSound.play();
});

