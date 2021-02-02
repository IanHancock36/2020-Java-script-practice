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

