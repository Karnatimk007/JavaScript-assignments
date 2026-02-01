import {Schema, model} from 'mongoose'
//create user schema (username password, age)
const userSchema =new Schema({
   username:{
    type:String,
    required:[true,"Username is required"],
    minlength:[6,"Username must be at least 6 characters long"],
    maxlength:[20,"Username must be at most 20 characters long"]
},
   password:{type:String,
    required:[true,"Password is required"],
    minlength:[6,"Password must be at least 6 characters long"],
    maxlength:[20,"Password must be at most 20 characters long"]},
   age:{
    type:Number,
    required:[true,"Age is required"],
    min:[18,"Age must be at least 18"],
    max:[25,"Age must be at most 25"]
}
},{
    strict:'throw',//it will throw an error if any extra field is added
    timestamps:true//it will add createdAt and updatedAt fields automatically
})
const productSchema=new Schema({
    pid:{
        type:String,
        required:[true,'product id required'],
        minlength:[6,'product id length atleast 6'],
        maxlength:[20,'product id length atmost 20']
    },
    productName:{
        type:String,
        required:[true,'product name required'],
        minlength:[6,'product name length atleast 6'],
        maxlength:[20,'product name length atmost 20']
    },
    price:{
        type:Number,
        required:[true,'price required'],
        min:[200,'price atleast 200'],
        max:[10000,'price atmost 10000']
    }
},{ strict:'throw',timestamps:true})
//create user model with the schema
export const UserModel=model("user",userSchema)
export const ProductModel=model("product",productSchema)
// mongoose will prularize the collection name automatically and create a collection