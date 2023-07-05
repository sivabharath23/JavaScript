function myFunction(){
 let age = 20;
if(age>=18){
    document.write("eligible for voting");
}
else if(age<=0){
    document.write("enter the valid age");
}
else{
    document.write("the person not eligible for voting");
}

}
function myFunction2()
{
    console.log(a);
    for(i=1;i<=5;i++){
        for(j=1;j<=5;j++){
            if(i===1 || i===5 || j===1 || j===5){
        document.write(i);
        }
        else{
            document.write(" ");
        }
    }
     document.write("<br>");
    }
}

function myFunction3(){
    let c1 = prompt("whats your name","age");
    //document.write(c1);
    alert("hey there's an Alert");
    // document.write(alert);
}
function myFunction4()
    {
obj = {regno:100,name:"SivaBharath",Age:20};
document.write(obj.regno);
    }

function myfunction(a,b,c,d){
    console.log(a+b+c+d);
}

myfunction(1,3,5,6);

let largecountries = ["india","pak","china","indo","russia"]
largecountries.shift()
console.log(largecountries)
let sh = largecountries.unshift("indiana")
console.log(largecountries)