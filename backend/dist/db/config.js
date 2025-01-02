"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sequelize/core");
const mysql_1 = require("@sequelize/mysql");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbSchema = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;
const sequelizeConnection = new core_1.Sequelize({
    dialect: mysql_1.MySqlDialect,
    database: dbSchema,
    user: dbUser,
    password: dbPassword,
    host: dbHost,
    port: parseInt(dbPort || "3306"),
});
exports.default = sequelizeConnection;
//# sourceMappingURL=config.js.map