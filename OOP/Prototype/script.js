function multiply(num) {
  //Js functions act as function as well as object
  return num * 5;
}
multiply.power = 5;

// console.log(multiply(2))
// console.log(multiply.power)
// console.log(multiply.prototype)
// Actually the .prototype gives us more property that we can see using this keyword, that includes the properties of that function we can add the properties as we did in the introduction part. .prototype gives the internal properties of that function

function createUser(userName, score) {
  this.userName = userName; // this keyword sets the current context
  this.score = score; // this keyword sets the current context
//   console.log(this.userName);
//   console.log(this.score);
}

createUser.prototype.scoreIncrementer = function(){
    this.score++;
}

createUser.prototype.printScore = function(){
    console.log(`The score is ${this.score}`)
}

const userOne = new createUser("Roshan", 100);
const userTwo = new createUser("John", 200);

// userOne.printScore()
// userTwo.printScore()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

const str = "Abhay"

// console.log(str.trueLength) // We want to add the trueLength property to the str

const heros = ["Thor", "spiderman"]

const obj = {
    userName: "Ramesh", 
    id:1234,
    password: 4152,
    getPassword: function(){
        console.log(`The victim is ${this.userName} and his/her password is ${this.password}`)
    }
}
Object.prototype.Abhay = function(){
    console.log("Abhay added to Heros")
}

Array.prototype.Rahul = function (){
    console.log("Rahul is new here")
}


// obj.Abhay()            // obj is object therefore Abhay() dont work here
// obj.Rahul()         // obj is object therefore Rahul() dont work here
// heros.Abhay()          // heros is arr therefore Abhay() will work here
// str.Abhay()            // str is string therefore Abhay() will work here
// str.Rahul()         // str is string therefore Rahul() will not work here
// heros.Rahul()          // heros is arr therefore Rahul() will work here


// Inheritance

const Teacher = {
    teaching:true
}

const TeachingSupport = {
    isAvailable:true
}

const TA = {
    makeAssignments: 'js assignments',
    fullTime:false,
    __proto__: Teacher,     // __proto__ is used to get access of another object 
}

// Teacher.__proto__ = TeachingSupport

// console.log(Teacher.__proto__)      // but its outdated

// modern syntax

Object.setPrototypeOf(Teacher, TeachingSupport)

const str1 = "Rahul"

String.prototype.trueLength = function(){
    console.log(`The TrueLength of ${this} is: ${this.trim().length}`)
}

str1.trueLength()
"ram".trueLength()

"lakhan".trueLength()