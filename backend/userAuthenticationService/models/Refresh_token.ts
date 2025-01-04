import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
  } from "@sequelize/core";


import dbConnection from "../dbConnection";

class RefreshToken extends Model<InferAttributes<RefreshToken>, InferCreationAttributes<RefreshToken>>
{
    declare token_id: CreationOptional<number>;
    declare token: string;
    declare expiry_date: Date;
}


RefreshToken.init({
    token_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expiry_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: dbConnection,
    modelName: "RefreshToken",
    tableName: "refresh_tokens",
    timestamps: false
});

export default RefreshToken;


