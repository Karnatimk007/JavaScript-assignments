// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92
const marks=[78,92,35,88,40,67]
console.log(marks.filter(mark=>mark>=40))
console.log(marks.map(mark=>{
    return{
        mark:mark+5
    }
}))
console.log(marks.reduce((acc,mark)=>acc>mark?acc:mark))
console.log(marks.find(mark=>mark<40))
console.log(marks.findIndex(mark=>mark===92))