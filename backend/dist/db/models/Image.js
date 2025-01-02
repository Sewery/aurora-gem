"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sequelize/core");
const config_1 = __importDefault(require("../config"));
class Image extends core_1.Model {
}
Image.init({
    image_id: {
        type: core_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    product_id: {
        type: core_1.DataTypes.INTEGER,
        allowNull: false,
    },
    url: {
        type: core_1.DataTypes.STRING(255),
        allowNull: false,
    },
    file_name: {
        type: core_1.DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    sequelize: config_1.default,
    modelName: "Image",
    tableName: "images",
    timestamps: false,
});
exports.default = Image;
//# sourceMappingURL=Image.js.map