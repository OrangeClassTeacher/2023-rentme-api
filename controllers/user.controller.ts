import User from "../models/user.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getAllWithSearch = async (req: Request, res: Response) => {
  const { pageSize, searchText } = req.body;
  // const count = pageSize * 30 +1
  console.log(pageSize, searchText);

  const filter1 = {
    $or: searchText && [
      { fisrtName: { $regex: searchText } },
      { lastName: { $regex: searchText } },
      { Username: { $regex: searchText } },
      { email: { $regex: searchText } },
    ],
  };
  try {
    const rowCount = await User.find(filter1).count();
    console.log(rowCount);
    const skips = 10 * (pageSize - 1);
    const result = await User.find(filter1).skip(skips).limit(10);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const getAll = async (req: Request, res: Response) => {
  try {
    const result = await User.find({});
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getOne = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await User.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const createUser = async (req: Request, res: Response) => {
  const newObj = req.body;
  try {
    if (newObj) {
      const hashedPass = await bcrypt.hash(newObj.password, 10);
      const newObj2 = { ...newObj, password: hashedPass };
      const result = await User.create(newObj2);
      res.json({ status: true, result });
    } else {
      console.log("err");
    }
  } catch (err) {
    res.json({ status: false, err });
  }
};
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(500)
      .send({ status: false, message: "Medeelelee buren oruulna uu" });
    return;
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token1: string = process.env.TOKEN_SECRET_KEY || "";
    const token = jwt.sign({ user: user }, token1, {
      expiresIn: "24h",
    });
    res
      .status(200)
      .send({ status: true, result: user, message: "Success", token });
    return;
  } else {
    res.status(400).send({
      status: false,
      message: "user oldsongui ee, nuuts ug taarahgui bna",
    });
    return;
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { _id } = req.params;
  const { password } = req.body;

  if (password) {
    const hashedPass = await bcrypt.hash(password, 10);
    console.log(hashedPass);
    const newObj = { ...req.body, password: hashedPass };
    try {
      const result = await User.findByIdAndUpdate({ _id }, newObj);
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  } else {
    try {
      console.log(req.body);
      const result = await User.findByIdAndUpdate({ _id }, req.body);
      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  }
};
const deleteUser = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await User.findByIdAndDelete({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
export {
  getAll,
  getOne,
  deleteUser,
  updateUser,
  createUser,
  login,
  getAllWithSearch,
};
