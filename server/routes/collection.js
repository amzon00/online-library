const express = require("express");
const router = express.Router();

const {
  getUserCollection,
  deleteFromCollection,
} = require("../controllers/getUserCollection");

router
  .route("/:username/collection")
  .get(getUserCollection)
  .put(deleteFromCollection);

module.exports = router;
