import mongoose, { Schema } from "mongoose"

interface IEmployee {
    firstName : {
        type : String,
        required : [true , "Required"]
    },
    lastName : {
        type : String,
        required : [true , "REq"]
    },
    username : {
        type : String,
        required : [true , "Req"]
    },
    address : {
        type : String,
        required : [true , "req"]
    },
    phoneNumber : {
        type : Number,
        required : [true , "Req"],
        unique  : [true , "Phone number is exist"]
    },
    profilePic : String,
}
const employeeSchema = new Schema<IEmployee>
const Employee = mongoose.model("Employee" , employeeSchema)
export default Employee