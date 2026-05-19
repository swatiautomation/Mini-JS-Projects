const product = {
    name : "pen",
Title : "parker jotter",
Price : 270,
rating :4.5,
offer : 5
}

/***
 * Accessing object properties
 * 1. Dot notation
 * 2. Bracket notation
 */

console.log(product)
console.log(typeof product["offer"]);

const profile ={
    name : "swati sharma",
    post :195,
    followers : 1500,
    following : 300,
    info: "apna college apna city",
    ifFollow : true

}

console.log(typeof profile["followers"]);

let a = 10;
let b = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

// console.log(a,b)

// console.log(++a); //11
// console.log(a)
// console.log(a++); //11
// console.log(a); //12

// console.log(--a); //11
// console.log(a--); //11
// console.log(a); //10

// console.log(b); //12
// console.log(b++); //
// console.log(++b);

// console.log(--b); // 21
// console.log(b--) //21
// console.log(b); //20

// console.log(a+=4) //14
// console.log(b-=4) //16
// console.log(a*=2) //28
// console.log(b/=2) //8
// console.log(a%=3) //1
// console.log(b**=3) //512

// console.log(a==b); //false
// console.log(a!=b);

// let c = "10"
// let d = 10
// console.log(c==d); //true
// console.log(c===d); //false
// console.log(c!==d); //true

//logical operators
let c = 10;
let  d = 20;
let cond1 = c !== d;
let cond2 = c < d;
console.log(cond1 && cond2) //true
console.log(cond1 || cond2) // true
console.log(!cond1) //false
console.log(!cond2) //false

//conditional satatements

let age = 10
let mode = "dark mode";
let colour ;


if(mode === "dark mode"){
    colour = "black";
}
else{
    colour = "white";   
}

console.log("The colour is :" + colour);


if (age > 18){
    console.log("You are eligible to vote");
}
else if(age ===10){
    console.log("You are a baby");
}

else{
    console.log("You are not eligible to vote");
}
let number = 7;

if (number % 2 === 0){
    console.log("Even number");

}
else{
    console.log("Odd number");
}



//ternary operator
let room = 10;

(room > 10) ? console.log("large room") : console.log("small room");

//age > 19 ?console.log("eligible to vote") : console.log("not eligible to vote");
let result=age >= 10 ?"adult": "not adult"
console.log(result);
let num = 5

const result1= num % 2=== 0 ? "even number" : "odd number   "
console.log(result1);


const input = 15;
const result3= input % 5 === 0 ? "multiple of 5" : "not a multiple of 5";
console.log(result3);

let scrore = 100
let grade;

if(scrore >=90 && scrore <=100)
{
    console.log("A grade");
    grade = "A";
    }
else if(scrore >=70 && scrore <=79)
{
    console.log("B grade");
    grade = "B";
}else if(scrore >=60 && scrore <=69)
{
    console.log("C grade");
    grade = "C";
}else if(scrore >=50 && scrore <=59){
    console.log("D grade   ");
    grade = "D";
}
 
console.log("Your grade is :" + grade);

let y =0;

while (y<=6){
  
     console.log(y);
    y++;

}
  console.log(y);

  let z=0;

  do{
    console.log(z);
    z++;
  }
  while(z<=5);
 

  //for of

  let str = "hello";
  let length = 0;
  for(let char of str){
    length ++;

    // console.log(char);
    // console.log(char.toUpperCase());
    // console.log(str.indexOf(char));
    
  }
  console.log("Length of string is :" + length);

  //for in loop

  const student={

    name : "swati",
    age : 30,
    city : "Reading",
  }

  for(let key in student){
  //  console.log(key);
    console.log(student[key]);
  }

  //print even number from 1 to 100

  for (let i=0;i<=100;i++){

//console.log(i);
if (i % 2 !== 0){
    console.log("even number :" + i);
}
  }

//   const result9=function evenNumber(number){
//     return number % 2 === 0 ?true: false;
    

//   }
//   console.log(result9(10));
 

//practice questions
 let gameNumber = 25;

 let userNumber = 25

 while(userNumber !== gameNumber){
    console.log("try again");
    userNumber++;
 }
 console.log("you win the game");


 //String

 let string= "Swati Sharma";

 string.length; //12
 console.log(string.length);

 string.indexOf("S"); //0
 console.log(string.indexOf("S"));

 string.lastIndexOf("S"); //10
 console.log(string.lastIndexOf("S"));

 string.toUpperCase(); //"SWATI SHARMA"
 string.toLowerCase(); // swati sharma

 string.trim(); // "Swati Sharma"
 console.log(string.trim());

 string.slice(6,12); // "Sharma"
 console.log(string.slice(6,12));

 string.concat(" from Reading"); // "Swati Sharma from Reading"
 string.replace("Swati","Singh"); // "Swati Singh"
 console.log(string.replace("Swati","Singh"));

 const newStr=string.replaceAll("S","s");
 console.log(newStr);

 string.charAt(3);
    console.log(string.charAt(3));


 let obj = {

    price : 200,
    name : "Pen"
 }


 // \n \t
 console.log(`name of object is : ${obj.name} and \t price is : ${obj.price}`)

 console.log(typeof obj.price);

 //practice question 2

 let fullName = "Swati Sharma";

 let username = fullName.replace(' ','');
 username.startsWith('@');
 stringLength = username.length;
 //console.log(stringLength);

// console.log(username);

let finalUsername = '@'+username+stringLength;
console.log(finalUsername);

//array

const marks = [23,45,67,89,90];

console.log(marks);

let sum=0;
for(let mark of marks){
  //  console.log(mark);
sum = sum+mark;
//console.log(avg);


}


console.log("Average marks :" + sum/marks.length);
console.log(typeof marks);

console.log(marks[0]);

//practice question 3

let price = [250,450,150,890,670];
let offer= 0.1;
let total =0;
let index=0;

// for(let p of price){

// reducedValue = p*offer;
// console.log("Reduced value :" + reducedValue);
// price[index] = price[index] - reducedValue;
// console.log("Offer price :" + price[index]);
// index++;


// }
// console.log("Total offer price :" + price);

for(let i =0 ; i<price.length; i++){
    reducedValue = price[i]*offer;
    price[i]-= reducedValue;
}
console.log("Final offer price :" + price);


