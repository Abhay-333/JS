let todaysDate = new Date()

// console.log(todaysDate.toString());
// console.log(todaysDate.toDateString());
// console.log(todaysDate.toISOString());
// console.log(todaysDate.toLocaleString());
// console.log(todaysDate.toLocaleDateString('en-IN'));
// console.log(todaysDate.toJSON());

// console.log(typeof todaysDate);

// let CreatedDate = new Date()
                        // yy --mm--dd
let CreatedDate = new Date(2024, 5, 2)

console.log(CreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp.toLocaleString());
console.log(CreatedDate.getTime());

console.log(Math.round(Date.now()/1000));

let newDate = new Date();
newDate.toLocaleString('default',{
    weekday:"long",
})

console.log(newDate)