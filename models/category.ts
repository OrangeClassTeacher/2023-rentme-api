import mongoose, { Schema } from "mongoose"
interface ICategory{
    parentId : String
categoryName : {
    type : String,
    required : [true , "Anh"],
    unique : [true , "Category is exist"]
}
}
const categorySchema = new Schema<ICategory>
const Category = mongoose.model("Category" , categorySchema)
export default Category