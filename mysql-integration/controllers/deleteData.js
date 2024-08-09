const connectToDatabase = require("../db-config/index");

const deleteTestData = async (req, res) => {
  try {
    const testId = req.params.id;
    if (!testId) {
      return res.status(404).send({
        success: false,
        message: "Invalid provide student id",
      });
    }
    const connection = await connectToDatabase();
    const sql = `DELETE FROM TEST WHERE ID ='${testId}'`;
    const [data] = await connection.query(sql);
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "error in delete query",
      });
    }
    res.status(200).send({
      success: true,
      message: "delete record successfully done",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting data",
      error,
    });
  }
};

module.exports = { deleteTestData };
