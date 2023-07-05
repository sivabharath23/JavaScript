//array sorting in asc / des
let A = [1,22,2,5,4,67,855,20,80,56,23,11]
console.log(A.sort());//wont sort because it has single & double digit value

//here's some trick to achieve
A.sort((a,b) => a-b);//sorting Ascenṇding formula/logic/trick  
console.log("Ascending :",A);


 A.sort((a,b) => b-a);//sorting Descending using Formula/logic/trick
console.log("Descending :",A);
