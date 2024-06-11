class user{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`UserName is: ${this.userName}`)
    }

    static createId(){              // Static keyword is used to make the access to the method private
        return Math.floor(Math.random() * 10)
    }
}

const userOne = new user("Abhay")

// console.log(userOne.createId())  //After adding static keyword before the createId(), this code will give error and will prevent us to get access to that element

class Teacher extends user{
    constructor(userName, email){
        super(userName)
        this.email = email
    }    
}


const userTwo = new Teacher("Sachin", "sachin@gmail.com")

// console.log(userTwo.createId())
console.log(userTwo.logMe())