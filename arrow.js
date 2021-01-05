// old function format.
//const divide = function (x,y) {
//   return x/y;

//}

//const divide = (x,y) =>{
// return x/y ;
//}

//const square = (x) => {
//   return x * x ;
//}

//const annoying = () => {
//    console.log("LOL OMG HEYYY")
//}

//const square = x => (
//  x*x
//)

// user.map(() => (
// <Profile
//  name = "richard"
// age = "32" />
// ))
// Below when you are returning an object literal you have to wrap the curly braces in a parenthesis
// to properly return it
//const makeCard = () => ({suit: 'heart', val: 3})

const invoices = [
  {
    client: "Billy",
    amount: 400.5,
    hasPaid: "false",
  },
  {
    client: "Hedwig",
    amount: 350.9,
    hasPaid: "false",
  },
  {
    client: "Pizza Head",
    amount: 199.99,
    hasPaid: "true",
  },
  {
    client: "Marty",
    amount: 600.34,
    hasPaid: "false",
  },
  {
    client: "Grizzly",
    amount: 79.99,
    hasPaid: "true",
  },
];

// Old way to write a function for these situations 
//const stillOwed = invoices 
//.filter(function (invoices){
    //return !invoices.hasPaid
//})
//.reduce(function (total,incoice){
  //  return total + invoices.amount
//}, 0)

//const stillOwed = invoices
//.filter(invoices => !invoices.hasPaid)
//.reduce ((total, invoice) => total + invoices.amount, 0 )


const person = { 
    name: "Bilbo"
    sayHi: function (){
        console.log(this.name, 'says hi')
    }
}
person.sayHi

