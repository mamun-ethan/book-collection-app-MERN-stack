import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
import "./style/style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />}></Route>
        <Route path="/create" element={<AddBook />}></Route>
        <Route path="/update/:id" element={<UpdateBook />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
