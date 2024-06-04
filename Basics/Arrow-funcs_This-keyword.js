const user = {
    userName: "Ramesh",
    Price: 9999,
    welComeMsg: function(){
        console.log(`${this.userName}, Welcome to our website`);       
    }
}

// user.welComeMsg()
// user.userName = "Abhay"
// user.welComeMsg()

// console.log(this);  //Here the value of this is {} because we are using node the value of this will be different in the browser

function one(){
    let user = "Rahul"
    console.log(this.user);      // The value of this is different in function is different, this actually works in objects.
}

one()

const Two = function(){
    let user1 = "Rahul"
    console.log(this.user);      // The value of this is different in function is different, this actually works in objects.
}

Two()

const Three = ()=>{
    let user2 = "Rahul"
    console.log(this);      // The value of this is different in function is different, this actually works in objects.
}
Three()

const four = ()=>{
    return console.log("Hi")          // Explicit return
}

four()

const Five = ()=>( console.log("Hello") )          // Implicit return

Five()