const arr = [0,1,2,3,4,5]
// arr.push(10)
// arr.unshift(2)  // Adds element at the starting of the array
// arr.pop()   // removes element at the ending of the array
// arr.shift() // removes element at the starting of the array
// console.log(arr);

const newArr = arr.join()

// console.log(newArr);

// slice and splice

// console.log("A =", arr);

const myNewarr = arr.slice(1,4) // Makes changes in the copy of original array
// console.log("B =", arr);
// console.log(myNewarr);

const spliceArr = arr.splice(1,4) // Makes changes in the original array 
// console.log(arr); 
// console.log("C =", arr);
// console.log(spliceArr);


const marvel = ["Thor", "CA", "Ironman"]
const DC = ["Joker", "Flash", "Batman"]

// console.log(marvel.concat(DC));

const allHeros = [...marvel, ...DC]
// console.log(allHeros);

const a = [1,2,3 ,[42, 6], 7, [2]]

// console.log(a.flat(Infinity));

console.log(Array.isArray("Abhay"));
console.log(Array.from("Abhay"));
console.log(Array.from({name: "Abhay"}));   //Ask question in interview

const score = 100
const score1 = 200
const score2= 300
console.log(Array.of(score, score1, score2));   //Ask question in interview
