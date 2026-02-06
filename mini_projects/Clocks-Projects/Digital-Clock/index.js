const hr = document.querySelector('#hours');
const min = document.querySelector('#minutes');
const timeFormate = document.querySelector('#ampm');
const day = document.querySelector('#day');

const updateClock = () => {
  const date = new Date();

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

  const changedTo12HourFormat = hours % 12 ? hours % 12 : 12;
  hours = changedTo12HourFormat.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');

  day.innerHTML = dayName[dayNum];
  hr.innerHTML = hours;
  min.innerHTML = minutes;
  timeFormate.innerHTML = ampm;
};

window.addEventListener('load', () => {
  setInterval(updateClock, 1000);
});
