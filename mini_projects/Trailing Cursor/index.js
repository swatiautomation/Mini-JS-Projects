const pointerCursor = document.querySelector('.pointerCursor');
const shadowCursor = document.querySelector('.shadowCursor');

let mouseX;
let mouseY;
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  pointerCursor.style.left = e.clientX + 'px';
  pointerCursor.style.top = e.clientY + 'px';
  // animateShodowCursor();
});

function animateShodowCursor() {
  let currentX = parseFloat(shadowCursor.style.left) || 0;
  let currentY = parseFloat(shadowCursor.style.top) || 0;
  console.log(currentX, currentY);

  let distanceX = mouseX - currentX;
  let distanceY = mouseY - currentY;

  shadowCursor.style.left = currentX + distanceX * 0.1 + 'px';
  shadowCursor.style.top = currentY + distanceY * 0.1 + 'px';
  requestAnimationFrame(animateShodowCursor);
}

animateShodowCursor();
