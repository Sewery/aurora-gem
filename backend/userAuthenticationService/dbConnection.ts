import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from "@sequelize/mysql";
import dotenv from 'dotenv';





dotenv.config({ path: '../.env' });

const DB_HOST = process.env.AURORA_DB_HOST as string;
const DB_USER = process.env.AURORA_DB_USER as string;
const DB_PASSWORD = process.env.AURORA_DB_PASSWORD as string;
const DB_NAME = process.env.AURORA_DB_NAME as string;
const DB_PORT = process.env.AURORA_DB_PORT  as string;

const dbConnection= new Sequelize({
    dialect: MySqlDialect,
    host: DB_HOST,
    port: parseInt(DB_PORT || '3306'),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

dbConnection.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
}).catch((e) => {
    console.error('Unable to connect to the database'+e);
})

export default dbConnection;



