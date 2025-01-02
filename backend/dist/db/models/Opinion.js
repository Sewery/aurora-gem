"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sequelize/core");
const config_1 = __importDefault(require("../config"));
class Opinion extends core_1.Model {
}
Opinion.init({
    opinion_id: {
        type: core_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    customer_id: {
        type: core_1.DataTypes.INTEGER,
        allowNull: false,
    },
    content: {
        type: core_1.DataTypes.STRING(400),
        allowNull: false,
    },
    stars: {
        type: core_1.DataTypes.INTEGER,
        allowNull: false,
    },
    product_id: {
        type: core_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: config_1.default,
    modelName: "Opinion",
    tableName: "opinions",
    timestamps: false,
});
exports.default = Opinion;
//# sourceMappingURL=Opinion.js.map