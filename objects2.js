// //object constructor
// function MyFunction(id, name, salary) {
//   //better to use caps in initial user can view as constructor Function
//   this.id = id;
//   this.name = name;
//   this.salary = salary;
// }

// let consobj = new MyFunction(148, "siva", 20000);
// console.log(consobj);

// console.log("_______________________________________");

// let obj1 = {
//   name: "siva",
//   id: 148,
//   laptop: {
//     cpu: "Ryzen 5",
//     clockspeed: "2.4GHZ",
//     Brand: "Asus",
//   },
// };

// console.log(obj1["laptop"]);

// console.log("_______________________________________");

// for (let key in obj1) {
//   console.log(key, obj1[key]);
// }

// console.log("________________________________________");

// for (let key1 in obj1.laptop) {
//   console.log(key1, obj1.laptop[key1]);
// }

//function inside object or method function
let data = {
  name: "siva",
  id: 148,
  role: "developer",
  greet: function (user) {//parent function

    function greet2(userid) {//child function
      return `Hello ${userid}`;
    }
    console.log(greet2(147));
    return `Hello ${user}`;
  },
  welcome: function (id, name) {
    return `Student id : ${id}\nstudent Name : ${name}`;
  },
};
console.log(data.greet("siva"));

console.log(data.welcome(147, "Shiyam"));
