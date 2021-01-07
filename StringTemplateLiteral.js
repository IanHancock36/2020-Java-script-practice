`${1+5}`


let username = "Ziggy31";
`Welcome back, ${username}` //  makes "Welcome back, Ziggy31"

`Game Over ${username.toUpperCase()}` //"Game OVER ZIGGY31"
// this means evaluate this first with string template literals 


let animal  = 'pig'

let sound = "oink"

`${animal} says ${sound}` = "pig says oink"


let item = 'cucumbers';
let price = 1.99;
let quantity = 4; 
`You bought ${quantity} ${item}, total price: $${price * quantity}`;

//"You bought 4 cucumbers, total price: $7.96"