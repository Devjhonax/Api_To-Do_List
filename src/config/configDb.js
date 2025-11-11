import { Sequelize } from 'sequelize';
import dotenv from "dotenv"

dotenv.config();

const sequelize = new Sequelize({
  dialect: process.env.BANCO_DE_DANDOS || "sqlite",
  storage: process.env.DB_STORAGE,
  logging: false,
})

export default sequelize