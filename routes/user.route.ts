import { Router } from "express";
import {
  getOne,
  getAll,
  createUser,
  deleteUser,
  updateUser,
  login,
  getAllWithSearch,
} from "../controllers/user.controller";
// import { auth } from "../middleware/auth";

const route = Router();

route
  .post("/users", getAllWithSearch)
  .get("/user", getAll)
  .post("/user/:_id", getOne)
  .post("/user", createUser)
  .put("/user/:_id", updateUser)
  .delete("/user/:_id", deleteUser)
  .post("/login", login);

export default route;
