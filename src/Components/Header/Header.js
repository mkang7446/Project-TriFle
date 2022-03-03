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
      <div className="nav-right">
        <Link to="/about">
          <h2 className="about-link">About</h2>
        </Link>
        <Link to="/news">
          <h2 className="news-link">News</h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
