"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_controller_1 = require("../controllers/employee.controller");
const route = (0, express_1.Router)();
//hi
route.get("/employee", employee_controller_1.getAll)
    .get("/employee/:_id", employee_controller_1.getOne)
    .post("/employee", employee_controller_1.createEmployee)
    .put("/employee/:_id", employee_controller_1.updateEmployee)
    .delete("/employee/:_id", employee_controller_1.deleteEmployee);
exports.default = route;
