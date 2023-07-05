let setobj1 = new Set([1,3,4,5]);//can directly passing values  else we add with .add() method
console.log(setobj1)


let setobj = new Set();
console.log(setobj)

setobj.add('blue')
setobj.add('yellow');
console.log(setobj);

setobj.add(123);
console.log(setobj);

setobj.delete(123);
console.log(setobj)

console.log(setobj.size);//no arguments in size returns length of set

console.log(setobj.has('yellow'));//returns true / false if the value in the set

console.log(setobj.values())//Returns iteratble values in the set

// console.log(setobj.forEach());
