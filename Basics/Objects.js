// Singleton
// Object.Create

const insta = new Object()

insta.user = "Abhay"
insta.age = 21
insta.isLoggedIn = false

// console.log(insta)

const regularUser = {
    email: "xyz@gmail.com",
    userName:{
        fullName:{
            firstName: "Abhay",
            lastName: "Dhaneshwar"
        }
    }
}

// console.log(regularUser.userName.fullName.lastName);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = {5: 'e', 6: 'f'}

let obj4 = Object.assign({}, obj1, obj2, obj3)
obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const multipleUsers = [
    {
        id:0,
        name:"Ram"
    },

    {
        id:1,
        name:"Abhay"
    },

    {
        id:1,
        name:"Abhay"
    },

    {
        id:2,
        name:"Rahul"
    },
]

// console.log(multipleUsers[1].name);

// console.log(Object.keys(insta));
// console.log(Object.values(insta));
// console.log(Object.entries(insta));
// console.log(insta.hasOwnProperty('age'));


// Object literals
const sym = Symbol("key1")

const user = {
    name: "Abhay",
    [sym]: "mykey!",
    age: 21,
    isLoggedIn: true,
}

// console.log(user.name)
// console.log(user["isLoggedIn"])
// console.log(user[sym])

user.email = "abhay@gmail.com"
// Object.freeze(user)
user.email = "Ramesh@gmail.com"


user.greeting = function(){
    console.log(`Hello User!!!,`)
}

user.greetingTwo = function(){
    console.log(`Hello User!!!, ${this.name}`)
}

// console.log(user.greeting())
// console.log(user.greetingTwo())

// Destructing

const {user: userName} = insta

console.log(userName);