for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 1) {
        // console.log("This is number 1")
    }
    // console.log(element)
}

for (let i = 1; i <= 10; i++) {
    // console.log(`The Outer loop value is 1: ${i}`)

    for (let j = 1; j <= 10; j++) {
        // console.log(`The value of inner loop: ${j}`);
        // console.log(i + ' X ' + j + ' = ' + i*j)
    }

}

const arr = ["Rahul", "Ramesh", "Rakesh", "Abhay"]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);   
}

for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        // console.log("Detected 5");
        continue
    }
    // console.log(`The value of i is: ${index}`);   
}

let a = 1
while (a <= 10) {
    // console.log(a);
    a++
}


// do while will at least one time if the condition is false
let b = 21
do {
    // console.log(b);
    b++
} while (b <= 20)


// For of
const arr1 = [1, 2, 3, 45, 6,]
for (const i of arr1) {
    // console.log(i)
}

const greetings = "Hello Abhay"
for (const greet of greetings) {
    // console.log(greet);
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "America")
map.set("Fr", "France")
map.set("Pk", "Pakistan")

// console.log(map);

// for(const key in map){   // For in loop doesnt work here
//     console.log(key);
// }

for (const [key, value] of map) {
    // console.log(`${key}: ${value}`);
}

const obj = {
    name: "Abhay",
    age: 19,
    Country: "India",
}

// for(const [key, value] of obj){          this will give error
//     console.log(`${key}: ${value}`)
// }

for (const key in obj) {
    // console.log(`The victim's ${key} is: ${obj[key]}`);
}

const languages = {
    js: "javascript",
    cpp: "C++",
    py: "Python",
    kt: "Kotlin"
}

for (const key in languages) {
    // console.log(`${key} is the shortcut for ${languages[key]}`);
}

const lang = ["js", "cpp", "c", "py", "swift"]
for (const key in lang) {
    // console.log(`${lang[key]}`)
}

lang.forEach(printing); // here we shall give the reference not the execution (printing ✔  printing()❌) 

// function printing(item){
//     console.log(item)
// }

function printing(item, index, arr) {
    // console.log(item, index, arr)
}

const arr2 = [
    {
        language: "javascript",
        extention: "js",
    },
    {
        language: "java",
        extention: "java",
    },
    {
        language: "cpp",
        extention: "cpp or c++",
    }
]

arr2.forEach( (item)=>{
    console.log(item.language)
})