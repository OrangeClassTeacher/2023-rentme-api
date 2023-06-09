import Category from "../models/category";
import { Request, Response } from "express";

const getAllWithSearch = async (req: Request, res: Response) => {
  const { searchText } = req.body;
  const filter1 = {
    $or: searchText && [{ categoryName: { $regex: searchText } }],
  };
  try {
    const result = await Category.find(filter1);

    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const getAll = async (req: Request, res: Response) => {
  try {
    const result = await Category.find({});
    res.json({ status: true, result });
  } catch (err) {
    res.json({ result: false, message: err });
  }
};

const getOne = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await Category.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const createCategory = async (req: Request, res: Response) => {
  const newObj = req.body;

  try {
    console.log(req.body);
    if (newObj) {
      const result = await Category.create(newObj);
      res.json({ status: true, result });
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const updateCategory = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await Category.findByIdAndUpdate({ _id }, req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const deleteCategory = async (req: Request, res: Response) => {
  const { _id } = req.params;

  if (!_id) {
    res.json({ status: false, message: "param not found" });
    return;
  }
  try {
    const result = await Category.findByIdAndDelete({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
export {
  getAll,
  getOne,
  deleteCategory,
  updateCategory,
  createCategory,
  getAllWithSearch,
};

// HI
