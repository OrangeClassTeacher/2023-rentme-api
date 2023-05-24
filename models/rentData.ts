import mongoose, { Schema } from "mongoose";

interface IRentData {
  createdUserId: string;
  rentUserId: string;
  itemId: string;
  rentalStartDay: Date;
  rentalEndDay: Date;
  totalPrice: number;
  status: string;
}

const rentDataSchema = new Schema<IRentData>({
  createdUserId: { type: String, required: true },
  rentUserId: { type: String, required: true },
  itemId: { type: String, required: true },
  rentalStartDay: { type: Date, required: true },
  rentalEndDay: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ["Rent", "Pending"] },
});

const rentData = mongoose.model("RentData", rentDataSchema);
export default rentData;
