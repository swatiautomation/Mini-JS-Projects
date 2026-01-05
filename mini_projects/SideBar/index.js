const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', () => {
  sidebar.classList.add('show');
});

document.addEventListener('mouseup', (event) => {
  if (!sidebar.contains(event.target)) sidebar.classList.remove('show');
});
