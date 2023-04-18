
import Item from "../models/item.model"
import  {Request , Response} from "express"


const getAll = async (req : Request, res : Response) => {
  const {pageSize, searchText , sort } = req.body
  try {
const filter1 = {
    $or: 
      searchText && [
        { itemName: { $regex: searchText } },
        { description: { $regex: searchText } },
      ],
  };
// console.log(filter);

  const skips : number = 10 * (pageSize - 1) 
  const result = await Item.find(filter1)
  .limit(28)
  .skip(skips)
  // .select({itemPhoto : 1 , itemName : 1 , phoneNumber : 1 , rentalPrice : 1 , rentalDate : 1, discription : 1});
 console.log(result);
 
  if(result){
  res.json({ status: true, result });
 }else{
  res.json({status : false , message : "Not Found"})
}  
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getOne = async (req : Request, res : Response) => {
  const { _id } = req.params;
  try {
    const result = await Item.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const createItem = async (req : Request, res : Response) => {
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
const updateItem = async (req : Request, res : Response) => {
  const { _id } = req.params;
  try {
    const result = await Item.findByIdAndUpdate({ _id }, req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
const deleteItem = async (req : Request, res : Response) => {
  const { _id } = req.params;
  try {
    const result = await Item.findByIdAndDelete({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
export {getAll , getOne , deleteItem, updateItem , createItem}