const title = document.querySelector('#title');
const nameField = document.querySelector('#nameField');
const login = document.querySelector('#login');
const signupLink = document.querySelector('#signupLink');

signupLink.addEventListener('click', (e) => {
  e.preventDefault();
  title.textContent = 'Sign Up';
  nameField.style.display = 'block';
});

login.addEventListener('click', (e) => {
  e.preventDefault();
  title.textContent = 'Login';
  nameField.style.display = 'none';
});
