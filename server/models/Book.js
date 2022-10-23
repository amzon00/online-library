const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title"],
      maxlength: 50,
    },
    author: {
      type: String,
      required: [true, "Please provide author"],
      maxlength: 50,
    },
    year_written: {
      type: Number,
      required: [true, "Please provide year of writing"],
      maxlength: 4,
    },
    edition: {
      type: String,
      required: [true, "Please provide edition"],
      maxlength: 50,
    },
    price: {
      type: Number,
      required: [true, "Please provide price"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
