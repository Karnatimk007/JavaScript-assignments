import { Schema, model } from "mongoose";
//product schema
const productSchema = new Schema({
   productName:{
    type:String,
    required:[true,"product name required"],
   },
   price:{
    type:Number,
    required:[true,"Product price required"]
   },
   brand:{
    type:String,
    required:[true,"product brand required"]
   }

},
{
    strict:"throw",
    timestamps:true,
    versionKey:false
})

const Product = model("EcomProduct", productSchema)

export default Product


