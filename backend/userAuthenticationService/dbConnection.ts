import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from "@sequelize/mysql";
import dotenv from 'dotenv';





dotenv.config({ path: '../.env' });

const DB_HOST = process.env.DB_HOST as string;
const DB_USER = process.env.DB_USER as string;
const DB_PASSWORD = process.env.DB_PASSWORD as string;
const DB_NAME = process.env.DB_NAME as string;
const DB_PORT = process.env.DB_PORT  as string;

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
}).catch(() => {
    console.error('Unable to connect to the database');
})

export default dbConnection;



