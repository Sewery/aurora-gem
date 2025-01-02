"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sequelize/core");
const config_1 = __importDefault(require("../config"));
class Category extends core_1.Model {
}
Category.init({
    category_id: {
        type: core_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: core_1.DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    sequelize: config_1.default,
    modelName: "Category",
    tableName: "categories",
    timestamps: false,
});
exports.default = Category;
//# sourceMappingURL=Category.js.map