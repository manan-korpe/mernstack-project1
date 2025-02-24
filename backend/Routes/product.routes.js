import {Router} from "express";
import upload from "../config/multer.js";
import {AddProduct,GetProduct,GetAllProduct,DeleteProduct,UpdateProduct} from "../controllers/product.controller.js";
const route = Router();

route.get("/",GetAllProduct)
route.post("/add",upload.array("images"),AddProduct);
route.route("/:id").get(GetProduct).delete(DeleteProduct).put(upload.array("images"),UpdateProduct);

export default route;