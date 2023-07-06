
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