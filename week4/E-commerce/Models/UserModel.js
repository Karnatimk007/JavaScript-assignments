import { Schema, model } from "mongoose";
//Assignment:
// Add "quantity" filed  along with productId in user
//  cart. Set the initial value of "quantity" field is 1 by default.
//  When user adding a product to cart, it should check that product is already there in cart. If it is there , increment count by 1. If product is not there, then add new product to cart with quantity as 1
//create cart schema
const cartSchema = new Schema({
    product:
    {
    type:Schema.Types.ObjectId,
    ref: "EcomProduct" }, // name of product model
    quantity:{
        type:Number,
        default:0
    }
})
//create user schema
const userSchema = new Schema({
   name:{
    type:String,
    required:[true,"Name is required"]
   },
   email:{
    type:String,
    required:[true,"Email is required"],
    unique:[true,"Email already exists"] /// add to index in DB
   },
   password:{
    type:String,
    required:[true,"Password is required"]
   },
cart:{
    type:[cartSchema]
}
},
{
    strict:"throw",
    timestamps:true,
    versionKey:false
})


const User = model("EcomUser", userSchema)

export default User