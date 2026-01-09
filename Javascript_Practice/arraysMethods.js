//every()
//every() method checks if all elements in an array pass a test (provided as a function).
let num = [1,2,3,4,5,30,5];
let flag = num.every((e)=> e < 10);
console.log(flag);

//some() 
//some() method checks if any of the elements in an array pass a test (provided as a function).
let flag1=num.some((j)=>  j % 2  === 0);
console.log(flag1);

//find()
//filter() method creates a new array with all elements that pass the test implemented by the provided function.
let total1= num.find((t)=> t % 2 === 0);
console.log(total1);

//indexOf
//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let indexs=num.indexOf(1);
console.log(indexs);

//lastIndexOf
//lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
let last=num.lastIndexOf(5);
console.log(last);

//reverse
//reverse() method reverses the elements in an array.
let rev=num.reverse();
console.log(rev);

//sort
//sort() method sorts the elements of an array in place and returns the sorted array.
let s =num.sort();
console.log(s);
