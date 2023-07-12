//Fibonacci series
//F(0) = 1;
//F(0) = 1;


//Recursive method
let FC = (a)=>{
    if(a===0 || a===1){
        return a;
    }
    return FC(a-1)+FC(a-2); //formulae for Fibonacci Series (input value shoud be greater than 1)

}
console.log(FC(3));

console.log("---------------------------------------");

//loop method
let loopMeth = (N1) => {
    if(N1===0 || N1==1){
        return N1;
    }
    let lastNum = 0;
    let currentNum = 1;
    let output;

    for(let i=2;i<=N1;i++){
        output = lastNum+currentNum;
        lastNum = currentNum;
        currentNum = output;
        
    }
    return output;
}



console.log(loopMeth(0))


  