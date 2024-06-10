// const obj = {
//     name: "Abhay",
//     id:2423,
//     age: 19,
//     sayMyName: function(){
//         // console.log(obj.name)
//         console.log(`NewVictim: ${name}`)       // will give error because the context of obj is not given
//     }
// }

// const obj2 = {
//     name: "Ram",
//     id:2423,
//     age: 19,
//     sayMyName: function(){
//         console.log(`NewVictim: ${obj2.name}`)       // This will not give an error but this is not a good Approach
//     }
// }

const obj3 = {
  name: "Rakesh",
  id: 2423,
  age: 19,
  sayMyName: function () {
    console.log(`NewVictim: ${this.name}`); // Good Approach ✔
    console.log(this);
  },
};

// console.log(obj3.sayMyName())

const date = new Date(); // Here the new keyword allows u to make multiple Instances for one object literalm, also use to make new context, here new is constructor

function logIn(userName, isLoggedIn) {
  this.userName = userName;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const userOne = logIn("Abhay", true);
// console.log(userOne); // if we console.log(userOne) then we see the output that our this.userName and this.isLoggedIn value gets added to its context

const userTwo = logIn("Rakesh", false);
// console.log(userTwo); // Now if we saw the output we will see that our old values are getting overwritten by the new values

// That's major problem when multiple programmers working on a project, if they interfare in such problems they the values may get overwritten by one or the other programmer

// To solve this issue new keyword is used

const userThree = new logIn("Rahul", true);  // New keyword just gives u the copy of the original object or function or array or anything and says that u should do changes here not in the original
// console.log(userThree);s

const userFour = new logIn("Sachin", false);
console.log(userFour.constructor);
//      ⬆   ^
//      ⬆   |
// The given below explanation is about above code
//1. Note - Whenever we used new keyword an empty object gets created that is called as instance
//2. A constructor function is getting called by the new keyword,it packs all the arguments and give it to u
//3. all the arguments we wrote or packed inside the constructor function gets injected into this keyword
//4. We get all that in our function