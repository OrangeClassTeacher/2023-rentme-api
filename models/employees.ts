import mongoose, { Schema } from "mongoose"

interface IEmployee {
    firstName : string
    lastName : string
    username :string
    address : string
    phoneNumber : number
    profilePic : string,
}
const employeeSchema = new Schema<IEmployee>({
    firstName : {
        type : String,
        required : true 
    },
    lastName : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true,
        unique  : true 
    },
    profilePic : String,
})
const Employee = mongoose.model("Employee" , employeeSchema)
export default Employee