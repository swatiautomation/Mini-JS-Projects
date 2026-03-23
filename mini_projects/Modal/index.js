const btn = document.querySelector('.openBtn');
const modalContainer = document.querySelector('.modalContainer');
const closeBtn = document.querySelector('.closeBtn');

btn.addEventListener('click', () => {
  modalContainer.style.display = 'flex';
  console.log('yess');
});
// closeBtn.addEventListener('click', () => {
//   modalContainer.style.display = 'none';
// });

modalContainer.addEventListener('click', (e) => {
  if (e.target.className === 'modalContainer') {
    modalContainer.style.display = 'none';
  }
});
