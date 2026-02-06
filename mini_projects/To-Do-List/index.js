const submitBtn = document.querySelector('.submit-btn');
const taskInput = document.querySelector('#task-input');
const toDoContainer = document.querySelector('.to-do-items');

let todoList = [];

const createElement = (task) => {
  const divParent = document.createElement('div');
  const divChild = document.createElement('div');
  const checkIcon = document.createElement('i');
  const delIcon = document.createElement('i');

  divParent.className = 'item';
  divParent.innerHTML = task;

  checkIcon.className = 'fa-solid fa-circle-check';
  checkIcon.style.color = 'lightgray';

  divChild.appendChild(checkIcon);

  delIcon.className = 'fa fa-trash';
  delIcon.style.color = 'lightgray';

  divChild.appendChild(delIcon);

  divParent.appendChild(divChild);
  return divParent;
};
const addTask = (item) => {
  const divParent = createElement(item);
  toDoContainer.appendChild(divParent);
  taskInput.value = '';
  saveToLocalStorageToDo(item);
};

const deleteItem = (e) => {
  toDoContainer.removeChild(e.target.parentElement.parentElement);
  deleteLocalStorageToDo(e.target.parentElement.parentElement);
};

const saveToLocalStorageToDo = (key) => {
  todoList = JSON.parse(localStorage.getItem('toDoList')) || [];
  todoList.push(key);
  localStorage.setItem('toDoList', JSON.stringify(todoList));
};

const getLocalStorageToDo = () => {
  todoList = JSON.parse(localStorage.getItem('toDoList')) || [];
  console.log(todoList.length);
  todoList.forEach((item) => {
    const divParent = createElement(item);
    toDoContainer.appendChild(divParent);
  });
};

const deleteLocalStorageToDo = (key) => {
  todoList = JSON.parse(localStorage.getItem('toDoList')) || [];
  const todoText = key.childNodes[0].textContent;
  const index = todoList.indexOf(todoText);

  if (index !== -1) {
    todoList.splice(index, 1);
    localStorage.setItem('toDoList', JSON.stringify(todoList));
  }
};

document.addEventListener('DOMContentLoaded', () => {
  getLocalStorageToDo();
});

taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (taskInput.value.trim() == '') {
      alert('Please enter a task');
      return;
    }
    addTask(taskInput.value);
  }
});

submitBtn.addEventListener('click', () => {
  if (taskInput.value.trim() == '') {
    alert('Please enter a task');
    return;
  }
  addTask(taskInput.value);
});

toDoContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-circle-check')) {
    e.target.style.color === 'lightgray'
      ? (e.target.style.color = 'green')
      : (e.target.style.color = 'lightgray');
  }
});

toDoContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash')) {
    deleteItem(e);
  }
});
