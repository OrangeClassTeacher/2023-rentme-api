import {Router} from "express"
import {getOne , getAll , createUser , deleteUser , updateUser} from "../controllers/user.controller"


const route = Router();

route.get("/user",  getAll)
.get("/user/:_id",  getOne)
.post("/user" , createUser).
put("/user/:_id" , updateUser)
.delete("/user/:_id" , deleteUser)

export default route