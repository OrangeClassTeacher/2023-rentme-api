import Item from "../models/item.model";
import { Request, Response } from "express";

//hi
const getAll = async (req: Request, res: Response) => {
  try {
    const result = await Item.find({});

    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getOne = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await Item.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const createItem = async (req: Request, res: Response) => {
  const newObj = req.body;
  try {
    console.log(req.body);
    if (newObj) {
      const result = await Item.create(newObj);
      res.json({ status: true, result });
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const updateItem = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await Item.findByIdAndUpdate({ _id }, req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const deleteItem = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await Item.findByIdAndDelete({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
export { getAll, getOne, deleteItem, updateItem, createItem };
