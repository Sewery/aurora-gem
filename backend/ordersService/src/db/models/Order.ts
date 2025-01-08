import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
  } from "@sequelize/core";
  import sequelizeConnection from "../config";
  
  class Order extends Model<
    InferAttributes<Order>,
    InferCreationAttributes<Order>
  > {
    declare order_id: CreationOptional<number>; // Auto-increment primary key
    declare order_date: Date;
    declare customer_id: number;
    declare shipment: number;
  }
  
  // Initialize the Order model
  Order.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shipment: {
        type: DataTypes.DOUBLE(8, 2),
        allowNull: false,
      },
    },
    {
      sequelize: sequelizeConnection, // Pass the Sequelize instance
      modelName: "Order", // Model name
      tableName: "orders", // Table name in the database
      timestamps: false, // Disable createdAt and updatedAt
    }
  );
  
  class OrderDetails extends Model<
    InferAttributes<OrderDetails>,
    InferCreationAttributes<OrderDetails>
  > {
    declare order_id: number; // Composite primary key
    declare product_id: number; // Composite primary key
    declare quantity: number;
    declare price: number;
  }
  
  // Initialize the OrderDetails model
  OrderDetails.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE(8, 2),
        allowNull: false,
      },
    },
    {
      sequelize: sequelizeConnection, // Pass the Sequelize instance
      modelName: "OrderDetails", // Model name
      tableName: "order_details", // Table name in the database
      timestamps: false, // Disable createdAt and updatedAt
    }
  );
  
  export { Order, OrderDetails };
  