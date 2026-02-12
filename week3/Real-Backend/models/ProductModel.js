import {Schema, model} from 'mongoose'
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
export const ProductModel=model("product",productSchema)