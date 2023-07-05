// let arr =[0,1,3,54,6,868];
// console.log(arr[0]);
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]==5){
//         console.log("the arr has value 5");
//     }
//     // console.log(arr[i]);
// }


// ///array constructor
// let arrcons = new Array("siva","bharath");//here Array is the constructor
// console.log("Array Cons :",arrcons);


//slicing method
let array = new Array([1,3,5,46,66])
console.log(array);

let a = [8,9,10,11,12,13]
let sl = a.slice(1,4)//only display index 1 to lenght 3
console.log("Sliced Part :",sl);
console.log("Original Array :",a);

//splice method
let arrvar =[23,76,89,46,66,88,44];
let arrvarsp = arrvar.splice(1,2,'a','b');//change the value(start,deletecount,valu1,value2);
console.log("spliced Part :",arrvarsp)
console.log("Original Array :",arrvar);

//Map method
let arrobj = [22,"siva",222,80,"bharath"]
    console.log(arrobj.map(greet(0,2)));

let greet = (a,b)=> a+b;