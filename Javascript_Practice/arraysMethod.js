//map
//map is used to iterate over an array and modify the array elements
let numbers= [1,2,3]
let double = numbers.map((e)=> e * 2);
console.log(double);


const names = ["john", "jane", "doe"];
names.map((name)=>{ 
    name = name.toUpperCase();
console.log(name);
})

const filteredName = names.filter ((names) => {
    return names.startsWith("j");
})

console.log(filteredName);
//map always return new array

//filter
//filter is used to iterate over an array and filter out elements based on a condition
 let array = [1,2,3,3,3,3,4,5,6]
 let ar = array.filter((e1)=> e1%2===0);
 console.log(ar);

//reduce
//reduce is used to reduce the array to a single value
let sum=array.reduce((prev,curr)=> prev+curr);
console.log(sum);

//find max number in array
let array1 = [10,20,30,40,50];
let maxnum= array1.reduce((max,num)=>{

    return max > num ? max: num;
    // if(num>max)
    // {
    //     return num;
    // }
    // else{
    //     return max;
    // }
});
console.log(`max number is : ${maxnum}`);

//find minimum number in array
let minnum=array1.reduce((max,num)=>{
    if(num<max)
    {
        return num;
    }
    else{
        return max;
    }
},array1[0]);
console.log(minnum);

let cartItem=[{name:"john",price:500},{name:"john1",price:100},{name:"john2",price:5000},{name:"john3",price:50}]
let totalcost=cartItem.reduce((total,item)=>total+item.price,0);
console.log(totalcost);

/////////////////////////////////

const arr = [1,2,3,3,3,3,4,5];
new Set(arr);

console.log(new Set(arr));
console.log(...new Set(arr))