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