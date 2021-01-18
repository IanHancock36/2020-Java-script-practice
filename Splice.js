let animals = ['shark','salmon','whale','bear','lizard','tortoise'];


animals.splice(1,0,'OCTOOUS')
//the first number is what index number do I want to add something to. so index of 1
// the 2nd number is '0' since I do not want to delete anything.
// the 3rd item is "Octopus" that is what I want to add in and it will be going to the index of 1 
// new array is: animals = ['octopus','shark','salmon','whale','bear','lizard','tortoise']

// you can delete  as well like this:

animals.splice (3,2) /// this starts at index of 3 and deletes to things after. 

//this will return : animals = ['octopus','shark','salmon','whale','bear']

// SORTING ARRAY (this updates this one and returns it in alphabetical order) converts elements 
/// into strings but doesn't work for numbers **** have to use sort with a function. 

let people = ['Steve','Joey','Frankie','Rod','Howie']

people.sort() 

returns.. ["Frankie", "Howie", "Joey", "Rod", "Steve"] 
