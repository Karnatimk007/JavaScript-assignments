//class_demo
//objects are created in runtime and store in the heap memory
class Person{
    pid;//public variable
    #age; //private variable
    //static variable
    static collegename='anurag'
    static {//static block
       
    }
    constructor(p,a)//constructor is a special method that is called when an object is created
    {
        this.pid=p
        this.age=a
        //static variable can be accessed using class name
        Person.collegename='anurag'
    }
    getDetails()
    {
        console.log(this.pid,this.age)
    }
}
let p1=new Person(1,20)//object creation
p1.getDetails()
// accessing static variable
console.log(Person.collegename) 
