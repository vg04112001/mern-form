// const { getDatarouter } = require("./getData/index");

// const router = express.Router();

// router.use(getDatarouter);

// module.exports = router;
const express = require("express");
const { getTestData, getTestDataById } = require("../controllers/getData");
const { createTestData } = require("../controllers/addData");
const { updateTestData } = require("../controllers/updateData");
const { deleteTestData } = require("../controllers/deleteData");
const { schemaValitor } = require("../validators/schemaValidation");
const { loginUser } = require("../controllers/loginUserData");
const router = express.Router();

router.get("/testdata", getTestData);
router.get("/testdata/:id", getTestDataById);
router.post("/testdata", schemaValitor, createTestData);
router.put("/testdata/:id", updateTestData);
router.delete("/testdata/:id", deleteTestData);

// router.post("/login", (req, res) => {
//   console.log(req.body);
//   res.send("login api path working");
// });
router.post("/login", loginUser);

module.exports = router;
