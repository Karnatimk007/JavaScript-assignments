
// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"
const courses=["js","r","node","mongon","express"]
console.log(courses.filter(cc=>cc.length>5))
console.log(courses.map(cc=>cc.toUpperCase()))
console.log(courses.reduce((acc,cc)=>acc+" | "+cc))
console.log(courses.find(cc=>cc=="react"))
console.log(courses.findIndex(cc=>cc=="node"))  