const createNoteButton = document.querySelector('.create-note');
const noteText = document.querySelector('#note-text');
const checkIcon = document.querySelector('#check-icon');
const xIcon = document.querySelector('#x-icon');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
var i = 0;

xIcon.addEventListener('click', () => {
  typeNote();
});

checkIcon.addEventListener('click', () => {
  if (noteText.value.trim() === '') {
    alert('Please enter some text for the note.');
    return;
  }
  createNote();
});

createNoteButton.addEventListener('click', () => {
  typeNote();
});

function typeNote() {
  if (container3.style.display === 'none') {
    container3.style.display = 'block';
  } else {
    container3.style.display = 'none';
  }
}
function createNote() {
  noteTextValue = noteText.value;

  var node0 = document.createElement('h1');
  var node1 = document.createElement('div');

  node0.innerHTML = noteTextValue;
  node0.setAttribute(
    'style',
    "width: 300px; height: 300px; padding: 25px; margin-top: 20px; margin-left: 10px; overflow: hidden; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 26px;box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);"
  );

  node0.style.margin = margin();
  node0.style.backgroundColor = color();
  node0.style.transform = `rotate(${rotate()})`;

  node1.appendChild(node0);
  container2.appendChild(node1);
  noteText.value = '';

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
  });
}
function margin() {
  var randomMargin = ['-5px', '5px', '10px', '15px', '20px', '25px', '30px'];
  return randomMargin[Math.floor(Math.random() * 20)];
}
function rotate() {
  var randomRotate = [
    '-5deg',
    '5deg',
    '-10deg',
    '15deg',
    '-2deg',
    '25deg',
    '30deg',
  ];
  return randomRotate[Math.floor(Math.random() * 20)];
}

function color() {
  var randomColor = [
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
}
