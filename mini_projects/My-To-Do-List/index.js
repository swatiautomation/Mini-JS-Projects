const taskInput = document.querySelector('#task-input');
const addButton = document.querySelector('#addButton');
const toDoList = document.querySelector('#toDoList');

let editMode = null;
addButton.addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const inputValue = taskInput.value;
  if (inputValue.length <= 0) {
    alert('Please enter a task');
    return;
  }

  if (addButton.value === 'Edit' && editMode !== null) {
    editLocalStorageToDo(editMode.target.previousElementSibling.innerHTML);

    editMode.target.previousElementSibling.innerHTML = inputValue;
    taskInput.value = '';
    addButton.value = 'Add';
    editMode = null;
    return;
  }

  const li = document.createElement('li');
  const p = document.createElement('p');
  p.innerHTML = inputValue;
  li.appendChild(p);

  const editButton = document.createElement('button');
  editButton.innerHTML = 'Edit';
  editButton.classList.add('btn', 'edit-btn');
  li.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  deleteButton.classList.add('btn', 'delete-btn');
  li.appendChild(deleteButton);

  toDoList.appendChild(li);
  taskInput.value = '';

  localStorageToDo(inputValue);
}

toDoList.addEventListener('click', (event) => {
  updateTodo(event);
});

function updateTodo(e) {
  if (e.target.innerHTML === 'Delete') {
    toDoList.removeChild(e.target.parentElement);
    deleteLocalStorageToDo(e.target.parentElement);
  } else if (e.target.innerHTML === 'Edit') {
    taskInput.value = e.target.previousElementSibling.innerHTML;
    taskInput.focus();
    addButton.value = 'Edit';
    editMode = e;
  }
}
function localStorageToDo(key) {
  let todo = [];
  todo = JSON.parse(localStorage.getItem('todo')) || [];
  todo.push(key);
  localStorage.setItem('todo', JSON.stringify(todo));
}

function getLocalStorageToDo() {
  let todo = [];
  todo = JSON.parse(localStorage.getItem('todo')) || [];

  todo.forEach((element) => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerHTML = element;
    li.appendChild(p);

    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.classList.add('btn', 'edit-btn');
    li.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('btn', 'delete-btn');
    li.appendChild(deleteButton);

    toDoList.appendChild(li);
    taskInput.value = '';
  });
}

function deleteLocalStorageToDo(key) {
  let todo = [];
  todo = JSON.parse(localStorage.getItem('todo')) || [];
  let todoText = key.children[0].innerHTML;
  let index = todo.indexOf(todoText);
  todo.splice(index, 1);
  localStorage.setItem('todo', JSON.stringify(todo));
}

function editLocalStorageToDo(key) {
  let todo = JSON.parse(localStorage.getItem('todo'));
  let index = todo.indexOf(key);
  todo[index] = taskInput.value;
  localStorage.setItem('todo', JSON.stringify(todo));
}

document.addEventListener('DOMContentLoaded', () => {
  getLocalStorageToDo();
});
