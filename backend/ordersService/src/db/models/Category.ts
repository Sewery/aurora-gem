import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "@sequelize/core";
import sequelizeConnection from "../config";
class Category extends Model<
  InferAttributes<Category>,
  InferCreationAttributes<Category>
> {
  declare category_id: CreationOptional<number>; // Auto-increment primary key
  declare name: string;
}
// Initialize the model
Category.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection, // Pass the Sequelize instance
    modelName: "Category", // Model name
    tableName: "categories", // Table name in the database
    timestamps: false, // Disable createdAt and updatedAt
  }
);

export default Category;
