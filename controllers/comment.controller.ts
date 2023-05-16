import Comment from "../models/comment";
import { Request, Response } from "express";

const getAllComment = async (req: Request, res: Response) => {
  const { itemId } = req.body;
  try {
    const result = await Comment.find({
      itemId: { $regex: itemId },
    })
      .sort({ createdAt: 1 })
      .limit(15);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const getOneComment = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await Comment.find({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const createComment = async (req: Request, res: Response) => {
  const newObj = req.body;
  if (!newObj) {
    res.json({ status: false, message: "Medelle oruul" });
  }
  try {
    const result = await Comment.create(newObj);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const updateComment = async (req: Request, res: Response) => {
  const { _id } = req.params;
  if (!_id) {
    res.json({ status: false, message: "Id not found" });
  }
  try {
    const result = await Comment.findByIdAndUpdate({ _id }, req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const deleteComment = async (req: Request, res: Response) => {
  const { _id } = req.params;
  if (!_id) {
    res.json({ status: false, message: "Id oruul" });
  }
  try {
    const result = await Comment.findByIdAndDelete({ _id });
    res.json({ status: true, message: "Amjilttai ustgalaa" });
  } catch (err) {
    res.json({ status: false, message: "User not found" });
  }
};
export {
  getAllComment,
  getOneComment,
  deleteComment,
  updateComment,
  createComment,
};
