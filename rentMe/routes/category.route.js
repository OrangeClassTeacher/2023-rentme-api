"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
const route = (0, express_1.Router)();
route.get("/category", category_controller_1.getAll)
    .get("/category/:_id", category_controller_1.getOne)
    .post("/category", category_controller_1.createCategory).
    put("/category/:_id", category_controller_1.updateCategory)
    .delete("/category", category_controller_1.deleteCategory);
exports.default = route;
