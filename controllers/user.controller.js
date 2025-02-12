import CustomeError from "../middlewares/Error.js";
import User from "../models/User.models.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const Register = asyncHandler( async(req,res,next)=>{
        console.log("woking")
        const {name,lastname,email,password} = req.body;

        if(!name || !lastname || !email || !password){
            next(new CustomeError("bad cradintal value sended",400));
        }

        const isExist = await User.findOne({email:email});

        if(isExist)
            next(new CustomeError("user already exist",400));

        const user = new User({
            name:name,
            lastname:lastname,
            email:email,
            password:password,
        });

        await user.save();

        res.status(201).json({success:true,message:"user stored successfuly"});
});

const Login = asyncHandler( async (req,res)=>{
            const {email,password} = req.body;
    
            if(!email || !password)
                next(new CustomeError("Enter valid user name or password",400));
        
            const user = await User.findOne({email:email});
            const isValid = await user.comparePassword(password);
    
            if(!isValid)
                next(new CustomeError("Enter valid user name or password",400));
    
            const token = user.generateToken();
    
            if(!token)
                next(new CustomeError("something went wrong",400));
    
            res.cookie("app_key",token,{
                httpOnly:true
            })
    
            res.json({success:true,message:"login successfuly"});
});

const Logout=asyncHandler(async(req,res)=>{
    res.clearCookie("app_key");

    res.json({message:"logout"});
})

const Profile = asyncHandler(async (req,res)=>{
    const user = await User.findById({},{"name":"abc"});
    res.json({success:"success..!"});
});

export {
    Register,
    Login,
    Logout,
    Profile
}