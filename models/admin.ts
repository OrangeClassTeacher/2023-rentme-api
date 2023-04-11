import mongoose, { Schema } from "mongoose"

interface IAdmin{
    email :string
    password : string
}
const adminSchema = new Schema<IAdmin>({
    email : {
        type : String,
        required : true,
        unique :true
    },
    password : {
        type : String,
        required : true
    }
})
const Admin = mongoose.model("Admin" , adminSchema)
export default Admin