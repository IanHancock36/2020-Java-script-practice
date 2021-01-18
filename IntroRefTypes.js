 
//Const and Arrays

// you cannot reassign a new variable to const. 
// that is the beauty of "let"
// but with arrays values can change as long as the reference does not change..... 
// Example.. 

const myEggs = ['yellow','brown']; // the colors inside this array can change

myEggs.push('purple')

// But you cannot assign it to a different array only mutate the current one... extample.

myEggs =['Pink','Orange'] // This will run an error code since you already called myEggs 


//Nested Arrays (storing Arrays inside other Arrays)

const animalPairs = [
    ['doe', 'buck' ],
    ['ewe','ram'],
    ['peahen','peacock']
]
animalPairs [2][1] = 'raptor' // this changes peacock to raptor in that array It is calling its 
// place in the order it is in in the Array.. 





