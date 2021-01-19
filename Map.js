// Practice of the .map() method...

const numbers = [1, 2, 3, 4, 5];
// put "double" inside the map as the call back function. you must make
// a new variable and store the map function inside of it. 
const numbersDouble = numbers.map(double);
// function must take in 3 parameters...
// all the values of the array * 2
function double(value, index, arr) {
  return value * 2;
}
console.log(numbers)

// other example.... 

const numbers = [1, 2, 3, 4, 5];

const numbersDouble = numbers.map(multiply);

function multiply(value, index, arr) {
    return value * index;
  }
  // this will multiply each thing inside the array by themselve
  // 1*1 , 2*1 , 3*2, 3*4, 4*5  etc etc.. 


  // creates a new array and returns it. 