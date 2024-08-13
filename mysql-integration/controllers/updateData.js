const connectToDatabase = require("../db-config/index").default;

const updateTestData = async (req, res) => {
  try {
    const testId = req.params.id;
    if (!testId) {
      return res.status(404).send({
        success: false,
        message: "Invalid provide student id",
      });
    }
    const { name, className, medium } = req.body;
    if (!name || !className || !medium) {
      return res.status(500).send({
        success: false,
        message: "Please provide all values",
      });
    }
    const connection = await connectToDatabase();
    const sql = `UPDATE TEST SET name='${name}' , className='${className}' , medium='${medium}' WHERE ID ='${testId}'`;
    const [data] = await connection.query(sql);
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "error in update query",
      });
    }
    res.status(200).send({
      success: true,
      message: "updated record successfully done",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while updating data",
      error,
    });
  }
};

module.exports = { updateTestData };
