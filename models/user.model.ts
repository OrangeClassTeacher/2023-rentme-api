import mongoose, { Schema } from "mongoose"
interface IUser {
  firstName: string
  lastName: string
  Username : string
  email: string
  birthDate: Date
  phoneNumber:number,
  role :string
  address :string 
  profilePic : String,
  password: string
  gender: string
  favItems: string,
}
const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  Username : {
    type : String,
    required : true,
    unique : true 
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true
 },
  role : {
    type : String,
    enum : ["Admin" , "User" , "Staff"],
    reuired :true
  },
  address : {
    type : String,
    required : true },
  profilePic : String,
  password: {
    type : String,
    required : true
  },
  gender: {
    type : String,
    enum : ["Male" , "Female"],
    required : true
  },
  favItems: [String],
})

const User = mongoose.model("users", userSchema);

export default User
//s
