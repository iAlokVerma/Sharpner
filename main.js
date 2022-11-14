let name ={
    firstname:"alok",
    lastname : "verma",
    
}
let name2 = {
    firstname : "sachin",
    lastname : "tendulkar"
}

function printfullname(hometown,state){
    console.log(this.firstname+" "+ this.lastname +"from  "+hometown +" "+state) 
}

// call
printfullname.call(name,"wankhede","UP")
printfullname.call(name2,"calcical","WB")
// apply
printfullname.apply(name2,["atul","verma"])

// bind

let f1 = printfullname.bind(name2,"name","lastname")
f1()

let student = {
    age : 20
}

function printage() {
    console.log(this.age)
}
printage.call(student)


// ====================================


// Currying


let multiply = function (x,y) {
    console.log(x*y)
}
let multiplyBYTwo = multiply.bind(this,2)
multiplyBYTwo(3)


// curryinf by function clouser

let _multiply = function(x){
    return function(y){
        console.log(x *y)
    }
}

let _multiplyBYTwo = _multiply(2)
_multiplyBYTwo(3)
let _multipleBYThree   = _multiply(3)
_multipleBYThree(4)
