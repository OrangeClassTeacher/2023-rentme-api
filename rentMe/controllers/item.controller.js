"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllWithDate = exports.getItem = exports.getAllWithUser = exports.getAllWithSearch = exports.createItem = exports.updateItem = exports.deleteItem = exports.getOne = exports.getAll = void 0;
const item_model_1 = __importDefault(require("../models/item.model"));
const getAllWithSearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pageSize, searchText, sort } = req.body;
    if (!searchText) {
        const pageNum = pageSize ? pageSize : 1;
        try {
            const skips = 10 * (pageNum - 1);
            const result = yield item_model_1.default.find().skip(skips).limit(10).sort(sort);
            console.log("result1");
            res.json({ status: true, result });
        }
        catch (err) {
            res.json({ status: false, message: err });
        }
    }
    if (!sort) {
        const pageNum = pageSize ? pageSize : 1;
        try {
            console.log("result2");
            const skips = 10 * (pageNum - 1);
            const result = yield item_model_1.default.find({
                itemName: { $regex: searchText, $options: "i" },
            })
                .skip(skips)
                .limit(10);
            res.json({ status: true, result });
        }
        catch (err) {
            res.json({ status: false, message: err });
        }
    }
    if (!sort && !searchText) {
        try {
            const pageNum = pageSize ? pageSize : 1;
            const skips = 10 * (pageNum - 1);
            const result = yield item_model_1.default.find().skip(skips);
            res.json({ status: true, result });
        }
        catch (err) {
            res.json({ status: false, message: err });
        }
    }
    if (searchText && sort) {
        console.log(sort);
        try {
            console.log("result3");
            const pageNum = pageSize ? pageSize : 1;
            const skips = 10 * (pageNum - 1);
            const result = yield item_model_1.default.find({
                itemName: { $regex: searchText, $options: "i" },
            })
                .skip(skips)
                .sort(sort)
                .limit(10);
            console.log(result);
            res.json({ status: true, result });
        }
        catch (err) {
            res.json({ status: false, message: err });
        }
    }
});
exports.getAllWithSearch = getAllWithSearch;
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield item_model_1.default.aggregate([
            { $project: { categoryId: 1 } },
            { $group: { _id: "$categoryId", count: { $count: {} } } },
            { $sort: { count: -1 } },
        ]).limit(5);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getItem = getItem;
const getAllWithDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("dfdz");
    try {
        const result = yield item_model_1.default.aggregate([{ $sort: { createdAt: -1 } }]).limit(20);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getAllWithDate = getAllWithDate;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Test");
    try {
        const result = yield item_model_1.default.find({});
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getAll = getAll;
const getAllWithUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { createdUser } = req.body;
    const filter = {
        createdUser: { $regex: createdUser },
    };
    if (!createdUser) {
        res.json({ status: false, message: "User not found" });
    }
    try {
        const result = yield item_model_1.default.find(filter);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getAllWithUser = getAllWithUser;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const result = yield item_model_1.default.findById({ _id });
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getOne = getOne;
const createItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newObj = req.body;
    if (!newObj) {
        res.json({ status: false, message: "Medeelle oruuulna uu!!" });
    }
    try {
        const result = yield item_model_1.default.create(newObj);
        res.json({ status: true, result, message: "" });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.createItem = createItem;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    if (!_id) {
        res.json({ status: false, message: "Id " });
    }
    try {
        const result = yield item_model_1.default.findByIdAndUpdate({ _id }, req.body);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.updateItem = updateItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    if (!_id) {
        res.json({ status: false, message: "Id oruulna uu" });
    }
    try {
        const result = yield item_model_1.default.findByIdAndDelete({ _id });
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.deleteItem = deleteItem;
