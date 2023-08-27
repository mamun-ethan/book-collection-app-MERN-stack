const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const booksModel = require("./model/books");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3550;
app.listen(PORT, (err) => {
  console.log(`app is running at http://localhost:${PORT}`);
});

//mongodb connections
mongoose.connect("mongodb://localhost:27017/bookDB");
//create a new book
app.post("/create", (req, res) => {
  booksModel
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//find book by id
app.get("/:id", (req, res) => {
  const id = req.params.id;

  booksModel
    .findById({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
});

//update book by id
app.put("/update/:id", (req, res) => {
  const id = req.params.id;

  const { title, author, category, price, publisher } = req.body;
  booksModel
    .findOneAndUpdate(
      { _id: id },
      { title, author, category, price, publisher }
    )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
});

// delete book  by id
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  booksModel
    .findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});
// get all books r
app.get("/", (req, res) => {
  booksModel
    .find({})
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});
