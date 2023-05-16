import { Router } from "express";
import {
  getAllComment,
  getOneComment,
  deleteComment,
  updateComment,
  createComment,
} from "../controllers/comment.controller";

const route = Router();

route
  .post("/comments", getAllComment)
  .get("/comment/:_id", getOneComment)
  .post("/comment", createComment)
  .put("/comment/:_id", updateComment)
  .delete("/comment/:_id", deleteComment);
export default route;
