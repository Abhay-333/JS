class user {
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`UserName is ${this.userName}`)
    }
}

class Teacher extends user{
    constructor(userName,email, password){
        super(userName)             // super() will automatically .call the user and its properties, so that we get the userName
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.userName}`)
    }
}

const userOne = new Teacher("Abhay", "abhay@gmail.com", 2535)

const userTwo = new user("Rahul")

userOne.addCourse()
userOne.logMe()

// userTwo.addCourse()  // We dont have access to addCourse()

console.log(userOne instanceof user )
console.log(userOne instanceof Teacher )
console.log(userTwo instanceof user )
console.log(userTwo instanceof Teacher )