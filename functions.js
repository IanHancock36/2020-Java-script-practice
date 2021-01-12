// function functName(){
//do something
//}


//function grumpus() {
   // console.log("hey man")
//}
//grumpus(); 

//function rollDie(){
  //  let roll = Math.floor( Math.random() * 6 ) +1 ; 


//console.log (`Rolled: ${roll}`)
//}

//function throwDice(){
 //   rollDie();
//    rollDide(); 

//}

//function greet(nickname){
////    console.log(`Hi${nickname})
    
//};


function rollDice(){
    let roll = Math.floor(Math.random()*6)+1;
    console.log(`Rolled ${roll}`)

}
// function throwDice takes in the parameter of numrolls
// and then uses a for loop and uses the rolldice function above to repeat 
//  rolll dice to roll the dice as you want it to.  

function throwDice(numRolls){
    for (let i = 0 ; i < numRolls; i++){
      rollDice()  
    }
    
}
// then you call "throwDice(5) to roll the dice 5 times"

function square(num){
  console.log (num * num)
}

function sum (x,y){
  console.log(x+y);
}
function divide(a,b){
  console.log(a/b);

}

///RETURN STATEMENTS 

function add (x,y){
  return x+y 
}
add(4,5)
const sum = add(10,16)

sum //26 

// Return Statement ends function execution and specifies the value
// to be returned by that function. 

function square (x){
  return x * x ; 
  console.log('All Done')
}
// since the console.log is after the return statement this will
// not run it has to be before the return statement

//example of this working using if/else statement... 

function isPurple(color){
  if(color.toLowerCase()=== 'purple'){
    return true
  }
  else{
    return false; 
  }
}

//once code runs either true or false..... the code stops. 

//*****************************************************************************
// This is a boolean method so It will return either true or false without
// having to use an if/else statement. 
function isPurple(color){
  return color.toLowerCase() === "purple";
}

function containsPurple(arr){
  for (let color of arr){
    if (color === 'purple' || color === 'magenta'){
      return true;
    }
  }
  
  return false; 
}

['blue','pink','megenta']