// const { getDatarouter } = require("./getData/index");

// const router = express.Router();

// router.use(getDatarouter);

// module.exports = router;
const express = require("express");
const { getTestData, getTestDataById } = require("../controllers/getData");
const { createTestData } = require("../controllers/addData");
const { updateTestData } = require("../controllers/updateData");
const { deleteTestData } = require("../controllers/deleteData");
const router = express.Router();

router.get("/testdata", getTestData);
router.get("/testdata/:id", getTestDataById);
router.post("/testdata", createTestData);
router.put("/testdata/:id", updateTestData);
router.delete("/testdata/:id", deleteTestData);

module.exports = router;
