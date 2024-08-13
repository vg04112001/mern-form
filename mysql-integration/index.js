const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const routes = require("./routes/index");
const port = process.env.PORT || 7500; // setting local server port if not working from env

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api", routes);

// testing for backend server working
app.get("/", (req, res) => {
  res.send("Backend server is in working mode");
});

app.listen(port, () => {
  console.log(`Server setup listening on port ${port}`);
});
