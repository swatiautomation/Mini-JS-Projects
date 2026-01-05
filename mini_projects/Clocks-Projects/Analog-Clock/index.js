const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');

function display() {
  const date = new Date();

  let seconds = date.getSeconds();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let hRotation = 30 * hours + 0.5 * minutes; // 30 degrees per hour + 0.5 degrees per minute or 12 hour=360degree / 1 hour = 30/ 60 minute=30degree/ 1minute = 0.5degree
  let mRotation = 6 * minutes; // 6 degrees per minute // 60 minute=360degree / 1 minute=6degree
  let sRotation = 6 * seconds; // 6 degrees per second // 60 second=360degree / 1 second=6degree

  hourHand.style.transform = `rotate(${hRotation}deg)`;
  minuteHand.style.transform = `rotate(${mRotation}deg)`;
  secondHand.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(display, 1000);
