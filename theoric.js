//this function create compiler time
a()
function a(){
  console.log("Function Declaration")
}

//!this give me an error because this function create runtime
//b()
let b = () => {
  console.log("Function Expression")
}

//this give me undefined because of creation phase
console.log(seven);
var seven = 7

//scope chain
let number = 1
function c(){
  function d() {
    //changes global variables
    number = 3
    function e() {
      //if don't have variable, asks parent
      console.log("e: " + number)
    }
    e()
    console.log("d: " + number)
  }
  d()
  console.log("c: " + number)
}
console.log("number: " + number)
//call stack arrangment
c()

//function and block scope
function f(){ 
  var number = 1

  if(true){
    console.log(number)
    var digit = 3
  }
  
  for(var i = 0; i < 2; i++){
    console.log(digit)
  }
  console.log(i)

  var number = 2
  console.log(number)
}
f();
//JS use function scope but 'let' and 'const' is a block scope
function g(){
  let numberr = 1

  if(true){
    console.log(numberr)
    let digit = 3
  }
  
  for(let i = 0; i < 2; i++){
    //!console.log(digit) -> digit defined 'if' block
  }
  //!console.log(i) -> i defined in 'for'

  //!let numberr = 2 -> numberr already defined
  console.log(numberr)

  const constant = "heyyo"
  //!constant = "hello" -> 'const'ant -_-

  const object = {name: "Görkem"}
  object.name = "Yusuf"  //legal because we don't change 'object'

  //!object = {name: "Şahin"} -> illegal because we change 'object'
}
g();

//IIFE -> Immediately-invoked Function Expressions -> (...)()
(function(){
  let name = "Nida"
  let age = 20
  console.log(`I'm ${name} and my age ${age}.`)
})()

//Implicit Binding
const person = {
  name: "Nida",
  age: 20,

  sayName: function(){
    console.log(this)
    console.log(this.name)
  },
  sayAge(){
    console.log(this)
    console.log(this.age)
  },
  lastName: {
    surname: "Akalp",
    saySurname(){
      console.log(this)
      console.log(this.surname)
    }
  }
}
//It looks like the 'this' showing the value to the left of the dot
person.sayName()  // 'this' gives a 'person'
let say = person.sayName 
say()  // 'this' gives a 'window' and no value

person.sayAge()  // 'this' gives a 'person'
say = person.sayAge
say()  // 'this' gives a 'window' and value is undefined

person.lastName.saySurname()  // 'this' gives a 'lastName'
say = person.lastName.saySurname
say()  // 'this' gives a 'window' and value is undefined


//Explicit Binding -> call, apply, bind
const student1 = {
  name: "Yağız"
}
const student2 = {
  name: "Kürşat"
}

const showInfos = function(surname){  //we can use '...' with apply
  console.log(this)
  console.log(`I am ${this.name} ${surname}.`)
}

showInfos.call(student1, "Avşar")
showInfos.apply(student2, ["Çelik"]) //sends array as parameter

let show = showInfos.bind(student2, "Doğan Çelik")
show()  //we can sends '[ ]' if we want


//usage of 'this' with arrow function in callback
const school = {
  names: ["Mehmet", "Miraç"],
  numbers: [3, 7],

  printNames(){
    console.log(this)  //'this' gives a 'school'
    const that = this
    this.names.forEach(function(name, index){
      console.log(this)  //'this' gives a window
      console.log(`${that.numbers[index]}: ${name}`)
    })
  },
  //or we can use arrow function ^-^
  printNamess(){
    this.names.forEach((name, index)=>{
      console.log(this)  //'this' gives a 'school'
      console.log(`${this.numbers[index]}: ${name}`)
    })
  }
}
school.printNames()  //old solituon
school.printNamess()  //new solution

