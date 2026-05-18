// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
let dob = "2000-05-15";


// Tasks:
//         1. Calculate exact age in years
let date = new Date();
let d1 = new Date(dob);
let age = date.getFullYear() - d1.getFullYear()
let month = date.getMonth() - d1.getMonth()
if (month < 0 || month ===0 && date.getDate() < d1.getDate()) { 
    // if month is less than 0 or month is 0 and date is less than d1.getDate() then decrement the age
    age--
}
console.log("age is", age)
