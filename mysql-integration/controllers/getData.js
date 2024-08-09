const connectToDatabase = require("../db-config/index");

const getTestData = async (req, res) => {
  try {
    const connection = await connectToDatabase(); // Await the connection to the database
    const sql = `SELECT * FROM TEST`;

    const [data] = await connection.query(sql); // Await the query execution

    if (!data.length) {
      return res.status(404).send({
        success: false,
        message: "No records/data found",
      });
    }

    res.status(200).send({
      success: true,
      message: "All records found successfully",
      totalTestData: data.length,
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

const getTestDataById = async (req, res) => {
  try {
    const testId = req.params.id;
    if (!testId) {
      return res.status(404).send({
        success: false,
        message: "Invalid provide student id",
      });
    }
    const connection = await connectToDatabase(); // Await the connection to the database
    const sql = `SELECT * FROM TEST where id=${testId}`;
    const [data] = await connection.query(sql); // Await the query execution
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No records/data found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Record found successfully by Id",
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
module.exports = { getTestData, getTestDataById };
