import { Router } from "express";
import {
  getOne,
  getAll,
  createAdmin,
  deleteAdmin,
  updateAdmin,
} from "../controllers/admin.controller";

const route = Router();

route
  .get("/admin", getAll)
  .get("/admin/:_id", getOne)
  .post("/admin", createAdmin)
  .put("/admin/:_id", updateAdmin)
  .delete("/admin/:_id", deleteAdmin);

export default route;
