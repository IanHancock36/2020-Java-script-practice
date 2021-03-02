// call backs and foreach

// const myFunc =(callbackFunc)=>{
//     //  do something
//     let value = 50;
//     callbackFunc(value);
// }

//myFunc(function(value){
    // do something
   // console.log(value)
//});

// arrow function version of call back function
// myFunc(value => {
//     // do something 
//     console.log(value)
// });

// let people = ["mario","luigi","ryu","shaun","chun-li"] 
// for each is a method that iterates over the array similar to a loop
// it expects a call back function 
// good rule of thumb is to call it the singular of what the variable is called down in the function
// 

//people.forEach(function(person){
//     console.log('person')
// })

// here is the arrow function version 

// people.forEach(person =>{
    // console.log(person)
// })

// taking the index as a parameter

// people.forEach((person, index) =>{
    // console.log(person,index)
// })
// applying an call back function to this. 
let people = ["mario","luigi","ryu","shaun","chun-li"] 

const logPerson = (person,index) => {
 console.log(`${index} -hello ${[person]}`)
}
people.forEach(logPerson) 

// this will return .... 

 0 -hello mario
 1 -hello luigi
 2 -hello ryu
 3 -hello shaun
4 -hello chun-li

// this is a great example of a call back function! 