const mongoose = require("mongoose");

const booksScema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  price: Number,
  publisher: String,
});

const booksModel = new mongoose.model("books", booksScema);

module.exports = booksModel;
