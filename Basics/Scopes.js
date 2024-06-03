// var c = 100    // The value of c will be not printed on console it will print the value inside the if statement that is 30
// let c =100    // will give error

const a = 200

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log(a);
    // console.log(b);
    // console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);

function One(){
    const user = "Abhay"

   function Two(){
        const websites = "YouTube"
        // console.log(user);           //Hoisting
    }
    // console.log(websites);
    Two()
}

One()

if(true){
    const userName = "Ramesh"

    if(userName === "Ramesh"){
        console.log(userName)
        const usedWebsites = "GitHub"
    }
}
// console.log(usedWebsites)
// console.log(userName)


// +++++++++++++ Interesting +++++++++++++++

console.log(addOne(4));
function addOne(value){
    return value + 1
}
                                                //Hoisting
console.log(addTwo(4));
const addTwo = function(value){
    return value + 2
}