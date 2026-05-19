const createNoteButton = document.querySelector('.create-note');
const noteText = document.querySelector('#note-text');
const checkIcon = document.querySelector('#check-icon');
const crossIcon = document.querySelector('#x-icon');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');

let i = 0;
let notes = [];

const removeNote = () => {
  container3.style.display === 'none'
    ? (container3.style.display = 'block')
    : (container3.style.display = 'none');
};
const createNoteElement = (text) => {
  const node0 = document.createElement('h1');
  const node1 = document.createElement('div');

  node0.innerHTML = text;
  node0.setAttribute(
    'style',
    "width: 300px; height: 300px; padding: 25px; margin-top: 20px; margin-left: 10px; overflow: hidden; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 26px;box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);",
  );

  node0.style.margin = margin();
  node0.style.backgroundColor = color();
  node0.style.transform = `rotate(${rotate()})`;

  node1.appendChild(node0);
  container2.appendChild(node1);

  node1.addEventListener('mouseenter', () => {
    node1.style.transform = 'scale(1.1)';
    node1.style.transition = 'transform 0.2s';
  });
  node1.addEventListener('mouseleave', () => {
    node1.style.transform = 'scale(1)';
    node1.style.transition = 'transform 0.2s';
  });
  node1.addEventListener('dblclick', () => {
    container2.removeChild(node1);
    deleteLocalStorageNotes(node1);
  });

  return node1;
};
const createNote = () => {
  const noteTextValue = noteText.value.trim();
  createNoteElement(noteTextValue);
  noteText.value = '';
  saveToLocalStorageNotes(noteTextValue);
};
const margin = () => {
  const randomMargin = ['-5px', '5px', '10px', '15px', '20px', '25px', '30px'];
  return randomMargin[Math.floor(Math.random() * 20)];
};
const rotate = () => {
  const randomRotate = [
    '-5deg',
    '5deg',
    '-10deg',
    '15deg',
    '-2deg',
    '25deg',
    '30deg',
  ];
  return randomRotate[Math.floor(Math.random() * randomRotate.length)];
};
const color = () => {
  const randomColor = [
    '#ca2c09ff',
    '#0d84edff',
    '#ee8c0bff',
    '#0aefa3ff',
    '#da470dff',
    '#8a2be2',
    '#a52a2a',
    '#4a18eeff',
    '#0ee8efff',
  ];
  if (i > randomColor.length - 1) {
    i = 0;
  }
  return randomColor[i++];
};
const saveToLocalStorageNotes = (key) => {
  notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.push(key);
  localStorage.setItem('notes', JSON.stringify(notes));
};
const getLocalStorageItems = () => {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.forEach((element) => {
    createNoteElement(element);
  });
};
const deleteLocalStorageNotes = (key) => {
  notes = JSON.parse(localStorage.getItem('notes')) || [];

  const notesText = key.children[0].innerHTML;
  console.log(notesText);
  const index = notes.indexOf(notesText);
  console.log(index);
  notes.splice(index, 1);

  localStorage.setItem('notes', JSON.stringify(notes));
};
document.addEventListener('DOMContentLoaded', () => {
  getLocalStorageItems();
});
crossIcon.addEventListener('click', () => {
  removeNote();
});

checkIcon.addEventListener('click', () => {
  if (noteText.value.trim() === '') {
    alert('Please enter some text for the note.');
    return;
  }
  createNote();
});

createNoteButton.addEventListener('click', () => {
  removeNote();
});
