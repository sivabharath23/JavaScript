//object creating by object Literal
let add={
        id:200,
        names:"siva",
        salary:30000
    }
    console.log(add);

//creating instance object
    var obj = new Object();
    obj.id=200;
    obj.idname="siva";
    obj.idsalary=40000;
//
console.log(obj);

//object constructor
    function msg(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
        }
    let cons = new msg(200,"siva",20000);
    console.log(cons.id+" "+cons.name+" "+cons.salary);
