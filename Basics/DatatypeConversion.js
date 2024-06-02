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

// ********DATA TYPES*************

let temp = null // Null
let Numb = 100 // Number
let undef; // undefined
let BigNumber = 10984092340923094720n  //BigInt
let Symbl = Symbol('123') // Symbol
let anotherSymbl = Symbol('123') // Symbol


// ********MEMORIES*************
// ********STACK & HEAP*************

// Every variable that we create goes in stack and  every non-primitive data type we create stores in stack and gets the reference of that value in the heap memory

let userOne = {
    email: "abhay@gmail.com",
    age:23,
}

let userTwo = userOne
userTwo.email = "userOne.gmail.com"

// As u can see the output userTwo is getting the reference of userOne thats y there is change in the output 

console.log(userOne);
console.log(userTwo);

// Summary In Stack memory we get the copy of that variable and in Heap memory we get reference of that variable (reference - means that the actual changes we do the changes are done in original value)


// ********STRING*************

let str = "Abhay"
let str1 = new String("Ramesh")

console.log(str.__proto__);
console.log(str1.split(""));
