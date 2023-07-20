let a = "welcome";//string literal
let b = "Bro";
let c = "This";
let d = "Siva";

//string object
let strobj = new String("welcome1");//using new keyword

//Note:All string methods return new value will not change original value;
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



const myString = new Array("Hello, World!","this Siva");//here Array is the constructor
console.log(myString);