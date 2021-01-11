const fitBitData = {
  userName: "SillyBilly",
  totalSteps: 5280,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
  rating: {},
};

// totalSteps is the "Key" and '5280" is the value
// this makes a "key value pair wow.... totally forgot that one.."
// Key is like the name in a dictionary and value is the definition.
// All Keys are converted into strings ""

fitBitData.rating = 4.2;

const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

let average = (studen.exams.midterm + student.exams.final) / 2; //  = "90"

let lastName = student.lastName; //= "Jones"

student.strengths = [0]; // = "Art"

const shoppingCart = [
  {
    product: "Jenga Classic",
    price: "6.88",
    quantity: 1,
  },
  {
    product: "Echo Dot",
    price: 29.99,
    quantity: 3,
  },
  {
    product: "Fire Stick",
    price: "39.99",
    quantity: 2,
  },
];

const palette = {
  red : 'blah',
  yellow : 'whoa',
  blue : 'hey hey',

}

const palette2 = palette;
palette2.green = 'no bro'

let nums = [1,2,3]; 

let mystery = [1,2,3]; // these both do not equal each other due to the fact that they both have a memory Id number associated with them. 

let moreNums = nums; // now these work they actually === eachother. 

