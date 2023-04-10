import mongoose , {Collection, Schema} from "mongoose"
interface IItem{
    itemName : {
        type : String,
        required : [true , "Required"]
    },
    itemPhoto : {
        type : String,
        required : [true , "Required"]
    },
    phoneNumber : {
        type : Number,
        required : [true , "Required"]
    },
    rating : Number,
    itemComment : String,
    rentalPrice : {
        type : Number,
        required : [true , " Required"]
    },
    rentalDate : {
        type : Date,
        required : [true , "Required"]
    }
    description : {
        type :String,
        required : [true , "Required"]
    },
}
const itemSchema = new Schema<IItem>
const Item = mongoose.model("Items" , itemSchema)
export default Item