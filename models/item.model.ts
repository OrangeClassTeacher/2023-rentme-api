import mongoose , {Collection, Schema} from "mongoose"
interface IItem{
    itemName : string
    itemPhoto : string
    categoryId : string
    phoneNumber : number
    rating : Number,
    itemComment : string,
    rentalPrice : number
    rentalDate : string
    description : string
}
const itemSchema = new Schema<IItem>({
    itemName : {
        type : String,
        required : true
    },
    itemPhoto : {
        type : String,
        required : true
    },
    categoryId : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true
    },
    rating : Number,
    itemComment : String,
    rentalPrice : {
        type : Number,
        required : true 
    },
    rentalDate : {
        type : String,
        required : true
    },
    description : {
        type :String,
        required : true
    },
}, {
    timestamps : true
})
const Item = mongoose.model("Items" , itemSchema)
export default Item