const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const con = require("./db-config/index");
const routes = require("./routes/index");
const port = process.env.PORT || 7500; // setting local server port

// const customMiddleware = (req, res, next) => {
//   // console.log("middleware function");
//   if (!req.query.medium) {
//     res.send("Middleware working");
//   } else {
//     next();
//   }
// };
// middlewares
// app.use(customMiddleware);
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Backend server is in working mode");
});

app.listen(port, () => {
  console.log(`Server setup listening on port ${port}`);
});
