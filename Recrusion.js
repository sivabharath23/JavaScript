
//Function calling itself is called Recrusion
let number = 1
let show = () => {
console.log("HI" , number)
number++
if(number<=500){
    show(); 
}
}
show();

let n=1
let x = ()=>{
    console.log("hi")
    n++;
    if(n<=5){
    x();
    }
}
x();