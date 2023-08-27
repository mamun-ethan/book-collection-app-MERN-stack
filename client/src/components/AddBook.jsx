import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddBook() {
  const Navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [publisher, setPublisher] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3550/create", {
        title,
        author,
        category,
        price,
        publisher,
      })
      .then((res) => {
        console.log(res);
      })
      .then((err) => console.log(err));
    Navigate("/");
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <h1 className="title">add new book</h1>
          <p className="title_band">join the world's largest community</p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="Title">Title</label>
            <br />
            <input
              type="text"
              placeholder="Title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label htmlFor="authro">Author</label>
            <br />
            <input
              type="text"
              required
              placeholder="Author"
              onChange={(e) => setAuthor(e.target.value)}
            />
            <br />
            <label htmlFor="category">category</label>
            <br />
            <input
              type="text"
              required
              placeholder="category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="price">price</label>
            <br />
            <input
              type="text"
              required
              placeholder="299"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <label htmlFor="publisher">publisher</label>
            <br />
            <input
              type="text"
              required
              placeholder="publisher"
              onChange={(e) => setPublisher(e.target.value)}
            />
            <br />
            <div className="create__btn">
              <input type="submit" value="submit" />
              <input
                type="button"
                value="cancel"
                onClick={() => Navigate("/")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
