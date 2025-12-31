const digitalClock = document.querySelector('.digitalClock');
const hr = document.querySelector('#hours');
const min = document.querySelector('#minutes');
const timeFormate = document.querySelector('#ampm');
const day = document.querySelector('#day');

window.addEventListener('load', () => {
  setInterval(updateClock, 1000);
});

function updateClock() {
  let date = new Date();

  const dayNum = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  day.innerHTML = dayName[dayNum];
  hr.innerHTML = hours;
  min.innerHTML = minutes;
  timeFormate.innerHTML = ampm;
}
