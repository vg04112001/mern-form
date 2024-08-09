const connectToDatabase = require("../db-config/index");

const createTestData = async (req, res) => {
  try {
    const { name, className, medium } = req.body;
    // console.log(name, className, medium);
    if (!name || !className || !medium) {
      return res.status(500).send({
        success: false,
        message: "Please provide all values",
      });
    }
    const connection = await connectToDatabase(); // Await the connection to the database
    const sql = `INSERT INTO TEST (name, className, medium) VALUES ('${name}', '${className}', '${medium}')`;

    const [data] = await connection.query(sql); // Await the query execution

    if (!data) {
      return res.status(404).send({
        success: false,
        message: "error in insert query",
      });
    }

    res.status(201).send({
      success: true,
      message: "New test record successfully inserted",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while getting all data",
      error,
    });
  }
};

module.exports = { createTestData };
