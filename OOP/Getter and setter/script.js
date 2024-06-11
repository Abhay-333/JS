class user{
    constructor(userName, email){
        this.userName = userName
        this.email = email
    }

    get email(){
        return this._email
    }
    set email(value){
        this._email = value  
    }
}
// getter or setter are used to give the autherization to known members 
const userOne = new user("Abhay", 'email@mail.com')     // in this case i dont want to give the access my email to anyone then i will use getter and setter

//this is half file because i am not getting this getter and setter might get in future
 
console.log(userOne.email)