const digitalClock = document.querySelector('.digitalClock');

window.addEventListener('load', updateClock);

function updateClock() {
  let date = new Date();
  const dayNum = date.getDay();
  console.log(dayNum);
  let hours = date.getHours();
  console.log(hours);
  let minutes = date.getMinutes();
  console.log(minutes);
  const ampm = hours > 12 ? 'PM' : 'AM';
  const dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const seconds = date.getSeconds();
  console.log(seconds);

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  document.querySelector('#day').innerHTML = dayName[dayNum];
  document.querySelector('#hours').innerHTML = hours;
  document.querySelector('#minutes').innerHTML = minutes;
  document.querySelector('#ampm').innerHTML = ampm;

  setTimeout(updateClock, 2000);
}
updateClock();
