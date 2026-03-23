const inputBox = document.querySelector('#inputBox');
const addBtn = document.querySelector('.addBtn');
const resultContainer = document.querySelector('.resultContainer');

let list = [
  // {
  //   id: 1,
  //   task: 'study',
  // },
  // {
  //   id: 2,
  //   task: 'Read',
  // },
  // {
  //   id: 3,
  //   task: 'Sleep',
  // },
];

resultContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('taskDetails')) {
    console.log(e.target);
    e.target.style.textDecoration = 'line-through';
  }
});

function randerList(arr) {
  resultContainer.innerHTML = '';
  arr.map((item) => {
    const ele = document.createElement('div');
    ele.classList.add('taskDetails');
    ele.innerHTML = `
   <div>${item.task}</div>
          
  `;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Cross';
    ele.append(deleteBtn);

    // ele.onclick = () => {
    //   handleDelete(item.id);
    // };

    deleteBtn.addEventListener('click', () => {
      handleDelete(item.id);
    });
    resultContainer.append(ele);
  });
}

randerList(list);

function handleClick() {
  let obj = {
    id: Date.now(),
    task: inputBox.value,
  };
  list.unshift(obj);
  console.log(list);
  randerList(list);
  inputBox.value = '';
}

function handleDelete(id) {
  const filteredResult = list.filter((item) => {
    return item.id !== id;
  });
  list = filteredResult;
  randerList(list);
}
addBtn.addEventListener('click', handleClick);
