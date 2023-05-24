import Item from "../models/item.model";
import { Request, Response } from "express";
const getAllWithSearch = async (req: Request, res: Response) => {
  const { pageSize, searchText, sort } = req.body;
  if (!searchText) {
    const pageNum = pageSize ? pageSize : 1;
    try {
      const skips = 10 * (pageNum - 1);
      const result = await Item.find().skip(skips).limit(10).sort(sort);
      console.log("result1");

      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  }
  if (!sort) {
    const pageNum = pageSize ? pageSize : 1;
    try {
      console.log("result2");
      const skips = 10 * (pageNum - 1);
      const result = await Item.find({
        itemName: { $regex: searchText, $options: "i" },
      })
        .skip(skips)
        .limit(10);
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  }
  if (!sort && !searchText) {
    try {
      const pageNum = pageSize ? pageSize : 1;
      const skips = 10 * (pageNum - 1);
      const result = await Item.find().skip(skips);
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  }
  if (searchText && sort) {
    console.log(sort);

    try {
      console.log("result3");

      const pageNum = pageSize ? pageSize : 1;
      const skips = 10 * (pageNum - 1);
      const result = await Item.find({
        itemName: { $regex: searchText, $options: "i" },
      })
        .skip(skips)
        .sort(sort)
        .limit(10);
      console.log(result);
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  }
};
const getItem = async (req: Request, res: Response) => {
  try {
    const result = await Item.aggregate([
      { $project: { categoryId: 1 } },
      { $group: { _id: "$categoryId", count: { $count: {} } } },
      { $sort: { count: -1 } },
    ]).limit(5);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const getAllWithDate = async (req: Request, res: Response) => {
  console.log("dfdz");
  try {
    const result = await Item.aggregate([{ $sort: { createdAt: -1 } }]).limit(
      20
    );
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
const getAllWithUser = async (req: Request, res: Response) => {
  const { createdUser } = req.body;
  const filter = {
    createdUser: { $regex: createdUser },
  };
  if (!createdUser) {
    res.json({ status: false, message: "User not found" });
  }
  try {
    const result = await Item.find(filter);
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
  if (!newObj) {
    res.json({ status: false, message: "Medeelle oruuulna uu!!" });
  }
  try {
    const result = await Item.create(newObj);
    res.json({ status: true, result, message: "" });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const updateItem = async (req: Request, res: Response) => {
  const { _id } = req.params;
  console.log(_id);

  if (!_id) {
    res.json({ status: false, message: "Id " });
  }
  try {
    console.log(req.body);
    const result = await Item.findByIdAndUpdate({ _id }, req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const deleteItem = async (req: Request, res: Response) => {
  const { _id } = req.params;
  if (!_id) {
    res.json({ status: false, message: "Id oruulna uu" });
  }
  try {
    const result = await Item.findByIdAndDelete({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
export {
  getAll,
  getOne,
  deleteItem,
  updateItem,
  createItem,
  getAllWithSearch,
  getAllWithUser,
  getItem,
  getAllWithDate,
};
