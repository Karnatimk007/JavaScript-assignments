let data=100
let copydata=data
data=200
//check
console.log(data)
console.log(copydata)

let obj={
    a:1,b:2
}
let copyobj={...obj}///spread operator or we can use Object.assign()
// we can use only when plane object ,we cannot use for nested objects
obj.a=100
//check
console.log(obj)
console.log(copyobj)
///------------------------
//structure clone
let student={
    name:"mahesh",
    age:21,
    course:"mca",
    address:{
        city:"hyderabad",
        state:"telangana"
    }
}
let copystudent=structuredClone(student)
student.address.city="bangalore"
//check
console.log(student)
console.log(copystudent)
///--------------------------------------
let product={
    name:"laptop",
    price:100000
}
///create product obj with 30% discount
let copyproduct={...product,price:70000}
//check
console.log(product)
console.log(copyproduct)
