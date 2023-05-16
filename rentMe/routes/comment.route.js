"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_controller_1 = require("../controllers/comment.controller");
const route = (0, express_1.Router)();
route
    .post("/comments", comment_controller_1.getAllComment)
    .get("/comment/:_id", comment_controller_1.getOneComment)
    .post("/comment", comment_controller_1.createComment)
    .put("/comment/:_id", comment_controller_1.updateComment)
    .delete("/comment/:_id", comment_controller_1.deleteComment);
exports.default = route;
