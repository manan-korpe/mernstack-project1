import CustomeError from "../middlewares/Error.js";
import Success from "../middlewares/success.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/User.models.js";
import Cart from "../models/Cart.model.js";
import sendmail from "../config/mail.js"

const Register = asyncHandler( async(req,res,next)=>{
        const {name,lastname,email,password} = req.body;
        
        if(!name || !lastname || !email || !password){
            next(new CustomeError("bad cradintal value sended",400));
        }

        const isExist = await User.findOne({email:email});

        if(isExist)
            next(new CustomeError("user already exist",400));

        const Newuser = new User({
            name:name,
            lastname:lastname,
            email:email,
            password:password,
        });

        await Newuser.save();

        const user = await User.findOne({email:email});

        if(!user)
            return next(new CustomeError("semthing going wrong",400));

        //email sending 
        const message = `thanks ${user.name} fro register our website 
        i hope your will find best product here........!
        `
        await sendmail(user.email,"registeration mail mernstack project",message);
        //email sending end
        const Newcart = new Cart({userId:user});
        await Newcart.save();
        const cart = await Cart.findOne({userId:user._id});
        if(!cart)
            return next(new CustomeError("semthing going wrong",400));

        res.status(201).json({success:true,message:"Registration successfuly completed",data:[user,cart]});
});

const Login = asyncHandler( async (req,res,next)=>{
            const {email,password} = req.body;

            if(!email || !password)
                return next(new CustomeError("Enter valid user name or password",400));
        
            const user = await User.findOne({email:email});

            if(!user)
                return next(new CustomeError("Enter valid user name or password",400));
            
            const isValid = await user.comparePassword(password);

            if(!isValid)
                return next(new CustomeError("Enter valid user name or password",400));
    
            const token = user.generateToken();
    
            if(!token)
                return next(new CustomeError("something went wrong",400));
    
            res.cookie("app_key",token,{
                httpOnly:true
            })
    
            const cart = await Cart.findOne({userId:user._id});
            
            res.json(new Success("login successful",201,{user:user,cart:cart}));
});

const Logout=asyncHandler(async(req,res,next)=>{
    res.clearCookie("app_key");

    res.json({message:"logout"});
})

const Profile = asyncHandler(async (req,res,next)=>{
    if(!req.user)
        return next(new CustomeError("something going wrong",401));

    const user = await User.findById(req.user.id).select("-password -role -_id");
    const address = user.getAddress();
    console.log(user.getAddress())
    if(!user)
        return next(new CustomeError("something going wrong",401));

    res.json(new Success("profile founded",201,{user:user,address:address}));
});

const updateProfile = asyncHandler(async (req,res,next)=>{
    const data = req.body;
    const isEmpty = Object.values(data).some(val=>val.trim()=="");

    if(isEmpty)
        return next(new CustomeError("Enter valid data",401));

    const updatedProfile = await User.findByIdAndUpdate(req.user.id,{$set:data},{new:true})

    if(!updatedProfile)
        return next(new CustomeError("something going wrong try again",401));
    res.json({temp:updatedProfile})
});

const AddAddress = asyncHandler(async (req,res,next)=>{
    let {street,city,state,zipCode} = req.body;
    street = street.trim();
    city = city.trim();
    state = state.trim();
    zipCode = zipCode.trim();

    if(!street || !city || !state || !zipCode)
        return next(new CustomeError("Enter valid data",401));

    const address = {
        street:street,
        city:city,
        state:state,
        zipCode:zipCode
    }
    const user = await User.findByIdAndUpdate(req.user.id,{address:address},{new:true});
    if(!user)
        return next(new CustomeError("something going wrong try again",401));
   
    res.json(new Success("address updated",201,user));
});

const DeleteAddress = asyncHandler(async (req,res,next)=>{
    const address = await User.findById(req.user.id);
    if(!address.address)
        return next(new CustomeError("you dont have address",401));

    const Deletedaddress = await User.findByIdAndUpdate(req.user.id,{$set:{address:null}});

    if(!Deletedaddress)
        return next(new CustomeError("something going wrong try again",401));

    res.json(new Success("address deleted successfuly",201));
});

export {
    Register,
    Login,
    Logout,
    Profile,
    updateProfile,
    AddAddress,
    DeleteAddress
}