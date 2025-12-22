const grocery = document.querySelector('.grocery');
const pencil = document.querySelector('#pencil');
const allItems = document.querySelector('#allItems');
const userInput = document.querySelector('#grocery-input');

pencil.addEventListener('click', () => {
  allItems.innerHTML = '';
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});

function addItem() {
  let h2 = document.createElement('h2');
  h2.innerHTML = userInput.value;

  h2.addEventListener('click', () => {
    h2.style.textDecoration = 'line-through';
  });

  allItems.appendChild(h2);

  userInput.value = '';
}
