function checkAge(age){
    if(age>18)
    {
        console.log("you can vote!!");
    }else
    {
        console.log("you can not vote!!");
    }
}
checkAge(20);

function checkGreetingMessage(time){
    if(time<12){
        console.log("Hello Morning");

    }
    else if(time>12 && time <17){
        console.log("Hello Afternoon");

    }else{
        console.log("Hello Goodnight");
    }
}
checkGreetingMessage(18);

function checkGrade(score){
    let grade;
    if(score >=90){
        grade='A';
    }else {
        if(score >=80){
        grade='B';
    }
    else
    {if(score>=70)
        {grade='C';}
else
    {grade='D';}
}
  
}
console.log(grade);
}

checkGrade(80);

////////////////////////////////////////

let browser = "chrome";
if(browser === "chrome"){
    console.log("launch chrome");
}
if(browser === "edge"){
    console.log("launch edge");
}
if(browser === "firefox"){
    console.log("launch firefox");
}
else{console.log("Please pass the right browser");}
