// const promise1 = new Promise(function (resolve, reject) {
//   // Do an async task
//   setTimeout(() => {
//     console.log("Async task completed");
//     resolve();
//   }, 1000);
// });

// promise1.then(() => {
//   console.log("promise Consumed");
// });

// let i = 0;
// let Interval;

// const promise2 = new Promise(function (resolve, reject) {
// Interval = setInterval(function () {
//   console.log(i++);
//   if (i > 3) {
//     clearInterval(Interval);
//   }
//   console.log("Async task 2 completed")
//   resolve()
// }, 1000);

// }).then(function(){
//     console.log("Async task resolved")
// })

// // console.log(promise2)

// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async task 3")
//         resolve({userName: "Abhay", email: "abc@gmail.com"})
//     }, 1000);
// })

// promise3.then(function(userDetails){
//     console.log(userDetails)
// })

// const promise4 = new Promise(function(resolve, reject){
//     let error = false
//     if(!error){
//         resolve({userOne: "Ramesh", id:1241})
//     }
//     else{
//         reject("Error SomeThing went wrong 404.")
//     }
// })

// promise4.then((function(userOne){
//     console.log(userOne)
//     return userOne.id
// }))
// .then(function(userId){
//     console.log(userId)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log("The promise is either resolved or rejected")
// })

// const promise5 = new Promise(function (resolve, reject) {
//   let error = false;
//   if (!error) {
//     resolve({ Language: ["English", "Spaniol"], password: 4289 });
//   } else {
//     reject("Error language dont support");
//   }
// });

// async function consumedPromise() {
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumedPromise()

async function GetallUsers() {
  try {
    const response = await fetch(`https://fakestoreapi.com/users`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

GetallUsers();

fetch(`https://fakestoreapi.com/users`)
.then((response)=>(response.json()))
.then((origianlData)=>console.log(origianlData))
.catch((error)=>console.log(error))