"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin.controller");
const route = (0, express_1.Router)();
route.get("/admin", admin_controller_1.getAll)
    .get("/admin/:_id", admin_controller_1.getOne)
    .post("/admin", admin_controller_1.createAdmin).
    put("/admin/:_id", admin_controller_1.updateAdmin)
    .delete("/admin/:_id", admin_controller_1.deleteAdmin);
exports.default = route;
