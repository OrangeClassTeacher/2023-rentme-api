import { Router } from "express";
import {
  getOne,
  getAll,
  createItem,
  deleteItem,
  updateItem,
} from "../controllers/item.controller";

const route = Router();

route
  .post("/items", getAll)
  .get("/item/:_id", getOne)
  .post("/item", createItem)
  .put("/item/:_id", updateItem)
  .delete("/item/:_id", deleteItem);

export default route;
