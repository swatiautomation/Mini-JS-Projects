// function printName(name){
//     console.log(`this is my name : ${name}`)
// }

// printName("swati");
// printName("Sharma");
// printName("Romy");
// printName("sharma");
// ********************************
// const total = function addNumbers(a,b){

//     return a+b;

// }
// console.log(total(5,10));

//****************************************** 

// const fahrenheit = function converCToF(celcius){

//     return ((celcius * 9/5) + 32)
// }

// console.log(fahrenheit(90));

// *******************************************

// const finalResult = function findOddEven(num){

//     if (num % 2 === 0){
//         return "even number";
//     }
//     else {return "odd number";}
// }

// console.log(finalResult(8))

// **********************************************

// const bigNumber = function findLargestNumber(a,b,c){

//     if (a >= b && a >= c)
//     {
//         return a;
    
//     }
//     else if (b >= c && b >= a)
//     {
//         return b;
//     }
//     else {
//         return c;
//     }
// }

// console.log(bigNumber(10,10,8));

// // OR using arrow function

// const bigNum = (a,b,c) => Math.max(a,b,c);
// console.log(bigNum(10,100,3));

// ********************************************

// count vowels in string

// const totalCount = function countVowel(str){

//     let count =0;

// for(const char of str){
//     if(char === 'a' || char === 'e' || char === 'i'|| char ==='o' || char === 'u'){
//         count ++;
//     }
// }
// return count;
// }

// console.log(`total number of vowel in the string are : ${totalCount("Hello Swati Sharma")}`);

//*************************************************************************** */

// Reverse a string

// const totalCount =function reverseString(str){

//     let reversStr = '';

//     for(const char of str)
// {

//     reversStr = char + reversStr;

// }
// return reversStr;
// }

// console.log(`Revert of string is : ${totalCount('Inuk')}`);

//*************************************************************

//check if string is palindrome or not

// function checkPalindrome (str){

//     let reversStr = '';
//     for(const char of str ){

//         reversStr = char + reversStr;

//     }
//     return str === reversStr;
// }

// console.log(`String is palindrome : ${checkPalindrome('mom')}`);

//*********************************************************** */

// sum of number in an array

// function sumOfArray (array){

//     let sum = 0;

//     for(const num of array){

//         sum = sum + num;
//     }
// return sum;
// }
// console.log(`sum of array is : ${sumOfArray([1,2,3,4])}`);

//************************************************************* */
 //find max number in an array

//  function maxNumber(array){

//     let max = array[0]; // 5

//     for (const num of array){
//         if (num > max)  //1>5
//         {
//             max  = num; //9
//             console.log(num);
//         }
//     }
//     return max;
//  }
//  console.log(`max number in array is : ${maxNumber([5,2,9,1])}`);

 //************************************************************
 
//Remove duplicate from array

// Using very basic approach

// function removeDuplicate(array){

// const uniqueArray = [];

// for(const num of array){
//     if (!uniqueArray.includes(num))
//        {
//         uniqueArray.push(num);
//        }
// }
//     return uniqueArray;
// }
// console.log(`array after removing duplicate is : ${removeDuplicate([1,2,2,3,4,4])}`);

// OR using filter

// function removeDuplicateSet(array){

//     return array.filter((value,index)=>array.indexOf(value) == index);  // 1,0 == 0 == 0  : 1
//                                                                 // 1,1 == 1 == 0   
//                                                                 // 2,2  == 2 == 2
//                                                                     // 3== 3
//                                                                     // 3 == 4
//                                                                     // 5 == 5 == 
// }
// console.log(`array after removing duplicate using set is : ${removeDuplicateSet([1,1,2,3,3,4])}`);



// OR using Set
// const removeDulicate = (array)=>{

//     return [...new Set(array)];
// }
// console.log(`array after removing duplicate using set is : ${removeDulicate([1,2,2,3,4,4])}`);

// ************************************************************
// How many times each element appears in array

// function countElement(array){

//     const count = {};

//     for(const num of array){
//         if (count[num]){
//             count[num]++;
//             console.log(count[num]);
//         }
//         else{
//             count[num] = 1; // 1 , 2

//         }
//     }
//     return count;
// }

// console.log(countElement(['a','b','a','c','b','a']));

//********  */

// How to find duplicate elements in array

// function findDuplicate(arr){
//     return arr.filter((value,index)=>arr.indexOf(value) == index);

// }
// console.log(findDuplicate([1,2,2,3,4,4,5]));

// find if the target number is present in array or not

// function findDupli(arr,target){

//     for (const num of arr){
//         if (num === target){
//             return true;
//         } 
//     }
//     return false;


// }
// console.log(findDupli([1,2,3,4,5],6));

//*************************************** */
//Print duplicate value in arra

// function printDuplicate(arr){
//     const duplicate = arr.filter((value,index) => arr.indexOf(value) !== index);
//     return duplicate;
// }
// console.log(printDuplicate([1,2,2,3,4,4,5]));
//*************************************** */

// find max and min value in array - using reduce

// array = [2,3,40,5,6,1,7,8,100];

// const maxValue = array.reduce((prev,curr)=>{
//     return prev > curr ? prev : curr;
// })

// console.log(`max value is : ${maxValue}`);

// const minFunction = (arr)=>{
//  return arr.reduce((prev,curr)=>{
// return prev < curr ? prev : curr;
//  })

// }

// console.log(`min value is : ${minFunction([1,2,3,40,5,6,7,8,100])}`);

//*************************************** */
//How to find second largest number in array and remove first largest number

// const maxValue1 = function secondLargest(arr){
//    maxNumber =  Math.max(...arr)
//    index = arr.indexOf(maxNumber);
//    arr.splice(index,1);
//    return Math.max(...arr);
// }

// console.log(maxValue1([1,2,3,4,5,16,17,8,9]));


//filter() = it will pick all matching items
// const users = [
//     {name:"swati", age:38},
//     {name:"sharma", age:35},
//     {name:"romy", age:5},
//     {name:"john", age:40}
// ];

// const filterItem = users.filter((item)=>{

//     return item.age>35;

// })
// console.log(filterItem);

// // find() = it will pick only first matching item
// const findUser = users.find((item)=>{
//     return item.age >35

// })
// console.log(findUser);

//*************************************** */

// find missing number in array of 1 to 10
// const array11 = [1,2,3,4,8,9,10];
// const missArray = [];

// const missingArray = (arr)=>{

//     const maxValue = Math.max(...arr);
//     const minValue = Math.min(...arr);

//     for(let i = minValue ; i<= maxValue ; i++){

//         if(arr.indexOf(i) < 0){

//             missArray.push(i);
//         }
//     }
//     return (missArray);
// }

// console.log(missingArray(array11));

// find odd and even number using loop

numberArray=    [1,2,3,4,5];

// const evenNumber = numberArray.filter((num)=> num % 2 ===0);
// const oddNumber = numberArray.filter((num)=> num % 2 !==0);

// console.log(oddNumber);

// console.log(evenNumber);

// find sum of all number in array
// const result1 = numberArray.reduce((prev,curr)=>{
//  sum = prev + curr;
//  return sum;

// })
// console.log(`sum of all number in array is : ${result1}`);

// find the factorial of a number

const factorial = (num)=>{
if(num === 0 || num ===1){
    return 1;
}
else{
    return num * factorial(num -1);
}
}

console.log(`factorial of number is : ${factorial(4)}`);

/** 
 * for loop
 * let fact =1;
 for (let i=0;i<=5;i++){
    fact = fact * I;
 }
    console.log(fact);
 */

// find prime number in array

array = [2,3,4,5,6,7,8,9,10];
const findPrimeNumber = (arr)=>{


     const prime = [];
for(const num of arr ){

   if(num < 2 ){
    console.log(`${num} is not prime number`);
   }
   else{
    let primeFlag = true;

    for(let i=2;i<=Math.sqrt(num);i++){
        if(num % i === 0 ){
            primeFlag = false;
            break;
        }
   }
   if(primeFlag){
    prime.push(num);
   }
}
}
return prime;
}
console.log(findPrimeNumber(array));

//************************************************************* */



console.log
console.log
console.log
console.log
console.log
console.log
let s = 'hello World';
//console.log(s.slice(2));


newString = s.charAt(0).toUpperCase() + s.substring(1);
const newValue = s[0].toUpperCase();
console.log(`${newValue}${s.slice(1)}`)
console.log(newString);


let d = new Date();

//let n = d.toDateString();

d.getMonth();
d.getFullYear();
d.getHours();
d.getMinutes();
d.getSeconds();
console.log(d.getDate());
//d = Math.floor(Date.now()/1000)
//let parsedN = parseInt(n);
//console.log(parsedN, typeof parsedN);
//console.log(n,typeof n);
//console.log(d.toString());
//console.log(d , typeof d    );

const arr = [1,2,3,4,5];
// arr.shift();
// console.log(arr)
arr.unshift(6);

// arr.push (6);
 //console.log(arr)
// arr.reverse();
// console.log(arr)
// arr.push(0);
// console.log(arr)


 const arr1 = [1,2,3,4,5];
 const arr2= [5,6,7,8,9,10]; 

//  const mergedArray = arr1.splice(4)
//  console.log(mergedArray);

 const sliceArr =arr1.slice(0,4);
    console.log(sliceArr);

 const arr3 = [...sliceArr,...arr2];
 console.log(arr3);

//  arr3.slice(5,1);
//     console.log(arr3);