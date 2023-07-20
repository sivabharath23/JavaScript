let arr =[1,2,3,4,5,6]

arr.filter((value) => {return value%2!=0})//first it filters the array by condition
   .forEach((value) => {//then itearates by forEach method
    console.log(value)
   })

   console.log("--------------------");

    let res=arr.filter((n) => {return n%2==0})//first it filters the array by condition
               .map((m1) => {return m1*2})//map picks the value and change it by condition
               .reduce((a,b) =>{return a+b;})//reduces the array by previous and current value
      console.log(res);

    console.log('-------------------');

   let arrfil =[23,75,13,16,15]
   let f1= arrfil.filter((age) => age>18);
   console.log(f1);