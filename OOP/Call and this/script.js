function setUserName(userName){
    this.userName = userName 
    console.log("call hua")
}

function createUser(userName, email, password){
    // setUserName(userName)  // this is not the correct way to call a function here
    setUserName.call(this, userName)     
    this.email = email
    this.password = password
}

const userOne = new createUser("Abhay", "Abhay@gmail.com", 5132)

console.log(userOne)