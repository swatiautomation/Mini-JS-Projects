const taskInput = document.querySelector('#task-input');
const addButton = document.querySelector('#addButton');
const toDoList = document.querySelector('#toDoList');

let editMode = null;
let todo = [];

const createNode = (task) => {
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.innerHTML = task;
  li.appendChild(p);

  const editButton = document.createElement('button');
  editButton.innerHTML = 'Edit';
  editButton.classList.add('btn', 'edit-btn');
  li.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  deleteButton.classList.add('btn', 'delete-btn');
  li.appendChild(deleteButton);
  return li;
};

const addTodo = () => {
  const inputValue = taskInput.value;
  if (inputValue.length <= 0) {
    alert('Please enter a task');
    return;
  }

  if (addButton.value === 'Save' && editMode !== null) {
    editLocalStorageToDo(editMode.target.previousElementSibling.innerHTML);

    editMode.target.previousElementSibling.innerHTML = inputValue;
    taskInput.value = '';
    addButton.value = 'Add';
    editMode = null;
    return;
  }

  const li = createNode(inputValue);

  toDoList.appendChild(li);
  taskInput.value = '';

  saveToLocalStorageToDo(inputValue);
};

const updateTodo = (e) => {
  if (e.target.innerHTML === 'Delete') {
    toDoList.removeChild(e.target.parentElement);
    deleteLocalStorageToDo(e.target.parentElement);
  } else if (e.target.innerHTML === 'Edit') {
    taskInput.value = e.target.previousElementSibling.innerHTML;
    taskInput.focus();
    addButton.value = 'Save';
    editMode = e;
  }
};
const saveToLocalStorageToDo = (key) => {
  todo.push(key);
  localStorage.setItem('todo', JSON.stringify(todo));
};

const getLocalStorageToDo = () => {
  todo = JSON.parse(localStorage.getItem('todo')) || [];

  todo.forEach((element) => {
    // const li = document.createElement('li');
    // const p = document.createElement('p');
    // p.innerHTML = element;
    // li.appendChild(p);

    // const editButton = document.createElement('button');
    // editButton.innerHTML = 'Edit';
    // editButton.classList.add('btn', 'edit-btn');
    // li.appendChild(editButton);

    // const deleteButton = document.createElement('button');
    // deleteButton.innerHTML = 'Delete';
    // deleteButton.classList.add('btn', 'delete-btn');
    // li.appendChild(deleteButton);
    const li = createNode(element);

    toDoList.appendChild(li);
    taskInput.value = '';
  });
};

const deleteLocalStorageToDo = (key) => {
  todo = JSON.parse(localStorage.getItem('todo')) || [];
  const todoText = key.children[0].innerHTML;
  const index = todo.indexOf(todoText);
  todo.splice(index, 1);
  localStorage.setItem('todo', JSON.stringify(todo));
};

const editLocalStorageToDo = (key) => {
  const todo = JSON.parse(localStorage.getItem('todo'));
  const index = todo.indexOf(key);
  todo[index] = taskInput.value;
  localStorage.setItem('todo', JSON.stringify(todo));
};
addButton.addEventListener('click', () => {
  addTodo();
});

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
});

toDoList.addEventListener('click', (event) => {
  updateTodo(event);
});

document.addEventListener('DOMContentLoaded', () => {
  getLocalStorageToDo();
});
