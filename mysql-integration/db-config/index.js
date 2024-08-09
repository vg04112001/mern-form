const mysql = require("mysql2/promise");

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "nodejs",
    });

    console.log("Connected!");
    return connection;
  } catch (err) {
    console.error("Connection failed: ", err);
    throw err;
  }
}

module.exports = connectToDatabase;
