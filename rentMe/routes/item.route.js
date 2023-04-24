"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const item_controller_1 = require("../controllers/item.controller");
const route = (0, express_1.Router)();
route
    .post("/items", item_controller_1.getAllWithSearch)
    .get("/item", item_controller_1.getAll)
    .get("/item/:_id", item_controller_1.getOne)
    .post("/item", item_controller_1.createItem)
    .put("/item/:_id", item_controller_1.updateItem)
    .delete("/item/:_id", item_controller_1.deleteItem);
exports.default = route;
