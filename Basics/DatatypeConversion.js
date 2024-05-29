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