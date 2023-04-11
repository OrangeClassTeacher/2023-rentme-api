
import Employee from "../models/employees"
import  {Request , Response} from "express"


const getAll = async (req : Request, res : Response) => {
  try {
    const result = await Employee.find({});

    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getOne = async (req : Request, res : Response) => {
  const { _id } = req.params;
  try {
    const result = await Employee.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const createEmployee = async (req : Request, res : Response) => {
  const newObj = req.body;
  try {
    console.log(req.body);
    if (newObj) {
      const result = await Employee.create(newObj);
      res.json({ status: true, result });
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const updateEmployee = async (req : Request, res : Response) => {
  const { _id } = req.params;
  try {
    const result = await Employee.findByIdAndUpdate({ _id }, req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const deleteEmployee = async (req : Request, res : Response) => {
  const { _id } = req.params;
  try {
    const result = await Employee.findByIdAndDelete({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
export {getAll , getOne , deleteEmployee, updateEmployee , createEmployee}