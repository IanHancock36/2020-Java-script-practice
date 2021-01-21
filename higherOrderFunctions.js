/// Understand scope
/// Write Higher Order Functions
/// Pass Functions as callbacks.

// Scope
// 1. The location where a variable is defined dictates where
// we have access to that variable..
//*******Function Scope *******

function helpMe() {
  let msg = "I am on fire";
}

///*** above msg is scoped to the helpMe function
// this means they are only tied to that function and you
// could possibly make vairables inside a different function
// and use same variable names.

//function lol(){
//    let person = 'Tom';
//    const age = 45;
//    let color = 'teal';
//    console.log(age)
//}
//function changeColor(){
//    let person = 'Steve';
//    const age = 19;
//    let color = 'green';
//    console.log(age)
//}
///// this will only pull up the respected ages
//// of 45 and 19 since they are only scoped
//// to that particular function
//
//
let bird = "mandarin duck";

function birdWatch() {
  let bird = "golden pheasant";
}
//**** above you can have the same variable called 
//due to the scope of the function...


////// ************ Block Scope **********\\\\\

function doubleArr(arr) {
  const result =[];
  for (let num of arr){
    let double = num * 2
    result.push(double)
  }
}

//***** Lexical Scope *******\\
//example 

function TodoList(){
  let todos = [];
  let username = '';
  function addTodo(){

  }
  function removeTodo(){

  }
  function upDateTodo(){

  }
}
/// above you can access the variables 


// ***** functional expressions ***** \\

// example **** 
const square = function (num){
  return num * num
}
square(7) 

// the function is stored inside a variable.
// It doesnt have to have a name when stored
// when stored inside a variable.... 
// functions are objects in javascript.. WOWOW

function add (x,y){
  return x+y 
} 
// instead... 

const sum = function (x,y){
  return x+y 
}
sum(9,3)
// this returns 12  ( 9+3 )

// you can pass in a name for the function when 
// it is stored inside a variable... 
// example below.. 

const product = function multiply (x,y){
  return x * y 
}
// call it this way.. 
profict (3,5)