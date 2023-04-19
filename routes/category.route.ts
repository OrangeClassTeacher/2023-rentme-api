import { Router } from "express";
import {
  getOne,
  getAll,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../controllers/category.controller";

const route = Router();

route
  .post("/categories", getAll)
  .get("/category/:_id", getOne)
  .post("/category", createCategory)
  .put("/category/:_id", updateCategory)
  .delete("/category", deleteCategory);

export default route;
