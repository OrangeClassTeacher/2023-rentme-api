"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const item_controller_1 = require("../controllers/item.controller");
const route = (0, express_1.Router)();
route
    .post("/items", item_controller_1.getAllWithSearch)
    .post("/itemUser", item_controller_1.getAllWithUser)
    .get("/item", item_controller_1.getAll)
    .get("/item/:_id", item_controller_1.getOne)
    .post("/item", item_controller_1.createItem)
    .put("/item/:_id", item_controller_1.updateItem)
    .delete("/item/:_id", item_controller_1.deleteItem)
    .get("/items", item_controller_1.getItem)
    .get("/itemsDate", item_controller_1.getAllWithDate);
exports.default = route;
