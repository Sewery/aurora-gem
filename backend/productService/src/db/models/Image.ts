import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "@sequelize/core";
import sequelizeConnection from "../config";
class Image extends Model<
  InferAttributes<Image>,
  InferCreationAttributes<Image>
> {
  declare image_id: CreationOptional<number>;
  declare product_id: number;
  declare url: string;
  declare file_name: string;
}
// Initialize the model
Image.init(
  {
    image_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    modelName: "Image",
    tableName: "images",
    timestamps: false,
  }
);

export default Image;
