import { Sequelize } from "@sequelize/core";
import { MySqlDialect } from "@sequelize/mysql";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const dbSchema = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT as string;
const sequelizeConnection = new Sequelize({
  dialect: MySqlDialect,
  database: dbSchema,
  user: dbUser,
  password: dbPassword,
  host: dbHost,
  port: parseInt(dbPort || "3306"),
});

export default sequelizeConnection;
