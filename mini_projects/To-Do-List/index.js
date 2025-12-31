const submitBtn = document.querySelector('.submit-btn');
const taskInput = document.querySelector('#task-input');
const toDoContainer = document.querySelector('.to-do-items');

taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (taskInput.value.trim() == '') {
      alert('Please enter a task');
      return;
    }
    addTask();
  }
});

submitBtn.addEventListener('click', () => {
  if (taskInput.value.trim() == '') {
    alert('Please enter a task');
    return;
  }
  addTask();
});

function addTask() {
  var divParent = document.createElement('div');
  var divChild = document.createElement('div');
  var checkIcon = document.createElement('i');
  var delIcon = document.createElement('i');

  divParent.className = 'item';
  divParent.innerHTML = taskInput.value;

  checkIcon.className = 'fa-solid fa-circle-check';
  checkIcon.style.color = 'lightgray';

  divChild.appendChild(checkIcon);

  delIcon.className = 'fa fa-trash';
  delIcon.style.color = 'lightgray';

  divChild.appendChild(delIcon);

  divParent.appendChild(divChild);

  toDoContainer.appendChild(divParent);

  taskInput.value = '';

  localStorageToDo(divParent.innerText);
}

toDoContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-circle-check')) {
    if (e.target.style.color === 'lightgray') {
      e.target.style.color = 'green';
    } else {
      e.target.style.color = 'lightgray';
    }
  }
});

toDoContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash')) {
    deleteItem(e);
  }
});

function deleteItem(e) {
  toDoContainer.removeChild(e.target.parentElement.parentElement);
  deleteLocalStorageToDo(e.target.parentElement.parentElement);
}

function localStorageToDo(key) {
  let todoList = [];
  todoList = JSON.parse(localStorage.getItem('toDoList')) || [];
  todoList.push(key);
  localStorage.setItem('toDoList', JSON.stringify(todoList));
}

function getLocalStorageToDo() {
  let todoList = [];
  todoList = JSON.parse(localStorage.getItem('toDoList')) || [];

  todoList.forEach((item) => {
    var divParent = document.createElement('div');
    var divChild = document.createElement('div');
    var checkIcon = document.createElement('i');
    var delIcon = document.createElement('i');
    divParent.className = 'item';
    divParent.innerHTML = item;
    checkIcon.className = 'fa-solid fa-circle-check';
    checkIcon.style.color = 'lightgray';

    divChild.appendChild(checkIcon);

    delIcon.className = 'fa fa-trash';
    delIcon.style.color = 'lightgray';
    divChild.appendChild(delIcon);
    divParent.appendChild(divChild);
    toDoContainer.appendChild(divParent);
  });
}

function deleteLocalStorageToDo(key) {
  let todo = [];
  todo = JSON.parse(localStorage.getItem('toDoList')) || [];
  let todoText = key.innerText;
  let index = todo.indexOf(todoText);

  if (index !== -1) {
    todo.splice(index, 1);
    localStorage.setItem('toDoList', JSON.stringify(todo));
  }
}

window.addEventListener('load', () => {
  getLocalStorageToDo();
});
