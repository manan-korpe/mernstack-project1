import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:mongoose.Schema.Types.Decimal128,
        required:true
    },
    mrp:{
        type:mongoose.Schema.Types.Decimal128,
        required:true,
        validate:{
            validator:function(val){
                return val >= this.price;
            },
            message:function(prop){
                return `MRP ${prop.value} must ber greater then or equal to the price ${this.price}`
            }
        }
    },
    quntity:{
        type:Number,
        required:true,
        min:0
    },
    ratting:{
        type:mongoose.Schema.Types.Decimal128,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        reuired:true
    },
    images:{
        type:[String],
        required:true
    },
},{timestamps:true});

const Product = mongoose.model("Product",productSchema);
export default Product;