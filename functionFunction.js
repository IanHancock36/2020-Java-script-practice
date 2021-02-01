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