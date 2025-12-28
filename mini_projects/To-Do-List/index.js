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
  divParent.innerHTML = `<div> ${taskInput.value} </div>`;
  checkIcon.className = 'fa-solid fa-circle-check';
  checkIcon.style.color = 'lightgray';

  checkIcon.addEventListener('click', function () {
    if (checkIcon.style.color === 'lightgray') {
      checkIcon.style.color = 'green';
    } else {
      checkIcon.style.color = 'lightgray';
    }
  });

  divChild.appendChild(checkIcon);

  delIcon.className = 'fa fa-trash';
  delIcon.style.color = 'lightgray';

  delIcon.addEventListener('click', function () {
    toDoContainer.removeChild(divParent);
    // divParent.remove();
  });

  divChild.appendChild(delIcon);

  divParent.appendChild(divChild);
  toDoContainer.appendChild(divParent);

  taskInput.value = '';
}
