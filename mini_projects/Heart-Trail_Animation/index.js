const body = document.querySelector('body');

body.addEventListener('mousemove', (event) => {
  const posX = event.offsetX;
  const posY = event.offsetY;

  const spanEl1 = document.createElement('span');
  body.appendChild(spanEl1);

  spanEl1.style.left = posX + 'px';
  spanEl1.style.top = posY + 'px';

  const size = Math.random() * 100;

  spanEl1.style.width = size + 'px';
  spanEl1.style.height = size + 'px';

  setTimeout(() => {
    spanEl1.remove();
  }, 3000);
});
