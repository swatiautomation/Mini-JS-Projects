const submitBtn = document.querySelector(".submit-btn");
const taskInput = document.querySelector("#task-input");
const toDoContainer = document.querySelector(".to-do-items");

let todoList = [];
let editingElement = null;

const createElement = (task) => {
  const divParent = document.createElement("div");
  const divChild = document.createElement("div");
  const checkIcon = document.createElement("i");
  const delIcon = document.createElement("i");
  const doneIcon = document.createElement("i");

  divParent.className = "item";
  divParent.innerHTML = task;
  divParent.dataset.task = task;

  checkIcon.className = "fa-solid fa-pen-to-square";
  checkIcon.style.color = "lightgray";

  delIcon.className = "fa fa-trash";
  delIcon.style.color = "lightgray";

  doneIcon.className = " fa-solid fa-circle-check";
  doneIcon.style.color = "lightgray";

  divChild.appendChild(checkIcon);
  divChild.appendChild(delIcon);
  divChild.appendChild(doneIcon);
  divParent.appendChild(divChild);
  return divParent;
};
const addTask = (item) => {
  const divParent = createElement(item);
  toDoContainer.appendChild(divParent);
  taskInput.value = "";
  saveToLocalStorageToDo(item);
};

function editButton(e) {
  editingElement = e.target.parentElement.parentElement;
  taskInput.value = editingElement.dataset.task;
  submitBtn.textContent = "Edit";
}

function doneTask(e) {
  const taskItem = e.target.parentElement.parentElement;
  const isDone = taskItem.style.textDecoration === "line-through";
  taskItem.style.textDecoration = isDone ? "none" : "line-through";
  e.target.style.color = isDone ? "lightgray" : "green";
}
const deleteItem = (e) => {
  toDoContainer.removeChild(e.target.parentElement.parentElement);
  deleteLocalStorageToDo(e.target.parentElement.parentElement);
};

const saveToLocalStorageToDo = (key) => {
  todoList = JSON.parse(localStorage.getItem("toDoList")) || [];
  todoList.push(key);
  localStorage.setItem("toDoList", JSON.stringify(todoList));
};

const getLocalStorageToDo = () => {
  todoList = JSON.parse(localStorage.getItem("toDoList")) || [];
  todoList.forEach((item) => {
    const divParent = createElement(item);
    toDoContainer.appendChild(divParent);
  });
};

const deleteLocalStorageToDo = (key) => {
  todoList = JSON.parse(localStorage.getItem("toDoList")) || [];
  const todoText = key.dataset.task;
  const index = todoList.indexOf(todoText);

  if (index !== -1) {
    todoList.splice(index, 1);
    localStorage.setItem("toDoList", JSON.stringify(todoList));
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getLocalStorageToDo();
});

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (taskInput.value.trim() == "") {
      alert("Please enter a task");
      return;
    }
    if (editingElement) {
      const newTask = taskInput.value;
      deleteLocalStorageToDo(editingElement);
      editingElement.firstChild.nodeValue = newTask;
      editingElement.dataset.task = newTask;
      saveToLocalStorageToDo(newTask);
      editingElement = null;
      submitBtn.textContent = "Submit";
      taskInput.value = "";
    } else {
      addTask(taskInput.value);
    }
  }
});

submitBtn.addEventListener("click", () => {
  if (taskInput.value.trim() == "") {
    alert("Please enter a task");
    return;
  }
  if (editingElement) {
    const newTask = taskInput.value;
    deleteLocalStorageToDo(editingElement);
    editingElement.firstChild.nodeValue = newTask;
    editingElement.dataset.task = newTask;
    saveToLocalStorageToDo(newTask);
    editingElement = null;
    submitBtn.textContent = "Submit";
    taskInput.value = "";
  } else {
    addTask(taskInput.value);
  }
});

toDoContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    editButton(e);
  }
});

toDoContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    deleteItem(e);
  }
});

toDoContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-circle-check")) {
    doneTask(e);
  }
});
