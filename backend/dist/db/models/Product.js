"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sequelize/core");
const config_1 = __importDefault(require("../config"));
class Product extends core_1.Model {
}
Product.init({
    product_id: {
        type: core_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    price: {
        type: core_1.DataTypes.DOUBLE(8, 2),
        allowNull: false,
    },
    name: {
        type: core_1.DataTypes.STRING(50),
        allowNull: false,
    },
    short_description: {
        type: core_1.DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: core_1.DataTypes.STRING(255),
        allowNull: false,
    },
    category_id: {
        type: core_1.DataTypes.INTEGER,
        allowNull: false,
    },
    available_quantity: {
        type: core_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: config_1.default,
    modelName: "Product",
    tableName: "products",
    timestamps: false,
});
exports.default = Product;
//# sourceMappingURL=Product.js.map