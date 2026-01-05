const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const targetDate = new Date('January 15, 2026 00:59:59');
countdown(targetDate);

function countdown(targetDate) {
  setInterval(() => {
    updateCounter(targetDate);
  }, 1000);
}

function updateCounter(targetDate) {
  const currentDate = new Date();
  const sec = Math.floor((targetDate - currentDate) / 1000) % 60;
  const mins = Math.floor((targetDate - currentDate) / 1000 / 60) % 60;
  const hrs = Math.floor((targetDate - currentDate) / 1000 / 60 / 60) % 24;
  const dys = Math.floor((targetDate - currentDate) / 1000 / 60 / 60 / 24);

  // days.innerHTML = dys < 10 ? '0' + dys : dys;
  days.innerHTML = dys.toString().padStart(2, '0');
  // hours.innerHTML = hrs < 10 ? '0' + hrs : hrs;
  hours.innerHTML = hrs.toString().padStart(2, '0');
  minutes.innerHTML = mins.toString().padStart(2, '0');
  seconds.innerHTML = sec.toString().padStart(2, '0');
}
