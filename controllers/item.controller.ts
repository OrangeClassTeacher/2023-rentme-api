import Item from "../models/item.model";
import { Request, Response } from "express";


const ratingCount = [
  { rating: 4.5, count: 0 },
  { rating: 4, count: 0 },
  { rating: 3.5, count: 0 },
  { rating: 3, count: 0 },
];
//hi
const getAllWithSearch = async (req: Request, res: Response) => {
  const { pageSize, searchText } = req.body;
  // const count = pageSize * 30 +1
  const filter1 = {
    $or: searchText && [
      { itemName: { $regex: searchText } },
      { description: { $regex: searchText } },
    ],
  };
  try {
    const rowCount = await Item.find(filter1).count();
    console.log(rowCount);
    const skips = 10 * (pageSize - 1);
    const result = await Item.find(filter1).skip(skips).limit(10);

    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const getAll = async (req: Request, res: Response) => {

  console.log("Test");
  
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
export { getAll, getOne, deleteItem, updateItem, createItem, getAllWithSearch };
