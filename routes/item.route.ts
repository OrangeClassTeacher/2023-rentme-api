import {Router} from "express"
import {getOne , getAll , createItem , deleteItem , updateItem} from "../controllers/item.controller"
// import {auth} from "../middleware/auth"


const route = Router();

route.get("/item" , getAll)
.get("/item/:_id",  getOne)
.post("/item" , createItem).
put("/item/:_id" , updateItem)
.delete("/item/:_id" , deleteItem)


export default route