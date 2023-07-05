let a = 10;
let b = 50;

//Normal Function
function one(){
    return "Hello world!";
}
let A = one();//declaring function to variable A
console.log("Normal Function : "+A);
 
//Function Expression
let myfunc=function(){
    let b = 20;
    return a +b;
}
console.log("Function Expression : "+myfunc());

//Arrow Function
let myfu = (x,y)=> x+y;
console.log("Arrow Function : "+ myfu(5,5));


let x = (a,b)=>{
    if(a>=0 && b>=0){
        return a+b;
    }
    else{
        console.log("enter the positive value");
    }
}
console.log(x(1,5));

//method function

//IIF function
( function(user){
    console.log(user);
})('siva');


