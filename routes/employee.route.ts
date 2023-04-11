import {Router} from "express"
import {getOne , getAll , createEmployee , deleteEmployee , updateEmployee} from "../controllers/employee.controller"


const route = Router();

route.get("/employee",  getAll)
.get("/employee/:_id",  getOne)
.post("/employee" , createEmployee)
.put("/employee/:_id" , updateEmployee)
.delete("/employee/:_id" , deleteEmployee)

export default route