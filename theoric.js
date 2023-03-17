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
f()
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
g()

