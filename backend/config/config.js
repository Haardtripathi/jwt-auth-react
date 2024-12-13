const { Sequelize } = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize(
    process.env.DB_NAME,  // Database name
    process.env.DB_USER,  // Database username
    process.env.DB_PASSWORD,  // Database password
    {
        host: process.env.DB_HOST,  // MySQL host (localhost for XAMPP)
        dialect: 'mysql',  // Set dialect to MySQL
        logging: false,  // Optional: turn off SQL logging
    }
)

module.exports = sequelize