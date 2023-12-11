import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Rick_and_Morty_logo.png";
import "./HeaderComponent.scss";

const HeaderComponent = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <Link to="/">Login</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/MyFavourites">My Favourites</Link>
      </nav>
    </header>
  );
};

export default HeaderComponent;
