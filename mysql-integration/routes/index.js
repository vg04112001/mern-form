// const { getDatarouter } = require("./getData/index");

// const router = express.Router();

// router.use(getDatarouter);

// module.exports = router;
const express = require("express");
const { getTestData, getTestDataById } = require("../controllers/getData");
const { createTestData } = require("../controllers/addData");
const router = express.Router();

router.get("/getData", getTestData);
router.get("/getData/:id", getTestDataById);
router.post("/createData", createTestData);

module.exports = router;
