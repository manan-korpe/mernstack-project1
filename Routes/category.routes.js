import {Router} from "express";
import {AddCategory,UpdateCategory, GetAllCategory,DeleteCategory} from "../controllers/category.controller.js";

const route = Router();

route.post("/add",AddCategory);
route.patch("/update/:id",UpdateCategory);
route.get("/getall",GetAllCategory);
route.delete("/delete",DeleteCategory);

export default route