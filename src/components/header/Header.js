import React from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1 className="header-title">Cargo</h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <Link className="header-nav-item links">
              HOME <ArrowDropDownIcon />
            </Link>
            <Link className="header-nav-item links">
              PAGES <ArrowDropDownIcon />
            </Link>
            <Link className="header-nav-item links">TRACKING</Link>
            <Link className="header-nav-item links">
              SERVICES <ArrowDropDownIcon />
            </Link>
            <Link className="header-nav-item links">
              BLOG <ArrowDropDownIcon />
            </Link>
            <li className="header-nav-item">
              <button className="btn-get-quote">GET A QUOTE</button>
            </li>
            <li className="header-nav-item">
              <button className="btn-sign-in">SIGN IN</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
