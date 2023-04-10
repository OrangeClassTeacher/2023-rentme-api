import mongoose, { Schema } from "mongoose"
interface IUser {
  firstName: {
    type: String,
    required: [true, "Please provide an firts name"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide an firts name"],
  },
  username: {
    type: String,
    required: [true, "Please provide an username"],
    unique: [true, "Username exists"],
  },

  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  birthDate: {
    type: Date,
    required: [true, "BirthDate"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Number"],
    unique: [true, "Phone Number exists"],
  },
  password: String,
  gender: Number,

  order: [String],

  favItems: [String],
}
const userSchema = new Schema<IUser>

const User = mongoose.model("User", userSchema);

export default User
//s
