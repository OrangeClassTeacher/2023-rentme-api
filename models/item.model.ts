import mongoose, { Collection, Schema } from "mongoose";
interface IItem {
  createdUser: string;
  itemName: string;
  itemPhoto: string;
  itemSlidePhoto: [string];
  categoryId: string;
  phoneNumber: number;
  rating: Number;
  itemComment: string;
  rentalPrice: number;
  rentalStartDate: Date;
  rentalEndDate: Date;
  description: string;
  status : string
}
const itemSchema = new Schema<IItem>(
  {
    createdUser: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    itemPhoto: {
      type: String,
      required: true,
    },
    itemSlidePhoto: {
      type: [String],
    },
    categoryId: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    rating: Number,
    itemComment: String,
    rentalPrice: {
      type: Number,
      required: true,
    },
    rentalStartDate: {
      type: Date,
      required: true,
    },
    rentalEndDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status : {
      type : String,
      required : true,
      enum : ["Pending" , "Rented"]
    }
  },
  { timestamps: true }
);
const Item = mongoose.model("Items", itemSchema);
export default Item;

