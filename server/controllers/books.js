const Book = require("../models/Book");

const getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.status(200).json({ books, count: books.length });
};
const createBook = async (req, res) => {
  const book = await Book.create(req.body);
  console.log(book);
  res.status(200).json({ book });
};
const deleteBook = async (req, res) => {};
const updateBook = async (req, res) => {};

const getBook = async (req, res) => {
  const {
    params: { id: bookId },
  } = req;

  const book = await Book.findOne({
    _id: bookId,
  });
  if (!book) {
    throw new error(`No book with id ${bookId}`);
  }
  res.status(200).json({ book });
};

module.exports = {
  getAllBooks,
  createBook,
  deleteBook,
  updateBook,
  getBook,
};
