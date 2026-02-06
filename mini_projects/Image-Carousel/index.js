const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const images = document.querySelectorAll('.image-fade');
const dots = document.querySelectorAll('.dot');

let index = 0;
const showImage = (num) => {
  index += num;

  for (const image of images) {
    image.style.display = 'none';
  }
  for (const dot of dots) {
    dot.classList.remove('active');
  }
  if (index >= images.length) {
    index = 0;
  }
  if (index < 0) {
    index = images.length - 1;
  }

  images[index].style.display = 'block';
  dots[index].classList.add('active');
};

previous.addEventListener('click', () => {
  showImage(-1);
});

next.addEventListener('click', () => {
  showImage(1);
});
