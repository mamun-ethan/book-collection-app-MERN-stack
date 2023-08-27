import { React, useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [publisher, setPublisher] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3550/" + id)
      .then((res) => {
        const { _id: id, title, author, category, price, publisher } = res.data;
        setTitle(title);
        setAuthor(author);
        setCategory(category);
        setPrice(price);
        setPublisher(publisher);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3550/update/" + id, {
        title,
        author,
        category,
        price,
        publisher,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .then((err) => {
        console.log(err);
      });
  };
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <h1 className="title">update book</h1>
          <p className="title_band">join the world's largest community</p>
        </div>
        <div className="form" onSubmit={handleUpdate}>
          <form action="">
            <label htmlFor="Title">Title</label>
            <br />
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <br />
            <label htmlFor="authro">Author</label>
            <br />
            <input
              type="text"
              placeholder="Author"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
            />
            <br />
            <label htmlFor="category">category</label>
            <br />
            <input
              type="text"
              placeholder="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
            <br />
            <label htmlFor="price">price</label>
            <br />
            <input
              type="text"
              placeholder="454"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <br />
            <label htmlFor="publisher">publisher</label>
            <br />
            <input
              type="text"
              placeholder="publisher"
              onChange={(e) => setPublisher(e.target.value)}
              value={publisher}
            />
            <br />
            <div className="create__btn">
              <input type="submit" value="update" />
              <input type="button" value="cancel" onClick={handleClick} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
