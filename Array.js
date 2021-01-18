let shoppingList = ['cheese','cereal', 'ice']

let lotto = ['45','23','33','43','55']

let myCollection = [12,'dog',true,null,NaN]


let colors  = ['red','blue','green','yellow','orange','violet']

let shoppingList = ['Cheddar Cheese', '2% Milk'];
//adding to an array.
shoppingList [1] = 'Whole Milk'
shoppingList[2] = 'Ice Cream';
// this will add to the end of an array no matter the length. 
shoppingList[shoppingList.length] = 'Tomatoes'

// built in method to add items to the end of the Array. 
//Array Methods........................................
let topSongs = [
    'First Time I Ever Saw Your Face',
    'God Only Knows',
    'A Day in the Life',
    'Life On Mars'
]; 
// .push() adds to the end of an array. 
topSongs = [topSongs.push('Notorious')]

// pop will take a value from the end. 

topSongs.pop() // removes last item in the array and returns. 

let dishesToDo = ['big platter']
// this adds to the beginning of the array 
dishesToDo.unshift('large platter')
dishesToDo.unshift('small platter')
// you can add multiple things the order is different if you chunk them together. 
//than just doing one at a time
dishesToDo.unshift('knife','plant','cofee mug')
//now new array will = ['large platter,'small patter', 'big platter']

dishesToDo.shift() // removes the last in the array. 


//concat combining 2 arrays. doesnt change original arrays but it makes
//a copy of them. 

// the order of the concat matters to apply to a new array. 



let fruits = ['apple', 'bannana'];
let veggies = ['cucumber', 'tomato'];
let treats = ['ice cream','soda',]


let allFood = fruits.concat(veggies,treats)


// slice method ************ 


let animals = ['shark','bear','lizard','cat']


let swimmers = animals.slice(3)
let swimmers = animals.slice(-3)


/// splice.....******** 
// it takes a start index how many things you want to delete and what you want to insert. 


let animals = ['shark','bear','lizard','cat'] 

animals.splice(1,0,'octopus')
