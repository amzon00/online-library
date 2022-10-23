const express = require("express");

const router = express.Router();
const {
  createBook,
  deleteBook,
  getAllBooks,
  updateBook,
  getBook,
} = require("../controllers/books");

const addToCollection = require("../controllers/booksCollection");
const getUserCollection = require("../controllers/getUserCollection");

router.route("/").get(getAllBooks).post(createBook);
router.route("/user/collection").get(getUserCollection);
router.route("/:id").get(getBook).delete(deleteBook).patch(updateBook);
router.route("/user/:username").post(addToCollection);

module.exports = router;
