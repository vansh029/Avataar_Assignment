
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

function Navbar({ onSearch }) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          E-COMM <i className="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/electronics"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              ELECTRONICS
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/clothing"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              CLOTHING
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/gaming"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              GAMING
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/electronics"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              ELECTRONICS
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/electronics"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              POTS
            </Link>
          </li>
          
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
              MORE <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
        <SearchBar onSearch={handleSearch} />
      </nav>
    </>
  );
}

export default Navbar;
