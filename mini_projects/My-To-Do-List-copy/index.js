const taskInput = document.querySelector('#task-input');
const addButton = document.querySelector('#addButton');
const toDoList = document.querySelector('#toDoList');

let editId = null;

// =============================
// Create Todo Element
// =============================
const createNode = (task, id) => {
  const li = document.createElement('li');
  li.setAttribute('data-id', id);

  const p = document.createElement('p');
  p.innerText = task;
  li.appendChild(p);

  const editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.classList.add('btn', 'edit-btn');
  li.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('btn', 'delete-btn');
  li.appendChild(deleteButton);

  return li;
};

// =============================
// Load Todos From Server
// =============================
const loadTodos = async () => {
  const res = await fetch('http://localhost:5000/todos');
  const todos = await res.json();

  toDoList.innerHTML = '';

  todos.forEach((todo) => {
    const li = createNode(todo.text, todo.id);
    toDoList.appendChild(li);
  });
};

// =============================
// Add Todo
// =============================
const addTodo = async () => {
  const inputValue = taskInput.value.trim();

  if (inputValue.length === 0) {
    alert('Please enter a task');
    return;
  }

  // If editing
  if (editId !== null) {
    await fetch(`http://localhost:5000/todos/${editId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputValue }),
    });

    editId = null;
    addButton.innerText = 'Add';
  } else {
    await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputValue }),
    });
  }

  taskInput.value = '';
  loadTodos();
};

// =============================
// Delete Todo
// =============================
const deleteTodo = async (id) => {
  await fetch(`http://localhost:5000/todos/${id}`, {
    method: 'DELETE',
  });

  loadTodos();
};

// =============================
// Handle Click Events
// =============================
const handleClick = async (e) => {
  const li = e.target.parentElement;
  const id = li.getAttribute('data-id');

  if (e.target.innerText === 'Delete') {
    await deleteTodo(id);
  }

  if (e.target.innerText === 'Edit') {
    const text = li.querySelector('p').innerText;
    taskInput.value = text;
    taskInput.focus();
    editId = id;
    addButton.innerText = 'Save';
  }
};

// =============================
// Event Listeners
// =============================
addButton.addEventListener('click', addTodo);

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
});

toDoList.addEventListener('click', handleClick);

document.addEventListener('DOMContentLoaded', loadTodos);
