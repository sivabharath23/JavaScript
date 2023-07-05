let Mapobj = new Map([   // we can add array values directly in map object
    ["CPU","i9"],
    ["RAM","16GB"],
    ["Storage",512]
]);

console.log(Mapobj)

//else using set method

let Mapobj2 = new Map()

Mapobj2.set("Graphics",1650)//using set method to add
Mapobj2.set("Brand", "Asus")
Mapobj2.set("color","silver")

console.log(Mapobj2);

console.log(Mapobj2.size);//size method has no arguments 

Mapobj2.delete("color");//mention key it will delete the array
console.log(Mapobj2);

console.log(Mapobj2.get("Graphics"));//Displays the value of the key
