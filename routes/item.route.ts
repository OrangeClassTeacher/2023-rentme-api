import { Router } from "express";
import {
  getOne,
  getAll,
  createItem,
  deleteItem,
  updateItem,
  getAllWithSearch,
} from "../controllers/item.controller";

const route = Router();

route
  .post("/items", getAllWithSearch)
  .get("/item", getAll)
  .get("/item/:_id", getOne)
  .post("/item", createItem)
  .put("/item/:_id", updateItem)
  .delete("/item/:_id", deleteItem);

export default route;
