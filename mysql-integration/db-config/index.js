const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: `${process.env.HOST}`,
      user: `${process.env.USER}`,
      password: `${process.env.PASSWORD}`,
      database: `${process.env.DBNAME}`,
    });

    console.log("Connected!");
    return connection;
  } catch (err) {
    console.error("Connection failed: ", err);
    throw err;
  }
}

module.exports = connectToDatabase;
