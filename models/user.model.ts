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
  Username : {
    type : String,
    required : [true , "Required"],
    unique : [true , "Username is already exist"]
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
  role : {
    type : String,
    enum : ["Admin" , "User" , "Staff"],
    reuired : [true , "Required"]
  },
  address : {
    type : String,
    required : [true , "Required"]
  }, 
  profilePic : String,
  password: String,
  gender: Number,
  favItems: [String],
}
const userSchema = new Schema<IUser>

const User = mongoose.model("User", userSchema);

export default User
//s
