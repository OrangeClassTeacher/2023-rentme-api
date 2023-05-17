"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const category_route_1 = __importDefault(require("./routes/category.route"));
const item_route_1 = __importDefault(require("./routes/item.route"));
const admin_route_1 = __importDefault(require("./routes/admin.route"));
const employee_route_1 = __importDefault(require("./routes/employee.route"));
const comment_route_1 = __importDefault(require("./routes/comment.route"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = process.env.PORT || "";
const MONGO_DB_URL = process.env.MONGO_DB_URI || "";
// console.log(MONGO_DB_URL);
mongoose_1.default
    .connect(MONGO_DB_URL)
    .then(() => console.log(`Database connected`))
    .catch((err) => console.log(err));
app.use("/api", user_route_1.default);
app.use("/api", category_route_1.default);
app.use("/api", item_route_1.default);
app.use("/api", admin_route_1.default);
app.use("/api", employee_route_1.default);
app.use("/api", comment_route_1.default);
app.listen(port, () => {
    console.log(`Server is running on ${port}.`);
});
