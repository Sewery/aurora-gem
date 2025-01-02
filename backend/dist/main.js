"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./db/config"));
const routes_1 = __importDefault(require("./api/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;
app.use("/", routes_1.default);
(async () => {
    try {
        await config_1.default.sync();
        console.log("Database synced successfully, for server.");
        app.listen(PORT, () => {
            console.log(`server running at http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error("Failed to sync database:", error);
        process.exit(1);
    }
})();
//# sourceMappingURL=main.js.map