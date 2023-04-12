import mongoose, { Schema } from "mongoose"
interface ICategory{
    parentId : string
categoryName :string
}
const categorySchema = new Schema<ICategory>({
    parentId : String,
    categoryName : {
        type : String,
        required : true ,
        unique : true
    }
})
const Category = mongoose.model("Category" , categorySchema)
export default Category
//hi