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


//logical operators 
// the || = OR 
// the && = AND
const password = 'password123455'
if(password.length >=12 && password.includes('@')){
console.log('that password is mighty strong')
} else if (password.length >= 8 || password.includes('@') && password.length >5 ){
console.log('Hey there this password works')
} else{
console.log ("this password does not work. ")
}

// Logical Not operator 

let user = false 

if (!user){
    console.log('you must be logged in to continue')
}

//! means not.. 



// break and continue 
//using 'i' you don't have to use i you can use something else this is just a standard. 
const scores = [50,25,0,30,100,20,10];

for(let i = 0; i<scores.length; i++){

    if(scores [i]===0){
        continue;
    }
    console.log('your score: ', scores[i]); 

if(scores[i] === 100 ){
    console.log('congrats ')
    break; 
}
}

const grade = 'D';

switch(grade){
case'A':
    console.log('you got an A!');
    break;
case'B':
    console.log('you got an B!');
    break;
case'C':
    console.log('you got an C!');
    break;
case'D':
    console.log('you got an D!');
    break
case'F':
    console.log('you got an E!');
    break;
    default:
        console.log('not a valid grade')
}


//variables and block scope 
let age = 30;

if(true){
    age=40
    let name = "Ian"
    console.log('inside 1st code block:' , age, name )
    if(true){
        console.log('inside 2nd code block:', age)
    }
}
console.log('outside code block: ', age ,name )


const speak = function(name){
    console.log(`good day ${name}`);

}
speak('mario')

// you can have default parameters inside the function but if you do not 
// need to call them you can change it with something like interpilation. 
// if you put default parameters in. it will use the default values unless you specify. 
// like above. 


// returning values... 

const calcArea = funcion(radius){
    let area = 3.14 * radius**2;
    return area
}
const area = calcArea(5)




const calcArea = function(length,width){
    return (length * width)
   

}

const area = calcArea(5,12)

// when a function returns a value store the value in a variable
// you can reuse a value you called in a function like this. 

const calcVol = funtion(area){
    // what you want to put there

}

//return it this way. 
calcVol(area)


const calcArea =(radius) => {


    const greet = function(){
        return'Hello world';

    }
// arrow function conversion


console.log(results)

    const bill = function (products,tax){
        let total = 0;
        for (let i =0; i< products.length; i++){
            total += products[i] + products[i] * tax;
        }
    return total;
    }
console.log(bill([10,15,30], .02))



const greet =()=> "hello world";