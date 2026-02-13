// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28
const temp=[32,35,28,40,38,30,42]
console.log(temp.filter(tep=>tep>35))
console.log(temp.map(tep=>(tep*9/5)+32))
console.log(temp.reduce((acc,tep)=>acc+tep)/temp.length)
console.log(temp.find(rep=>rep>40))
console.log(temp.findIndex(tep=>tep==28))
