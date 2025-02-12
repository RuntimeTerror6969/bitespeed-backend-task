import { Sequelize } from "sequelize";

const sequelize = process.env.EXTERNAL_DATABASE_URL
  ? new Sequelize(process.env.EXTERNAL_DATABASE_URL, {
      logging: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    })
  : new Sequelize({
      dialect: "postgres",
      host: process.env.DB_HOST || "localhost",
      port: parseInt(process.env.DB_PORT || "5432"),
      username: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "admin",
      database: process.env.DB_NAME || "bitespeed",
      logging: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    });

export default sequelize;
