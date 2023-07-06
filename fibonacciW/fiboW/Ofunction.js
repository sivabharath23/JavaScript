//Fibonacci series of 1 to 10;

//without method only loop
let last =0;
let curr = 1;
let result;
for(let i=0;i<=10;i++){
    result = last + curr;
    last = curr
    curr = result;
    console.log(result);
}