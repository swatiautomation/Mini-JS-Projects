var x = 10;
var y = 20;
function test(){
    var z=30;
}

console.log("value of x is:" + x);
console.log("value of z :" +test.z);


//redeclare variable

var browser = "firefox";
var browser = "chrome";
browser = "edge";
console.log("value of browser :" + browser);

//
var g;
console.log(g);
var g = "hello world";
console.log(g);

//problem with var 
// var a= "hello hi!!";
// var b = 4
// if(b<5){
//     var a= "hello bye!!!";
// }
// console.log(a);

//let
//scope : block scope
let a= "hello hi!!";
let b = 4
if(b<5){
    let msg = "hey";
    console.log(msg);
    let a= "hello bye!!!";
}
console.log(a);
//console.log(msg);

//var can be redeclared and reintialised but let can be redeclared but can't be reintialised

//const = to provide constant values

const days = 7;
// days = 4;
console.log(days);


