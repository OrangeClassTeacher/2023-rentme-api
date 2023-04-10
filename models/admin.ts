import mongoose, { Schema } from "mongoose"

interface IAdmin{
    username : {
        type : String,
        required : [true , "REq"],
        unique : [true , "ji"]
    },
    password : {
        type : String,
        required : [true , "hi"]
    }
}
const adminSchema = new Schema<IAdmin>
const Admin = mongoose.model("Admin" , adminSchema)
export default Admin