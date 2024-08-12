const connectToDatabase = require("../db-config/index");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const connection = await connectToDatabase();
    const sql = `SELECT * FROM LOGIN WHERE email='${email}' AND password='${password}'`;
    const data = await connection.query(sql);
    if (!data[0].length) {
      return res.status(401).send({
        success: false,
        message: "bad credentials",
      });
    }
    res.status(201).send({
      success: true,
      message: "login successfull",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while login",
      error,
    });
  }
};

module.exports = { loginUser };
