const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    DOB: '1990-05-15',
    department: 'Engineering',
    salary: 60000,
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    DOB: '1985-10-30',
    department: 'Marketing',
    salary: 55000,
  },
  {
    firstName: 'Michael',
    lastName: 'Johnson',
    DOB: '1978-03-22',
    department: 'Sales',
    salary: 70000,
  },
  {
    firstName: 'Emily',
    lastName: 'Davis',
    DOB: '1992-07-12',
    department: 'Engineering',
    salary: 65000,
  },
  {
    firstName: 'Daniel',
    lastName: 'Wilson',
    DOB: '1988-11-05',
    department: 'HR',
    salary: 52000,
  },
];

// 1. Calculate the average age of all people in the array

let add = 0;

for (let i = 0; i < people.length; i++) {
  if (people[i].salary == undefined) continue;
  add += Number(people[i].salary);
}
console.log(add / people.length);

// let acc = 0;
const reduce = people.reduce((acc, curr) => acc + Number(curr.salary), 0);
console.log(reduce / people.length);

// 2. Find the person with the highest salary

let highSal = 0;

people.forEach((p) => {
  p.salary > highSal ? (highSal = p.salary) : null;
});
console.log(highSal);

//3. Find minimum salary

let minSal = 0;

people.forEach((p) => {
  p.salary < minSal || minSal === 0 ? (minSal = p.salary) : null;
});
console.log(minSal);

// combine firstname and lastname into fullname and add it to each object

const name1 = people.forEach((p) => {
  p.fullName = `${p.firstName} ${p.lastName}`;
});

console.log(people);

//find em0ployees in engineering department

const engineeringEmployees = people.filter((p) => {
  p.department === 'Engineering' ? console.log(p.fullName) : null;
});

console.log(engineeringEmployees);

// sort people who are older than 30 years

const date = new Date().getFullYear();
const oo = people.filter((p) => {
  console.log(date - p.DOB.split('-')[0]);
  console.log(date - p.DOB.split('-')[0] < 40 ? p.fullName : null);
});

console.log(oo);

// let year = [];
// sort by people in youngest to oldest
// people
//   .forEach((p) => {
//     year.push(date - p.DOB.split('-')[0]);

//     // console.log(year);
//     // const birthYear = p.DOB.split('-')[0];
//     // console.log(birthYear);
//   })
//   .sort((a, b) => a - b);
// console.log(people.year);

const rpeople = people.sort((a, b) => {
  return new Date(a.DOB) - new Date(b.DOB);
});

console.log(rpeople);

// sort by people in oldest to youngest

const rpeople2 = people.sort((a, b) => {
  return new Date(b.DOB) - new Date(a.DOB);
});
console.log(rpeople2);
