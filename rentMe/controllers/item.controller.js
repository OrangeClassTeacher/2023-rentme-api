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
exports.createItem = exports.updateItem = exports.deleteItem = exports.getOne = exports.getAll = void 0;
const item_model_1 = __importDefault(require("../models/item.model"));
//hi
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pageSize, searchText } = req.body;
    // const count = pageSize * 30 +1
    const filter1 = {
        $or: searchText && [
            { itemName: { $regex: searchText } },
            { description: { $regex: searchText } },
        ],
    };
    try {
        const rowCount = yield item_model_1.default.find(filter1).count();
        console.log(rowCount);
        const skips = 10 * (pageSize - 1);
        const result = yield item_model_1.default.find(filter1).skip(skips).limit(10);
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.getAll = getAll;
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
    try {
        console.log(req.body);
        if (newObj) {
            const result = yield item_model_1.default.create(newObj);
            res.json({ status: true, result });
        }
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.createItem = createItem;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
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
    try {
        const result = yield item_model_1.default.findByIdAndDelete({ _id });
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, message: err });
    }
});
exports.deleteItem = deleteItem;
