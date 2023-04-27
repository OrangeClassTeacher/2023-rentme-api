"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_1 = require("../middleware/auth");
const route = (0, express_1.Router)();
route
<<<<<<< HEAD
    .post("/users", user_controller_1.getAllWithSearch)
    .get("/user", user_controller_1.getAll)
=======
    .get("/users", auth_1.auth, user_controller_1.getAll)
>>>>>>> 2a6fa2e30fa9a3e2f9e16771c0f11bb1373b695a
    .post("/user/:_id", user_controller_1.getOne)
    .post("/user", user_controller_1.createUser)
    .put("/user/:_id", user_controller_1.updateUser)
    .delete("/user/:_id", user_controller_1.deleteUser)
    .post("/login", user_controller_1.login);
exports.default = route;
