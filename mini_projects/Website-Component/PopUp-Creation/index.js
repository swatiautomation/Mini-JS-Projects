const open = document.querySelector('.openModal');
const close = document.querySelector('.closeModalBtn');
const popupContainer = document.querySelector('.popup');

open.addEventListener('click', () => {
  //  popupContainer.classList.add('popup--visible');
  popupContainer.classList.remove('hide');
});

close.addEventListener('click', () => {
  popupContainer.classList.add('hide');
});
