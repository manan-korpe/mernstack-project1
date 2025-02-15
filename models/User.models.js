import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwtToken from "jsonwebtoken";

const addressSchema = new mongoose.Schema({
    street:{
        type:String
    },
    city:{
        type:String,
    },
    state:{
        type:String,
        enum:["Gujarat","Maharastra","Rajesthan"]
    },
    zipCode:{
        type:Number,
    }
});
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"]
    },
    phonenumber:{
        type:Number,
        match:/^[6-9]{1}[0-9]{9}$/
    },
    email:{
        type:String,
        required:true,
        unique:true,
        immutable:true
    },
    avtar:{
        type:String,
    },
    address:addressSchema
},{timestamps: true});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
       return next();
    }
    const solt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,solt);
    next();
});

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateToken = function(){
    const token = jwtToken.sign({id:this._id,user:this.name},process.env.JWT_KEY,{
        expiresIn:"7d"
    });
    return token;
}

const User = mongoose.model("User",userSchema);
export default User;