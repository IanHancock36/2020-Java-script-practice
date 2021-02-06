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