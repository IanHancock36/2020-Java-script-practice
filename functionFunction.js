// more function notes. 

// $$ Below is a named Function Definition

function makeBread(qty){        // $$ qty is a parameter or an input the function will have access to this when the function is called
                                // $$ inside these curly braces this is the function body. this is where you write all of your logic. 
const bread = '🍞 ' .repeat(qty) // $$ inside the function body it will either perform a task or return a value. 
return bread;                    // return statement will take the logic calculated in the function body and put it as a variable

}                                // to execute the function we must call the function.
const loaves = makeBread(7)   //calling = referencing the function by its name and pass it values as arguments to the parameters the "7"
   console.log(loaves);  🍞🍞🍞🍞🍞🍞🍞                       // in makeBread(7) is the argument to the parameters (function call)

//parameters = variables inputs used in the function definition 
// arguments = values or expressions used when calling the function. 

// Function Expression : (using a function as a value) this is best practice. 

const makeBeer = function(qty){   //using a function as an anonomyous function as the value
 return '🍺 ' .repeat(qty); 
}
const beers = makeBeer(7)
// this will return = "🍺 🍺 🍺 🍺 🍺 🍺 🍺 "
//above setting a variable where it has an function attached to it. 

// Arguments and Parameters 

//Arguments

//Postitonal this is a good function when you only have a few parameters;
function makeBreakfast (main,side,drink){
    console.log(arguments); 
    return `Breakfast includes ${main}, ${side}, ${drink}`
}
const breakfast = makeBreakfast('pancakes','eggs','coffee')

console.log(breakfast)

// when you have more than 3 parameters you can use an object for named parameters 
// example below. 

function makeLunch(options){
    const{ main,side,drink}= options; 
    return `Lunch shall include ${main}, ${side},${drink}`
}
makeLunch({main : 'waffels',side: 'eggs' , drink: 'coffee'})
// this is one argument "options" that is and object that can contain multiple values. 

/// PICK UP ON 4:33 of video. 

// Rest parameters
function makeDinner(...arguments){
    return `Dinner includes the following items : ${arguments}`
}
makeDinner('cheeseburger','fries','beer','pickles')
console.log(makeDinner)

// this will return "Dinner includes the following items : cheeseburger','fries','beer','pickles' "
// this is cool it will spread operator it and return whatever we put in as arguments



// Arrow Function 

// Regular function 
const makeBeer = function beerFun(qty){
    return 'beer'.repeat.qty
}

//Arrow function 
// if only one return statement no need for curly braces
// if more than one return statement you need {}

const makeWine = (qty) => {
  return  "🍷".repeat(qty);
}
// other example. 
function Dog(){
    this.breed = "wolf"

    setTimeout(() => {
        console.log(this.breed); wolf
    }, 0)
}

//Impure functions 
// this is operating on values outside its scope
let x = 0 ;

const impure = () => {
    x++; 
    return x**2; 
}

// Pure functions
// uses variables inside its scope and only mutates variables in its local scope
// does not create side effects for other code. 
// Better to do in general 
// Will always produce the same output given the same input.
// Easier to test 


const pure = (x)=> {
   return x**2 
}
console.log(pure(5))
// this will = 25 
// this is 5 to the 2nd power 

// Higher order functions 
// this is a callback function. 
let haveFun = () => console.log('fun'); 
// below setTime out is taking the function have fun as a parameter and 
//the 50 is 50 milliseconds as a parameter

setTimeout(haveFun,50); 

// or like this...  call back function..
// this will run the console.log 'fun' on a setTimeout of 5 seconds (5000 millisecods = 5 seconds)
// on a 5 second delay. pretty cool this will be use I think for page items to load and heros and carousels 
let haveFun = 
setTimeout(() => console.log('fun'),5000)

// replacing traditional "For Loops"
// Traditional loops here 
const arr = [1,2,3,4]

const squared = [];

for(const x of arr ){
    squared.push(x**2); 
}
// the result is 
[1,4,9,16]
console.log(squared);

// new style loop 
const squared2 = arr.map(x => x**2);
console.log(squared2)

// to reuse this code set it up as a function this way. 
// you are taking the function stored inside square it 
// putting it in as a parameter in squared 2 
// mapping over the arr variable inside the squared2 variable 
// returning the squared2 variable
const arr = [1,2,3,4]
const squareIt = x => x**2; 
const squared2 = arr.map(squareIt)
//call squared 2 

squared2 = [1,4,9,16]

// Closure functions 
// Below this variable 'myName' is external to this function but it is available to this function
// 'myName' is a global variable that is available in this function 
// 'myName' has a scope the function 'printName' has a outer scope of the file which gives it access to the outerfile
const myName = 'Ian'

function printName(){
    console.log(myName)
}

printName()

// You can change it like this... 
// change the variable from const to let. 
let myName = 'Ian'

function printName(){
    console.log(myName)
}
myName = 'Stevie'
printName()
// this will return 'Stevie' even though the orginally it was let myName = 'Ian'
// #1 because myName was set up as let myName 
//# 2 because the function has the outerscope and ability to pull from that variable. 

// CLOSURES ARE USUALLY FUNCTIONS INSIDE OTHER FUNCTIONS BEST EXAMPLE BELOW \\

function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log('Outer Variable: ' + outerVariable)
        console.log('Inner Variable: ' + innerVariable)
    }
}

const newFunction = outerFunction('outside')
newFunction('inside')


//$$$$$$$$$$$$$$$$ Another Example  $$$$$$$$$$$$$$$$$$$$$$$$$$$\\
function outerFunction(outerVariable){
    fetch(url).then(() => {
        console.log(url)
    })
}

const newFunction = outerFunction('outside')
newFunction('inside')


//

function greet(){
    console.log('hellop there')
}
greet() // this is called invoking or calling function 

//function expression example :
// this is so its const so it does not get overridden later. 

// when you set a variable to something whether a string or array. its called a 'expression'
// its called a functional expression when you set a variable to a function. // storing a function inside a variable
const speak  = function(){
    console.log('good day')
}; 
 speak(); 
 /////

 // hoisting 
 // function declarations are hoisted to the top of the file no matter where they are placed
// in the lines or position of the code. its a hiearchy of some sort
// * It does not work with function expressions it will not hoist a function expression
// 
// $$$ A good rule of thumb is to use function expressions and call the from top down in 
// the order that you need them. 

const speak = function(name){  //'name is known as a function parmeter 
    console.log(`good day ${name}`)
}
speak('jake') // speak('jake') is known as a function argument. 



// '(name)' is a local variable that is used in the function expression code block
// what I am doing is interpilating and making it so when i call speak whatever I pass for 'name' 
// In the variable function(name) when i call speak('') with the string interpilation
// it will plug whatever in. 
// its assigning name as whatever name we plug it into when its called. 
// the 'name' variable scope is only inside that function 


// $$ ARGUMENTS AND PARAMETERS

// you can take multiple parameters. 
// the parameters must be passed in order. can't switch or it will not run the way you
// want it to. 

// example: 
const speak = function(name , time ){  
    console.log(`good day ${name} It is ${time}`)
}
speak('jake',"10pm")

// adding Default parameters... watch 12:52 in video 