const marks = 100

if (marks < 35) {
    console.log("FAIL");
}
else {
    console.log("PASS");
}

const score = 300;

if (score == 300) console.log("You Won"), console.log("Congrats")      // Implicit scope

const month = "March"

switch (month) {
    case "Jan":
        console.log("Jan")
        break;
    case "feb":
        console.log("Feb")
        break;
    case "March":
        console.log("Mar")
        break;
    case "April":
        console.log("April")
        break;
    case "May":
        console.log("May")
        break;

        default:console.log("Invalid Month");
        break;
}

// Truthy && Falsy values
// Falsy values = false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy values = "0", "false", " ", [], {}, function(){} 



// How to do detect the array or object is empty or not

const arr = []

if(arr.length === 0){
    console.log("This is arr");
}

const obj = []

if(Object.keys(obj).length === 0){
    console.log("This is obj");
}

// false == 0 => true
// false == '' => true
// 0 == '' => true
// 0 == false => true

// Nullish Coalescing operator (??): null undefined
// This operator is specially design if the response from the server or the api didnt come then show the 2nd value 

const val1 = 5 ?? 10
const val2 = null ?? 10     // here it means if the response from the server didnt come then the value will be null else the value will be 10
const val3 = undefined ?? 30
const val4 = undefined ?? 40 ?? 23

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

