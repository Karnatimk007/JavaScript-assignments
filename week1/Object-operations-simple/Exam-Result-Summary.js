// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90
const marks = {
    maths: 78,
    physics: 65,
    chemistry: 82,
    english: 55
};
let s=0;
let h=0
for(let mark in marks){
    s+=marks[mark]
    if(h<marks[mark])
    {
        h=marks[mark]
    }
}
console.log(s)
console.log(s/4)
console.log(h)
marks.computer=90



