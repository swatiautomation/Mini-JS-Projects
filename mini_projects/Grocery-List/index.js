// const grocery = document.querySelector('.grocery');
const pencil = document.querySelector('#pencil');
const allItems = document.querySelector('#allItems');
const userInput = document.querySelector('#grocery-input');

const addItem = () => {
  const h2 = document.createElement('h2');
  h2.innerHTML = userInput.value;
  h2.style.cursor = 'pointer';
  h2.addEventListener('click', () => {
    h2.style.textDecoration = 'line-through';
  });
  allItems.appendChild(h2);
  userInput.value = '';
};

pencil.addEventListener('click', () => {
  allItems.innerHTML = '';
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});
