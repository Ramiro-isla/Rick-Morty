import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/characters">Characters</Link>
      </nav>
    </header>
  );
};

export default HeaderComponent;
