// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss
let date=new Date()
let year=date.getFullYear()//we will get the year from date 
let month=date.getMonth()// we will get the month from date
let d1=date.getDate();//we will get the date  
let day=date.getDay();//get the day 
let hours=date.getHours();// get hours
let minutes=date.getMinutes();//get minutes
let seconds=date.getSeconds();// get seconds
console.log(`${d1}-${month}-${year} ${hours}:${minutes}:${seconds}`) // displaying the date in  DD-MM-YYYY HH:mm:ss formate


