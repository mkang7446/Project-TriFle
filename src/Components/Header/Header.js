import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import SearchForm from "./SearchForm";

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <div className="brand">
          <h1>Trifle</h1>
          <h2>For your Financial Freedom</h2>
        </div>
      </Link>
      <SearchForm />
      <Link to="/about">
        <h2>About</h2>
      </Link>
      <Link to="/news">
        <h2>News</h2>
      </Link>
    </div>
  );
}

export default Header;
