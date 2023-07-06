//recrusion or Recrusive Approach
let func = ()=>{
    console.log("Recrusion");
    func();
}
func();

//Recrusion Control 
let N = 1;
let x = ()=>{
    console.log("Controling Rectrusion",N)
    N++;// incrementing for if condition
    if(N<=10)
    x();
   }
x()


//using infinite logic no recrusion or iterative logic
let a = ()=> {
    console.log("using for loop")
    }
let n=1
for(let i=0;i<=n;i++){
    a();
    n++;
}
