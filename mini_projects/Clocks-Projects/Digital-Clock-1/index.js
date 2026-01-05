const time = document.querySelector('#time');
const timeFormat = document.querySelector('#timeFormat');

document.addEventListener('DOMContentLoaded', () => {
  setInterval(showTime, 1000);
});

function showTime() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? 'PM' : 'AM';

  console.log(`${hours}:${minutes}:${seconds} ${ampm}`);
  //let sec = seconds < 10 ? `0${seconds}` : seconds;
  let sec = seconds.toString().padStart(2, '0');
  //let min = minutes < 10 ? `0${minutes}` : minutes;
  let min = minutes.toString().padStart(2, '0');
  //let hr = hours < 10 ? `0${hours}` : hours;
  let hr = hours.toString().padStart(2, '0');

  time.innerHTML = `${hr} : ${min} : ${sec} `;
  timeFormat.innerHTML = hr > 12 ? 'PM' : 'AM';
}
