import React from "react";
import { Route, Routes, Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <div className="brand">
          <h1>Trifle</h1>
          <h2>For your Financial Freedom</h2>
        </div>
      </Link>
    </div>
  );
}

export default Header;
