import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Books() {
  const [book, setbook] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3550")
      .then((result) => setbook(result.data))
      .catch((err) => console.log(err));
    console.log(book);
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3550/delete/" + id)
      .then((res) => {
        console.log(res);
        Navigate(0);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="header">
            <h1 className="title">book collection app</h1>
            <p className="title_band">join the world's largest community</p>
          </div>

          <div className="books">
            <div className="table">
              <Link className="btn create_btn" to="/create">
                Create
              </Link>

              <table>
                <thead>
                  <tr>
                    <th>title</th>
                    <th>author</th>
                    <th>category</th>
                    <th>price</th>
                    <th>publisher</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {book.map((book, index) => {
                    return (
                      <tr key={Math.random()}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.category}</td>
                        <td>{book.price}</td>
                        <td>{book.publisher}</td>
                        <td>
                          <Link
                            className="btn update_btn"
                            to={`/update/${book._id}`}
                          >
                            edit
                          </Link>
                          <Link
                            className="btn delete_btn"
                            onClick={() => handleDelete(book._id)}
                          >
                            delete
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
