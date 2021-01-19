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
console.log(numbers);

// other example....

const numbers = [1, 2, 3, 4, 5];

const numbersDouble = numbers.map(multiply);

function multiply(value, index, arr) {
  return value * index;
}
// this will multiply each thing inside the array by themselve
// 1*1 , 2*1 , 3*2, 3*4, 4*5  etc etc..

// creates a new array and returns it.

const products = [
  { name: "laptop", 
   price: 1000,
   count: 5 
  },
  
   { name: "desktop", 
    price: 1500,  
    count: 2 
  },

  {
    name: "phone",
    price: 500,
    count: 10,
  },
];

const totalProductsValue = products.map((item => item.price * item.count))

totalProductsValue = [5000, 3000, 5000]

//// Now return it as a new object of each item name and total value
 //of all products individually you are creating a new
// variable called "totalProductsValue"...... 

const totalProductsValue = products.map(item => ({
  name : item.name,
  totalValue : item.price * item.count 

}))
console.log(totalProductsValue)

// See how this returns an array of objects see how you called 
// and added in a new key for the object called "totalValue"

[{name: "laptop", totalValue: 5000}, {name: "desktop", totalValue: 3000}, {name: "phone", totalValue: 5000}] 


const str = ['1','2','3','4']

const nums = str.map(Number)

// this will output... 

nums = [1,2,3,4]