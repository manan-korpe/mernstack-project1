import {Router} from "express";
import {
    Register,
    Login,
    Logout,
    Profile,
    updateProfile,
    AddAddress,
    DeleteAddress
} from "../controllers/user.controller.js";
import {
    authUser
} from "../middlewares/auth.middleware.js";

const route = Router();

route.post("/register",Register);
route.post("/login",Login);
route.post("/logout",Logout);
route.route("/profile").get(authUser,Profile).put(authUser,updateProfile);
route.route("/addaddress").post(authUser,AddAddress).delete(authUser,DeleteAddress)
export default route;