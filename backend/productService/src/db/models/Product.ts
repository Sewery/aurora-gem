import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "@sequelize/core";
import sequelizeConnection from "../config";
class Product extends Model<
  InferAttributes<Product>,
  InferCreationAttributes<Product>
> {
  declare product_id: CreationOptional<number>; // Auto-increment primary key
  declare price: number;
  declare name: string;
  declare short_description: string;
  declare description: string;
  declare category_id: number;
  declare available_quantity: number;
}
// Initialize the model
Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    price: {
      type: DataTypes.DOUBLE(8, 2),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    short_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    available_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection, // Pass the Sequelize instance
    modelName: "Product", // Model name
    tableName: "products", // Table name in the database
    timestamps: false, // Disable createdAt and updatedAt
  }
);

export default Product;
