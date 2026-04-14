/*const button = document.querySelector('button');
const box = document.querySelector('p');
const boxOff = document.querySelector('.off');
const div = document.querySelector('div');
const test = document.querySelector('#test');
// document.getElementById;
// document.getElementsByClassName;
// document.getElementsByTagName;
button.addEventListener('click', () => {
  box.style.backgroundColor = 'yellow';
  box.style.scale = '1';
  button.innerText = 'YEllow';
});

boxOff.addEventListener('click', () => {
  box.style.backgroundColor = 'red';
  box.style.scale = '0.5';
  //boxOff.innerText = 'Color changed';
  boxOff.textContent = 'Color changed';
});

const ele = document.createElement('p');
ele.textContent = 'Hello from heaven again';
// div.append(ele);
// div.prepend(ele);

// div.after(ele);
//div.before(ele);
//div.insertAdjacentElement('beforeend', ele);

//div.remove();

let parentNode = test.parentNode;
//console.log(parentNode);
parentNode.append(ele);

let newEle = document.createElement('div');
newEle.textContent = 'Hello from new element';

//parentNode.replaceChild(newEle, ele);
// parentNode.removeChild(newEle);

//console.log(test.attributes);
let test1 = test.getAttribute('id');
//console.log(test1);
test.setAttribute('href', 'testing');
//console.log(test1);

let href = test.getAttribute('href');
//console.log(href);
console.log(test.attributes.href.value);

//--------------------------------------------

let para = document.createElement('p');
para.innerText = 'Hi This is for testing task';
para.style.backgroundColor = 'black';
para.style.color = 'green';

div.prepend(para);

let btn = document.createElement('button');
btn.innerText = 'Click Me';

para.append(btn);

// para.setAttribute('style', 'backgroundColor:'red'')

let divEle = document.createElement('div');
divEle.setAttribute('class', `${test.getAttribute('id')} randomDiv`);
divEle.setAttribute('style', 'background-color:black;color:white');
console.log(divEle.attributes);*/

//Program ---
// let div = document.querySelector('.box');

// function changeTagName(node, newTagName) {
//   if (node instanceof Element) {
//     //  console.log('Valid node');

//     let p = document.createElement(newTagName);
//     p.innerHTML = node.innerHTML;
//     for (let attr of node.attributes) {
//       p.setAttribute(attr.name, attr.value);
//     }
//     node.replaceWith(p);
//   } else {
//     console.log('Invalid node');
//   }
// }

// changeTagName(div, 'p');

//---------------------------------------------------------

// let box = document.querySelector('.box');
// // box.setAttribute('class', 'box1');
// // box.style.color = 'green';
// box.classList.add('box1');
// box.classList.remove('box1');
// console.log(box.className);
// let res = box.classList.contains('box1');
// console.log(res);
// box.classList.toggle('box1');
// box.classList.toggle('box1');
//---------------------------------------------------------
let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let box = document.querySelector('.box');

let theme = true;
//btn.addEventListener('click', (event) => {
// console.log(event.target);
// body.classList.toggle('box1');
// if (theme) {
//   btn.classList.add('box1');
//   body.style.backgroundColor = 'black';
//   theme = false;
// } else {
//   //  btn.classList.add('box1');
//   body.style.backgroundColor = 'pink';
//   theme = true;
// }
//});
// box.addEventListener('contextmenu', () => {
//   console.log('test contextMenu');
// });
// box.addEventListener('auxclick', () => {
//   console.log('test aux click');
// });

// let add = document.querySelector('.add');
// const minus = document.querySelector('.minus');
// const counter = document.querySelector('.counter');

// let count = 0;

// add.addEventListener('click', () => {
//   count++;

//   counter.innerText = count;

//   console.log(count);
// });

// minus.addEventListener('click', () => {
//   if (count <= 0) {
//     return;
//   }
//   count--;
//   counter.innerText = count;
//   console.log(count);
// });

let form = document.querySelector('form');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let submitbtn = document.querySelector('.submitBtn');
let body1 = document.querySelector('body');
let nameVal = document.querySelector('.nameVal');
let error = document.querySelector('.error');
let child = document.querySelector('.child');
let sidebar = document.querySelector('.sidebar');
let toggle = document.querySelector('.toggle');
let password = document.querySelector('#password');
let show = document.querySelector('.showBtn');

//form.addEventListener('submit', (e) => {
// e.preventDefault();
// if (!name.value || !email.value) {
//   return;
// }

// const div = document.createElement('div');
// div.innerHTML = `
// <p> ${name.value} </p>
// <p> ${email.value} </p>
// `;
// body1.append(div);
//});

// form.addEventListener('input', (e) => {
//   console.log(name.value);
//   let nameVariable = e.target.value;
//   if (nameVariable.length <= 3) {
//     error.style.display = 'block';
//   } else {
//     error.style.display = 'none';
//   }
// });

// child.addEventListener('click', (e) => {
//   console.log(e.target.closest('.parent'));
// });

// toggle.addEventListener('click', () => {
//   console.log('clicked');
//   sidebar.classList.toggle('showsidebar');
// });
// show.addEventListener('click', () => {
//   let passwordType = password.type;
//   password.type = passwordType === 'password' ? 'text' : 'password';
//   if (passwordType === 'password') {
//     password.type = 'text';
//     show.innerText = 'Hide';
//   } else {
//     password.type = 'password';
//     show.innerText = 'Hide';
//   }
// });

const navBar = document.querySelector('nav');

window.addEventListener('scroll', (e) => {
  console.log(window.scrollY);
  if (window.scrollY > 100) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }
  // window.scrollX
});
