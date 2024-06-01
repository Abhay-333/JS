let score = null
let a = undefined

let valueOf = Number(score)
console.log(typeof score)
console.log(typeof valueOf)
console.log(typeof a)
console.log(typeof (b))

// 33 => number 
// "33abs" => string 
// 33 => number 
// null => number(NaN) 
// null => object 
// undefined => undefined 

let isLoggedIn = ""

console.log(Boolean(isLoggedIn))

// For Boolean
// "" => Boolean(false)
// "string" => Boolean(true)
// 0 => Boolean(false)

// ******OPERATIONS*************

console.log(2+"5");
console.log(2+"5" + (4 + 4));
console.log("2"+ 5 + 4 - 4);
console.log( "5" + 4 - 4);

let c = 9
const d = c++

let e = 19
const f = ++e

console.log(`c: ${c}, d: ${d}`);

console.log(`c: ${e}, d: ${f}`);


// ********COMPARISONS*************

// console.log(4 === 2)
// console.log(4 == 2)
// console.log(25 !== 2)
// console.log(12 <= 2)
// console.log(5 >= 2)
// console.log(22 < 2)
// console.log(25 > 2)


// The problem here is that null values are treated like a number here thats the output is confusing same goes with undefined values
console.log(null == 0)
console.log(null > 0)
console.log(null >= 0)

// The only difference is these 3 values output is false
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined >= 0)