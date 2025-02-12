import jwt from "jsonwebtoken";
import CustomeError from "../middlewares/Error.js";

async function authUser(req,res,next){
    try{
        const data = jwt.verify(req.cookies["app_key"],process.env.JWT_KEY);
        console.log(data);
        next();
    }catch(err){
        next(CustomeError(err.message));
    }
}

export {
    authUser
}