let arr=[1,5,3,5,2,16,7]

let arr1=[]
for(let i =0; i<arr.length;i++){
    for(let j=0;j<arr1.length;j++){
        if(arr[i]!==arr1[j]){
            console.log(arr[j]);
        }
    }
}

let arr2=[];
arr.filter((duplicate) => duplicate%2 !== 0)
    .forEach((i) =>{
        console.log(i);
    })

    
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            console.log(arr[i])
        }
    }
    