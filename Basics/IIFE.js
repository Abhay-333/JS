// Immediately Invoked Function Expressions (IIFE)
// We use IIFE for the problems that gets created by the global scoped variable that pollutes the code to clear the pollution we use IIFE and for the immediate execution of that function we use IIFE 

(function one(){       //Named IIFE 
    console.log("DB Connected");
})();   // Here it is necessary to put a semicolon or the further code may not execute code editor may put a semicolon here beaware

( (name) => {       //UnNamed IIFE
    console.log(`Hi... ${name}`);
})("Abhay");