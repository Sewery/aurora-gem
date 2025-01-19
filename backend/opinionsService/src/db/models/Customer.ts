import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
  } from "@sequelize/core";
  import sequelizeConnection from "../config";
  
  class Customer extends Model<
    InferAttributes<Customer>,
    InferCreationAttributes<Customer>
  > {
    declare customer_id: CreationOptional<number>; // Auto-increment primary key
    declare firstname: string;
    declare lastname: string;
    declare email: string;
    declare password: string;
    declare postal_code: string | null; // Nullable
    declare address: string | null; // Nullable
    declare is_admin: number
  }
  
  // Initialize the model
  Customer.init(
    {
      customer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      postal_code: {
        type: DataTypes.STRING(6),
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      is_admin:{
        type: DataTypes.TINYINT(),
        allowNull: false,
      }
    },
    {
      sequelize: sequelizeConnection, // Pass the Sequelize instance
      modelName: "Customer", // Model name
      tableName: "customers", // Table name in the database
      timestamps: false, // Disable createdAt and updatedAt
    }
  );
  
  export default Customer;
  