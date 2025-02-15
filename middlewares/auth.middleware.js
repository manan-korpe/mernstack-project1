import jwt from "jsonwebtoken";
import CustomeError from "../middlewares/Error.js";
import Cart from "../models/Cart.model.js";

async function authUser(req,res,next){
    try{
        const data = jwt.verify(req.cookies["app_key"],process.env.JWT_KEY);

        if(!data)
            return next(new CustomeError("something going wrong please login again"));

        const cart = await Cart.findOne({userId:data.id});
        if(!cart)
            return next(new CustomeError("cart not found"));

        req.cart = cart;
        req.user = data
        next();
    }catch(err){
        return next(new CustomeError(err.message));
    }
}

export {
    authUser
}