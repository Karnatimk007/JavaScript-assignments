//what is error??
//what is issue with error?
//how to handle error?
///catching the error object by the try catch block
let a=10
let b=29;
console.log("a is",a);
try{
    console.log(x)
}
catch(error){
    console.log(error.name)
    console.log(error.message)
   // console.log(error.stack)
}
console.log("b is",b)
//why finally block is used?
//finally block is used to execute the code whether the error is thrown or not
//example:closing the file,releasing the resources
//why custom exception is used?
//custom exception is used to throw the error with custom message
//example:throw new Error("custom error")