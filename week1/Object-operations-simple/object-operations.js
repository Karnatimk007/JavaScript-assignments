//object operations
let emp={
    empno:58,
    name:'mahesh',
    age:21
}
console.log(emp.empno)
//add new property
emp.city='hyd'
//update property
emp.name='maheshk'
//delete property
delete emp.age
//freeze object
Object.freeze(emp)
emp.city='bangalore'
console.log(emp)
//read keys
console.log(Object.keys(emp))
//read values
console.log(Object.values(emp))
//read entries
console.log(Object.entries(emp))
//unpack object(destructuring)
let {empno,name,age,city}=emp //variable name  should be same as object property
//limitations
//1. order of unpacking is not important
//2. we can unpack only object properties
console.log(empno,name,age,city)