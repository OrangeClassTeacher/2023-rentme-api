import { Router } from "express";
import {
  getOne,
  getAll,
  createItem,
  deleteItem,
  updateItem,
  getAllWithSearch,
  getAllWithUser,
} from "../controllers/item.controller";

const route = Router();

route
  .post("/items", getAllWithSearch)
  .post("/itemUser", getAllWithUser)
  .get("/item", getAll)
  .get("/item/:_id", getOne)
  .post("/item", createItem)
  .put("/item/:_id", updateItem)
  .delete("/item/:_id", deleteItem);

export default route;
