
import Admin from "../models/admin"
import  {Request , Response} from "express"
import bcrypt from "bcrypt"


const getAll = async (req : Request, res : Response) => {
  try {
    const result = await Admin.find({});

    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getOne = async (req : Request, res : Response) => {
  const { _id } = req.params;
  try {
    const result = await Admin.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const createAdmin = async (req : Request, res : Response) => {
  const newObj = req.body;
  try {
    const hashedPass = await bcrypt.hash(newObj.password , 10)
    const newObj2 = {...newObj , password : hashedPass}
    console.log(req.body);
    if (newObj) {
      const result = await Admin.create(newObj2);
      res.json({ status: true, result });
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const updateAdmin = async (req : Request, res : Response) => {
  const { _id } = req.params;
  try {
    const result = await Admin.findByIdAndUpdate({ _id }, req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const deleteAdmin = async (req : Request, res : Response) => {
  const { _id } = req.params;
  try {
    const result = await Admin.findByIdAndDelete({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
export {getAll , getOne , deleteAdmin, updateAdmin , createAdmin}