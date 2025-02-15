import {Router} from "express";
import {GetCart,AddToCart,UpdateCart,DeleteCartproduct} from "../controllers/cart.controller.js";
import {authUser} from "../middlewares/auth.middleware.js";

const route = Router();

route.get("/",authUser,GetCart);
route.route("/:id").post(authUser,AddToCart).put(authUser,UpdateCart).delete(authUser,DeleteCartproduct);

export default route;