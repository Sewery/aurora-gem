import { Sequelize } from "@sequelize/core";
import { MySqlDialect } from "@sequelize/mysql";
import dotenv from "dotenv";
// import path from "path";
dotenv.config({ path:  './.env' });
const dbSchema = process.env.AURORA_DB_NAME as string;
const dbUser = process.env.AURORA_DB_USER as string;
const dbHost = process.env.AURORA_DB_HOST as string;;
const dbPassword = process.env.AURORA_DB_PASSWORD as string;
const dbPort = process.env.AURORA_DB_PORT as string;

const sequelizeConnection = new Sequelize({
  dialect: MySqlDialect,
  database: dbSchema,
  user: dbUser,
  password: dbPassword,
  host: dbHost,
  port: parseInt(dbPort || "3306"),
});

export default sequelizeConnection;
