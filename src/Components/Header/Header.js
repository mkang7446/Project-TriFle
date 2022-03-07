import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import Logo from "./Final.png";

function Header(props) {
  return (
    <div className="header">
      <Link className="brand-link" to="/">
        <div className="brand">
          <img className="logo" src={Logo} alt="LOGO" />
        </div>
      </Link>
      <SearchForm
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
      <div className="nav-right">
        <Link id="nav-right" to="/">
          <h2 className="home-link">Home</h2>
        </Link>
        <Link id="nav-right" to="/about">
          <h2 className="about-link">About</h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
