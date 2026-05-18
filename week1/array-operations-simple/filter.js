let mrks=[90,10,0,20,30,40,50,60,70,80,90,100]

// write a function that can extract greater than 50 and pack them and return 

console.log(mrks.filter(mark=>mark>50))//filter for selection
//map for transformation
console.log(mrks.map(mark=>mark+5))
//reduce for aggregation
console.log(mrks.reduce((acc,mark)=>acc+mark))
console.log(mrks.reduce((acc,mark)=>acc<mark?acc:mark))//find min
console.log(mrks.reduce((acc,mark)=>acc>mark?acc:mark))//find max
//find index
console.log(mrks.findIndex(mark=>mark==50))
console.log(mrks.find(mark=>mark==50))
//students
// let students=[
//     {
//         sno:1,name:"mahesh",mrk:90
//     },
//     {
//         sno:2,name:"mah",mrk:10
//     },
//     {
//         sno:3,name:"esh",mrk:9
//     }
// ]
// console.log(students.filter(student=>student.mrk<20))//find students mrk less than 20
// //if mrk is less than 20 then add 2 to mrk else return mrk
// console.log(students.map(student=>student.name==="mahesh"?student.mrk+2:student.mrk));

// console.log(students.reduce((acc,student)=>acc+student.mrk,0))//find sum of mrk
