const submit = document.querySelector('.submitBtn');
const input = document.querySelector('#msgInput');

submit.addEventListener('click', () => {
  getMessage();
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    getMessage();
  }
});

function getMessage() {
  const inputText = input.value;
  document.querySelector('#message-output').innerHTML = inputText;

  input.value = '';
}
