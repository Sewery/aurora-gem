import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "@sequelize/core";
import sequelizeConnection from "../config";
class Opinion extends Model<
  InferAttributes<Opinion>,
  InferCreationAttributes<Opinion>
> {
  declare opinion_id: CreationOptional<number>; // Auto-increment primary key
  declare customer_id: number;
  declare content: string;
  declare stars: number;
  declare product_id: number;
}
// Initialize the model
Opinion.init(
  {
    opinion_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(400),
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    modelName: "Opinion",
    tableName: "opinions",
    timestamps: false,
  }
);

export default Opinion;
