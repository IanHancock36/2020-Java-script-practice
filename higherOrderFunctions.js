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
  return x * y; 
}
// call it this way.. 
profict (3,5)

////**** functions are objects *****\\\\
// 4 functions stored in an array below 
const product = function multiply (x,y){
  return x * y; 
}

function add (x,y){
  return x + y; 
}

const subtract = function ( x,y) {
  return x-y;
}
 const divide = function (x,y){
   return x / y;
 }

 const operations = [add, subtract, multiply, divide]

 // can call this way.. make a method out of function... 

 const thing = {
   doSomething : multiply
 }
thing.doSomething(2,3) // with = 6 
// this calls the multiply function that was created above 


// Higher order Function !  ! ! ! \\***** 

// **** Functions that operate on/with othr functions. 
// they can #1 Accept other functions as arguments 
// #2 Return a function 

function callTwice(func){ //func is the argument name. but you can call it whatever you want
  func();
  func()
}

function laugh(){
  console.log("HHAHHHAHAHAHAHA")
}

callTwice(laugh) // pass a function in as an argument! Freaking Sweet! 
// this will return : 
// "HHAHHHAHAHAHAHA"
//"HHAHHHAHAHAHAHA"

// below just looping a number that is called as 
// and argument and each time calling the "action" argument
function repeatNTimes(action,num){
  for (let i = 0; i < num; i++){
    action()
  }
}
//now you can use the function "laugh"with the repeatNTimes function.
// here is is below. see passing the argument which is the laugh
// function and then calling the num argument is set to 13 times.

repeatNTimes(laugh, 13 )
// this will put: "HHAHHHAHAHAHAHA" 13 times on the screen.
// or whatever you put as arguments inside the repeateNTimes function


function pickOne(f1,f2){
  let rand = Math.floor();
  console.log(rand);
  if (rand < 0.5 ){
    f1()
  }
  else{
    f2()
  }
}
//now you could put in any function names that you want to pass
// through this pick one function.. and It will randomly pick a number
// and if its less than 0.5 "<0.5" it will run function f1 using
// an if else statememt..
// else it runs function f2 or function 2 


function add (x,y) {
  return x+y;
}
function subtract (x,y) {
  return x-y;
}

function multiply(x,y){
  return x*y ; 
  }

  function divide(x,y){
    return x/y ; 
    }


    const operations = [add,subtract,multiply,divide]  // this is an array with the 4 functions

    // you can call / run it lijke this. 
    operations[1] //this will call the subtract function. 
    operations[1](100,4) // this will run the subtract funtion that will substract
    // 100 - 4 = 96 
    // more effiencent to call it this way. 
    add(100,100) // which would = 200 All you are doing is looping through the array of functions. 

    // like this... this will loop through all the functions and use those two parameters
    // inside every function. 
    for(let func of operations){
     let result = func(30,5)
    }

    // the answer you will get is. 
    //35   30+5 
    //25   30-5
   //150   30 * 5
   //6     30 / 5 
    


   // another example of function stored in object. the "multiply" is from the function above
   const thing = {
     doSomething: multiply
   }

   // Now you call it this way. you are calling "thing" then inside of thing calling the object doSomething which
   // that object has a function called multiply you use parens to carry out function 5*10 = 50
   thing.doSomething(5,10)

   // this is called a method. above thing.doSomething(5,10) by adding a function to an object.. 
   // that is creating an method. 


//***************************** Functions As Arguments *****************************************\\
// Functions that operate on/ with other functions. They can: #1 Accept other functions as arguments
// #2 return a function. 

function callThreeTimes(f){
  f();
  f();
  f(); 

}
function cry(){
  console.log('boo hoo I am so sad')
}

function rage(){
  console.log('I hate this!'); 
}

// you can call it like this.  
callThreeTimes(rage); 

// and it will say: 'I hate this!' 'I hate this!' 'I hate this!'
// I called the parameter name for the function "action" because you can literallt call it whatever you want
function repeatNTimes(action, num){
  for (let i = 0; i < num; i ++ ){
    action();
  }
}
repeatNTimes(rage,13) 
// above you are calling the function repeatNTimes using rage which is a previous function
// as the action parameter. and 13 as the num for the parameter. so whatever the 
// the rage function will be called 13 times. the for loop will increase and will 
// write 'I hate this' 13 times  