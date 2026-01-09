let myArray = [];
let num = [1,2,2,4];
let fruits = ["orange","apple","banana","apple","orange","grapes"];
let newArray = fruits.unshift('Mango')
//console.log(newArray);
// console.log(fruits)
// push = fruits.push('Pineapple')
// console.log(fruits)

// pop = fruits.pop();
// console.log(fruits);

// newArray1 = [...fruits,...num]
// console.log(newArray1)


newArray2 = num.splice(1,2);
console.log(newArray2);
console.log(num);
//console.log(num.shift(1,1));

let pop = [5,1,2,3,4,5,5];
let newpop=pop.slice(0,4);
console.log(newpop);
console.log(pop)
console.log("-----------------------------------");


const result1=function (e){
    return e*2;
}
console.log(result1(5));

const result = (e)=> e*2;
console.log(result(5));

//shift
//shift is used to remove the first element from an array
// let f = fruits.unshift();
// console.log(f)
// console.log(fruits)

/*
console.log(fruits.sort());

console.log("first index of apple :" + fruits.indexOf("apple")); //1
console.log("last index of apple :" + fruits.lastIndexOf("apple")); //undefined
console.log("first index of orange :" + fruits.indexOf("orange")); //1
console.log("last index of orange :" + fruits.lastIndexOf("orange")); //undefined


console.log("first index of banana :" + fruits.indexOf("banana")); //2
console.log("last index of banana :" + fruits.lastIndexOf("banana")); //2

console.log("first index of grapes :" + fruits.indexOf("grapes")); //1
console.log("last index of grapes :" + fruits.lastIndexOf("grapes")); //undefined




const recurring = fruits.filter((item,index,allFruits)=>{
    console.log(item, index, allFruits);
    console.log("count of each item :" );
    return allFruits.indexOf(item)=== index && allFruits.lastIndexOf(item)==index;

})

switch(fruits){
    case "banana":
        console.log("banana is present");
        break;
default:
    console.log("banana is not present");
}
console.log(fruits.length);

console.log("Non recurring elements :"+ recurring);

//array to string
let fruitString=fruits.toString();
console.log(fruitString);
console.log(typeof fruitString);

//concat
let veg = ["carrot","potato"];
let allFood = fruits.concat(veg);
console.log(allFood);

//push
//push is used to add elements to the end of an array
fruits.push("kiwi");
console.log(fruits);



//pop
//pop is used to remove the last element from an array
fruits.pop("kiwi");
console.log(fruits)

//shift
//shift is used to remove the first element from an array
let f = fruits.shift();
console.log(f)
console.log(fruits)

//unshift
//unshift is used to add elements to the beginning of an array
let f1=fruits.unshift("kiwi","pineapple");
console.log(f1);
console.log(fruits);

//splice
//splice is used to add or remove elements from an array
fruits.splice(1,2,"dog");
console.log("splice method " + fruits);

//slice
//slice is used to create a new array from an existing array
let pop = [5,1,2,3,4,5,5];
let newpop=pop.slice(0,2);
console.log(newpop);
console.log("-----------------------------------");


//concat
//concat is used to merge two or more arrays
let ab=pop.concat(6,7,9);
console.log(ab);

//indexOf
//indexOf is used to get the index of an element in an array
let index=pop.indexOf(4);
console.log(index);

//get indext of second element
let index1 = pop.indexOf(5,2)
console.log(index1);

//includes
//includes is used to check if an element is present in an array
let flag = pop.includes(4,1)
console.log(flag);

//forEach
//forEach is used to iterate over an array
let n = [1,2,3,4,5,6,7]
n.forEach((number) =>{
    console.log("normal for loop : " +number * 2);
})

for(const number of n){
    console.log("advance for loop : " + number * 2);
}


//practiceQuestion

let companies = ["Google","Facebook","Apple","Microsoft","Netflix"];
//companies.shift();
//console.log(companies);
//companies.splice(0, 1);
//console.log(companies);
companies.splice(2, 1,"ola");
console.log(companies);
companies.splice(2, 1, "Amazon");
companies.push("Amazon");
console.log(companies);
*/

// const library = [

//     {

//         title : "The Road Ahead",
//         author : "Bill Gates",
//         status : {
//             own : true,
//             reading: false,
//             read : false
//         }
//     },
//     {

//         title : " sThe Road Ahead",
//         author : "will Gates",
//         status : {
//             own : true,
//             reading: false,
//             read : false
//         }
//     },
//     {

//         title : "sThe Road Ahead",
//         author : "qill Gates",
//         status : {
//             own : true,
//             reading: false,
//             read : false
//         }
//     }

// ]

//  library[0].status.read = true;
//   library[1].status.read = true;
//    library[2].status.read = true;

//    library[0].title = "The Road Aheaad";
//    library[1].title = "The Road Aheadd";
//    library[2].title = "The Road Aheaaaad";

//    const {title : firstBookTitle} = library[0];
//    console.log(firstBookTitle);

//    const libraryJSON = JSON.stringify(library);
//    console.log(libraryJSON);

//    const parsedLibrary = JSON.parse(libraryJSON);
//    console.log(parsedLibrary);

//   // console.log(library);

// //   function getCelcius(tempInFahrenheit){

// //     return (tempInFahrenheit - 32) * 5/9;
// //   }
// //   console.log(getCelcius(100));
// //   console.log(`C\xB0 : ${getCelcius(100)}`);

//   const getCelcius = tempInFahrenheit => (tempInFahrenheit - 32) * 5/9;
//   console.log(`The Temperature is : ${getCelcius(32)} \xB0C`);


//   function minMax(...arr){
// const min =Math.min(...arr);
// const max = Math.max(...arr);
// return {min, max};

//   }
//   console.log(minMax(1,2,3,4,5,6,7,8,9));

// ((length,width)=>{
// const area = length * width;
// console.log(`Area of rectangle is : ${area}`);
// })(5,10);


// function calulator(num1,num2, operation){

//     switch (operation){
//         case '+':
//         return num1 + num2;
//         case '-':
//         return num1 - num2;
//         case '*':
//         return num1 * num2;
//         case '/':
//         return num1 / num2;
//         default:
//             return "Invalid operation";

//     }

// }
// console.log(calulator(10,5,'+'));
// console.log(calulator(10,5,'-'));
// console.log(calulator(10,5,'*'));
// console.log(calulator(10,5,'/'));
// console.log(calulator(10,5,'%'));

console.log('-------------------FizzBuzz-------------------');

// for(let i=1;i<=100;i++){

//     if ( i % 15 === 0 ){
//         console.log("multiple of 3 and 5 : FizzBuzz")

//     }

//     else if(i % 3 === 0){
//         console.log("multiple of 3 : Fizz")
//     }
//     else if(i % 5 === 0){
//         console.log("multiple of 5 : Buzz")
//     }
//     else{
//     console.log(i);
//     }
// }


let i =1;
while(i <= 100){

    if ( i % 15 === 0 ){
        console.log("multiple of 3 and 5 : FizzBuzz")

    }
    else if(i % 3 === 0){
        console.log("multiple of 3 : Fizz")
    }
    else if(i % 5 === 0){
        console.log("multiple of 5 : Buzz")
    }
    else{
    //console.log(i);
    }

    i++;

}


const people = [
    {
firstName: 'John',
lastName: 'Doe',
email: 'john.doe@example.com',
phone: '123-456-7890',
age: 28
}, {
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice.smith@example.com',
    phone: '987-654-3210',
    age: 25
}, {        
    firstName: 'Bob',
    lastName: 'Brown',
    email: 'bob.brown@example.com',
    phone: '555-555-5555',
    age: 30
}, {
    firstName: 'Charlie',
    lastName: 'Davis',
    email: 'charlie.davis@example.com',
    phone: '444-444-4444',
    age: 35
}]

const youngPeople = people
.filter((p)=> (p.age <= 25))
.map( (p) => ({
name: p.firstName + " " + p.lastName,
email: p.email
}));

console.log(youngPeople);



const array = [1,-2,3,-4,5,-6,7,-8,9,-10];
let sum =0;
const positiveArray = array
.filter((num)=> num > 0)
.reduce((acc,curr)=>acc +=curr,0)
console.log(positiveArray);


const words = ["level", "world", "radar", "hello", "madam", "python"];

const capitilizedLetter = words.map((word)=>{ 
    return word.charAt(0).toUpperCase() + word.substring(1)})
console.log(capitilizedLetter);