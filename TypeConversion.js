// Booleans and Comparisons 
console.log(true,false, 'true', 'false')

// methonds can return Booleans 

let email = 'ianhancock@most.com';
let names = ['mario','toad','stevie']

let result = email.includes('@')
let result = names.includes('toad')
// includes lets you look for a specific characture on the screen. 
// the email has ('@') in it. it will return true if not false. 
// if the name in the array matches returns true if not false 
// includes looks in the array for the match 
console.log(result) // this = true 

//  Comparison Operators $$%%$$$$ ////

let age = 25;
console.log(age == 25 ) // - this returns true
console.log(age == 30 ) // - this returns false 
console.log(age !=30) // - this means is age "not equal " to 30 ? which returns true

// single '=' sets a value for a variable. 
// double '==' is saying is "are these two things the same" ('age == 25')
// it will return true or false

let name = 'shaun'
console.log(name == 'shaun') // this will return true
console.log(name == 'Shaun') // this will return false   since the capital
console.log(name > 'crystal') // this will return true since the 'S' in shawn comes later in the alphabet which is bigger than 'C' (interesting)

// Loose vs Strict comparison. 

// loose comparison (different types can still be equal)
console.log(age == 25)
console.log(age =='25') // these both are false because the two "==" since Js converts the string to a number even if you have the quotations 
// it still works for this 
console.log(age != 25)
console.log(age !='25') // still returns false

//strict comparison (different types cannot be equal)

// Strict Equality 

console.log(age === 25 ) // this returns true "this says is age the same value and type as 25"
console.log(age === '25' ) // this returns false since it is the same value but not same type strictly '25' is read as 
// a string first then it is evaluated as a number so string 25 and number 25 not strictly the same. 
let score = '100';

console.log(score +1 );
// this wont make 101 it will make 1001 

// Type conversion 
score = Number(score)
console.log(score +1 );

// this will make 101 


// example you cannot covert a text string to a number. 

 let result = Number('hello');

console.log(result);

// this will return NaN "not a number"

// converting a number to a string. 

let result = String(50)
console.log(result)
// how you check 
console.log(result,typeof result)

/// converting it to a Boolean. 
let result = Boolean(100);
// this is a 'truthy value' 
// 0 is always false not truthy or falsey 
// strings of anylength are always "truthy"

let result = Boolean(0) /// returns false 

let result = Boolean('0') // returns true since it is a string. 