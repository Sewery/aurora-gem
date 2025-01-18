import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
  } from "@sequelize/core";


import dbConnection from "../dbConnection";



class Customer extends Model<InferAttributes<Customer>, InferCreationAttributes<Customer>>
{
    declare customer_id: CreationOptional<number>;
    declare firstname: string;
    declare lastname: string;
    declare email: string;
    declare password: string;
    declare postal_code: string;
    declare address: string;
    declare is_admin: boolean;
}
  

Customer.init({
    customer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
        
    },
    firstname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    postal_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    is_admin:
    {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize: dbConnection,
    modelName: "Customer",
    tableName: "customers",
    timestamps: false
});

export default Customer;