// const prompt = require('prompt-sync')();
// import fs from 'fsPromises';
import { input } from '@inquirer/prompts';

//const name = prompt('What is your name? ');
const name = await input({ message: 'What is your name? ' });

//name === '' ? console.log('Invalid input.') : console.log(`Hello, ${name}!`);

while (name === null || name !== String) {
  const name = await input({ message: 'What is your name? ' });
  if (name !== '') {
    console.log(`Hello, ${name}!`);
    break;
  }
}

// var age = readline.question('What is your age?');
// console.log(`You are ${age} years old.`);

// WScript.StdOut.Write('Please enter your name..');
// const name1 = WScript.StdIn.ReadLine();
