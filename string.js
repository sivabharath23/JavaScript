let a = "welcome";//string literal
let b = "Bro";
let c = "This";
let d = "Siva";

//string object
let strobj = new String("welcome1");//using new keyword

console.log(a);
console.log(a.concat(b));
// console.log(a.split(2));
console.log(a.charAt(0));
console.log(b.charCodeAt(2));
console.log(c.indexOf("s"));
console.log(c.slice(0,2));
console.log(a.lastIndexOf("e"));
console.log(c.toLowerCase());
console.log(c.toUpperCase());
console.log(a.replace('e','b'))

let arr = [1,3,5,6,8,9,11,10,33,64];
for(let i=0;i<arr.length;i++){
   if(arr[i]==10){
        console.log("i got 10");
    }
}

const myString = new Array("Hello, World!");//here Array is the constructor
console.log(myString);