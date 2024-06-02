let score = 100
console.log(score);

let Numb = new Number(300.23521)
// console.log(Numb);
// console.log(Numb.toString.length);
// console.log(Numb.toFixed(2));

// Difference between fixed and Pricision

function Fixed(params) {
    return Number.parseFloat(params).toFixed(2)
}

// console.log(Fixed(42.555));
// console.log(Fixed(43289.7942));
// console.log(Fixed(9.2));

function Pricise(params) {
    return Number.parseFloat(params).toPrecision(3)
}

// console.log(Pricise(42.555));
// console.log(Pricise(43289.7942));
// console.log(Pricise(9.2));
// console.log(Pricise(0.978214));

const hundred = 10000000
console.log(hundred.toLocaleString('en-IN'));

// ************* MATHS **************

let a = 25.25;

// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// console.log(Math.min(4,5,26,7,2));
// console.log(Math.max(4,5,26,7,2));

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.round( (Math.random()*100) +1)); // Random number between 1 to 100

// Following syntax is for getting a number between 2 different numbers ex: 10 and 20
const min = 10
const max = 20

console.log( Math.round((Math.random()) * (max - min + 1) + min));