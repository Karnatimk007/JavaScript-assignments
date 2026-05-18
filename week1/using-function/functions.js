
////Function declaration or function definition////
    function add(a,b){
        return a+b
    }

///function calling////
    console.log(add(10,20))
///function expression////
let sub=function(a,b){
    return a-b
}
console.log(sub(10,20))
////////largest number////////
function largest(a,b,c){
    if(a>=b && a>=c){
        return a
    }
    else if(b>=a && b>=c){
        return b
    }
    else{
        return c
    }
}
console.log(largest(10,20,30))

    

