// Control flow. 
// use Conditional statements for checking conditions 
// Example
// if (some condition is true ){
//    do something here
//   }


// for loops 

//for (let i = 0; i < 5; i++){
//console.log('in loop:', i)
//}; 
//console.log('loop finished')
// let i = 0  is a initilizing variable 
// i < 5  is a condition if it evals to true we run what is in the code block
// 'the do something here part' 
// i++ final expression this is going to add i every time at the end of the code block
// this code will run unti i = 5 it cycles from i being 0-5 and once it hits 



const names = [ 'shaun','mario','luigi'];

for( let i = 0 ; i < names.length; i++){
    //console.log(names[i])
    let html = `<div>${names[i]}</div>`
    console.log(html)
}

// cycling through an array "iteration" 
// iteration = one cycle throught the code block



//   const age = 25 ;

if(age >20){
    console.log('you are over 20 ')

}
else{
console.log('you are under 20')
}

// else if statements 


const password = 'password123455'
if(password.length >=12){
console.log('that password is mighty strong')
} else if (password.length >= 8 ){
console.log('Hey there this password works')
} else{
console.log ("this password does not work. ")
}
