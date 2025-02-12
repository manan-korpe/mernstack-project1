import {Router} from "express";
import {
    Register,
    Login,
    Logout,
    Profile
} from "../controllers/user.controller.js";
import {
    authUser
} from "../middlewares/auth.middleware.js";

const route = Router();

route.post("/register",Register);
route.post("/login",Login);
route.post("/logout",Logout);
route.get("/profile",authUser,Profile);

export default route;