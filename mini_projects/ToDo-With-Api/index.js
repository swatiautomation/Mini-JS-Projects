const addBtn = document.querySelector('.addBtn');
const inputBox = document.querySelector('#input');
const taskContainer = document.querySelector('.taskContainer');
const editBtn = document.querySelector('.editBtn');

let task = [];
let api = 'https://69c7dbd263393440b31736e9.mockapi.io/api/v1/todos';

async function fetchData() {
  const response = await fetch(api);
  const data = await response.json();
  // console.log(data);

  taskContainer.innerHTML = '';

  data.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('taskContent');

    div.innerHTML = `
          <input id="editInput" type="text" placeholder="Enter your task here" value="${item.text}" />
          <p class="taskText">${item.text}</p>
          <div class="btnContainer"> 
            <button class="editBtn">Edit</button>
            <button class="saveBtn">Save</button>
            <button class="deleteBtn">Delete</button>
          </div>
  `;

    const saveBtn = div.querySelector('.saveBtn');
    const editInput = div.querySelector('#editInput');
    const taskText = div.querySelector('.taskText');

    editInput.style.display = 'none';
    saveBtn.style.display = 'none';

    saveBtn.addEventListener('click', async () => {
      saveBtn.style.display = 'none';
      editButton.style.display = 'block';
      taskText.style.display = 'block';
      let value = editInput.value;
      editInput.style.display = 'none';
      taskText.innerHTML = value;
      putData(item.id, value);
    });

    const editButton = div.querySelector('.editBtn');
    editButton.addEventListener('click', () => {
      saveBtn.style.display = 'block';
      editButton.style.display = 'none';
      editInput.style.display = 'block';
      taskText.style.display = 'none';
    });
    const deleteButton = div.querySelector('.deleteBtn');
    deleteButton.addEventListener('click', () => {
      deleteData(item.id);
    });
    taskContainer.append(div);
  });
}
fetchData();

addBtn.addEventListener('click', postData);

async function postData() {
  let value = inputBox.value;
  let obj = {
    text: value,
  };
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  console.log(response);
  if (response.status === 201) {
    fetchData();
    inputBox.value = '';
  }
}

async function deleteData(id) {
  let response = await fetch(`${api}/${id}`, {
    method: 'DELETE',
  });
  console.log(response);
  if (response.status === 200) {
    fetchData();
  }
}

async function putData(id, value) {
  let obj = {
    text: value,
  };
  const response = await fetch(`${api}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  // console.log(response);
  if (response.status === 201) {
    fetchData();
  }
}
/*addBtn.addEventListener('click', () => {
  let value = inputBox.value;
  if (value.trim() === '') return;

  inputBox.value = '';

  const div = document.createElement('div');
  div.innerHTML = `

   <div class="taskContent">
          <p>${value}</p>
          <button class="editBtn">Edit</button>
        </div>
  `;
  taskContainer.append(div);
  task.push(value);
  localStorage.setItem('task', JSON.stringify(task));
});

document.addEventListener('DOMContentLoaded', () => {
  console.log(JSON.parse(localStorage.getItem('task')));
  task = JSON.parse(localStorage.getItem('task'));
  task.forEach((item) => {
    const div = document.createElement('div');
    div.innerHTML = `

   <div class="taskContent">
          <p>${item}</p>
          <div> 
          <button class="editBtn">Edit</button>
          <button class="deleteBtn">Delete</button>
          </div>
        </div>
  `;
    taskContainer.append(div);
  });
});

taskContainer.addEventListener('click', (e) => {
  // console.log(e.target.parentElement.childNodes[1].textContent);
  if (e.target.classList.contains('deleteBtn')) {
    taskContainer.removeChild(e.target.parentElement.parentElement);

    let text = e.target.parentElement.childNodes[1].textContent;
    console.log(text);

    let savedItem = JSON.parse(localStorage.getItem('task'));

    let index = savedItem.indexOf(text);
    console.log(index);
    if (index !== -1) {
      savedItem.splice(index, 1);
      localStorage.setItem('task', JSON.stringify(savedItem));
    }
  }
});

taskContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('editBtn')) {
    e.target.innerHTML = 'Save';
    e.target.classList.remove('editBtn');
    e.target.classList.add('saveBtn');

    inputBox.value =
      e.target.parentElement.parentElement.childNodes[1].textContent;
    // console.log(inputBox.value);
    // console.log(e.target.parentElement.parentElement.childNodes[1]);

    e.target.parentElement.parentElement.childNodes[1].innerHTML = `<input id="input" value="${e.target.parentElement.parentElement.childNodes[1].textContent}" type="text" placeholder="Enter your task here" />`;
    console.log(e.target.parentElement.parentElement.childNodes[1]);
  } else {
    e.target.innerHTML = 'Edit';
    e.target.classList.remove('saveBtn');
    e.target.classList.add('editBtn');

    //  console.log(e.target.parentElement.parentElement.childNodes[1]);
    //  e.target.
    //  e.target.classList.toggle('saveBtn');
  }
});*/
