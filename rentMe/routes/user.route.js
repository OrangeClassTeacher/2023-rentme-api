"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
// import {auth} from "../middleware/auth"
const route = (0, express_1.Router)();
route.post("/user", user_controller_1.getAll)
    .post("/user/:_id", user_controller_1.getOne)
    .post("/user", user_controller_1.createUser).
    put("/user/:_id", user_controller_1.updateUser)
    .delete("/user/:_id", user_controller_1.deleteUser)
    .post("/login", user_controller_1.login);
exports.default = route;
