function sayMyName() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("Y");
}

// sayMyName       // Function reference 
// sayMyName()     // Function execution

function userLogMsg(username) {
    // if(username === undefined){
    //     console.log("Please enter a username")
    //     return
    // }
    if(!username){
        console.log("Please enter a username")
        return
    }
    return console.log(`${username} just logged in`)
}

// userLogMsg()

function CalculateCartPrice(val1, val2, ...num1) {   // Here numb1 is rest operator 
    return num1 
}

// console.log(CalculateCartPrice(100, 200, 300, 3000, 400,5, 400))    // And if we console.log the values of val1. val2 we will get 100, 200

const user = {
    name: "Abhay", 
    price: 399
}

function name(anyObj) {
    return console.log(`The userName is ${anyObj.name} and the price is ${anyObj.price}`)
}

// name(user);
name({
    name:"Rahul",
    price:1000,
});


const arr = [111, 222,333,444]

function arrfunc(anyArr) {
    return anyArr[1]
}

// console.log(arrfunc(arr));
console.log(arrfunc([100,200,300,400]));