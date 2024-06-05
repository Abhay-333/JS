const coding = ["js", "cpp", "c", "python", "java"]

const values = coding.forEach( (item)=>{
    // console.log(item);
    return item
})

// console.log(values)     // we get here undefined 

const Numbs = [1,2,3,4,5,6]

// const numbValues = Numbs.filter( (numbers)=>{       // We can do same thing using forEach 
//     return  numbers > 3
// })

// console.log(numbValues)

const Numbs1 = []

Numbs.forEach( (val)=>{
    if(val>3){
        Numbs1.push(val)
    }
})

// console.log(Numbs1);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   const NewBooks =  books.filter( (bk)=>{
//     return bk.genre === 'History'
//   })

  const NewBooks = books.filter( (bk)=>{
    return bk.publish > 2000 && bk.genre === 'Science'
  })

// console.log(NewBooks);


// Map

const newBook = books.map( (bk)=>(bk.genre === 'Non-Fiction' ? bk.genre = 'Thriller' : bk.genre)
)

// console.log(newBook)

const arr = [1,2,3,4,5,6,7,8,9,10] 

const result = arr.map((num)=>num*2).map((num)=>num+10).filter((num)=>num > 5)      // This concept is known as chaining
// console.log(result);


const arr1 = [1,2,3,4]

const result1 = arr1.reduce(
    function(acc, cv){
        // console.log(`acc: ${acc}, currentValue: ${cv}`);
        return acc + cv         // acc = acc + currentValue     acc = 0 + 1; acc=1; acc = 1+1; acc=2;
    },0                 // InitialValue 
)

// console.log(result1);


const Cart = [
    {
        item: "Laptop",
        price:40000
    },
    {
        item: "Computer",
        price:49990
    },
    {
        item: "MausePad",
        price:150
    },
    {
        item: "Mause",
        price:500000
    },
    {
        item: "Speaker",
        price:8000
    },
]

const priceToPay = Cart.reduce( (acc , item)=> acc + item.price, 0)

console.log(priceToPay)