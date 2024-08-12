import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Rick_and_Morty_logo.png";
import "./HeaderComponent.scss";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <nav className="desktopNav">
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/MyFavourites">My Favourites</Link>
          </li>
        </ul>
      </nav>
      <nav className="hamburguerNav">
        <img src={logo} alt="logo" />
        <div className="hamburguerMenu">
          <div
            className={`hamburguerIcon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`menuLinks ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/" className="navLink" onClick={toggleMenu}>
                Characters
              </Link>
            </li>
            <li>
              <Link to="/MyFavourites" className="navLink" onClick={toggleMenu}>
                My Favourites
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
