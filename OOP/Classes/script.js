// class user{
//     constructor(userName, email, password){
//         this.userName = userName
//         this.email = email
//         this.password = password
//     }

//     getPassword(){
//         return `${this.password}xyz`
//     }

//     changeUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const userOne = new user("Abhay", "abhay@gmail.com", "4235")
// console.log(userOne.getPassword())
// console.log(userOne.changeUserName())

// behind the scene 

function user(userName, email, password){
    this.userName = userName
    this.email = email
    this.password = password
}

user.prototype.getPassword = function(){
    return `${this.password}`
}

user.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

const userTwo = new user("Ramesh", 'Ramesh@gmail.com', 2452)

console.log(userTwo)