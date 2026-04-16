import { start } from 'node:repl';

const num = [1, 2, 3, 4, 5];
const sum = (array, index) => {
  if (array.length - 1 === index) {
    return array[index];
  }
  return array[index] + sum(array, index + 1);
};
//console.log(sum(num, 0));

//================================================

const mine = {
  gold: 3,
  left: {
    gold: 2,
    left: {
      gold: 4,
    },
    right: {
      gold: 1,
    },
  },
  right: {
    gold: 5,
    right: {
      gold: 1,
    },
  },
};

const result = (mine) => {
  let total = mine.gold;

  if (mine.left) {
    total += result(mine.left);
  }
  if (mine.right) {
    total += result(mine.right);
  }
  return total;
};
//console.log(result(mine));

//================================================

const fizzbuzz = (startNum, endNum) => {
  // console.log(startNum);
  if (startNum === endNum + 1) return endNum;

  if (startNum % 3 === 0) {
    console.log('fizz');
    // return test(startNum + 1, endNum);
  }
  if (startNum % 5 === 0) {
    console.log('buzz');
    //  return test(startNum + 1, endNum);
  }
  if (startNum % 3 === 0 && startNum % 5 === 0) {
    console.log('fizzbuzz');
    // return test(startNum + 1, endNum);
  }

  //return startNum;
  console.log(startNum);
  fizzbuzz(startNum + 1, endNum);
};

//fizzbuzz(1, 10);

//================================================
const test = (str) => {
  // let reverse = '';
  if (str.length === 1 || str.length === 0) return true;
  if (str.length === 2) return str[0] === str[1] ? true : false;
  if (str[0] !== str[str.length - 1]) return false;

  return test(str.slice(1, str.length - 1));

  // reverse += str[str.length - 1];
  // console.log(reverse);
  // return reverse + test(str.slice(0, str.length - 1));
};

console.log(test('hello'));
console.log(test('mom'));
console.log(test('racecar'));

//================================================

const test1 = (arr) => {
  const result = [];

  for (const element of arr) {
    if (Array.isArray(element)) {
      const flattened = test1(element);
      // for (const item of flattened) {
      //   result.push(item);
      // }
      result.push(...flattened);
    } else {
      result.push(element);
    }
  }
  return result;
};
// console.log(test1([1, 2, 2]));
// console.log(test1([1, 2, 3, [1, 2, 3]]));
// console.log(test1([1, [2, 3], 4]));
// console.log(test1([1, [2, [3, 4]], 5]));

//================================================

const flattenObject = (obj) => {
  let result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object') {
      const flattened = flattenObject(value);
      result = { ...result, ...flattened };
    } else if (Array.isArray(value)) {
      const flattened = test1(value);
      if (typeof flattened.value === 'object') {
        const nestedFlattened = flattenObject(flattened);
        result = { ...result, ...nestedFlattened };
      } else {
        result[key] = flattened;
      }
    } else {
      result[key] = value;
    }
  }

  return result;
};

console.log(
  flattenObject({
    id: 1,
    name: [
      {
        test: 'John',
        ans: [
          {
            node: 'Doe',
            hello: true,
          },
        ],
      },
    ],
    happy: true,
    address: {
      street: '123 Main St',
      city: 'New York',
      country: {
        code: 'US',
        zip: '10001',
        name: {
          official: 'United States of America',
          common: [[1, [2, [3, 4]], 5]],
        },
      },
    },
  }),
);
console.log(flattenObject({ a: { b: { c: { d: 1 } } }, e: 2 }));

//================================================

const constuctDom = (node) => {
  if (node.innerText) return node.innerText;

  let html = '';
  for (const ele of node.childNodes) {
    html += `<${ele.nodeName}>`;
    html += constuctDom(ele);
    html += `</${ele.nodeName}>`;
  }
  return html;
};

const document = {
  childNodes: [
    {
      nodeName: 'html',
      childNodes: [
        {
          nodeName: 'body',
          childNodes: [
            {
              nodeName: 'div',
              innerText: 'Hello World',
            },
          ],
        },
      ],
    },
  ],
};

console.log(constuctDom(document));
