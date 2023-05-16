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
<<<<<<< HEAD
}, {
    timestamps : true
})
const Item = mongoose.model("Items" , itemSchema)
export default Item
=======
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
  },
  { timestamps: true }
);
const Item = mongoose.model("Items", itemSchema);
export default Item;
>>>>>>> 8862a99b1887c839e079d3adf6a7ab4cd1d9f9a1
