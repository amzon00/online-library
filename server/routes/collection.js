const express = require("express");
const router = express.Router();
const getUserCollection = require("../controllers/getUserCollection");

router.get("/:username/collection", getUserCollection);

module.exports = router;
