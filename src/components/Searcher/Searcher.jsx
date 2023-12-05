import React from "react";
import { useState } from "react";
import searcher from "../../assets/searcher.png";
import "./Searcher.scss";

const Searcher = ({ characters }) => {
  const [search, setSearch] = useState("");
  const searchCharacter = () => {
    const d = characters.map(() => {
      characters.filter((character) => character.name === search.target.value);
    });
    console.log(d);
  };
  return (
    <div className="searcher-container">
      <div className="searcher">
        <input
          className="searcher-input"
          onChange={(value) => setSearch(value)}
          type="text"
        />
        <button onClick={searchCharacter}>
          <img src={searcher} alt="search icon" />
        </button>
      </div>
    </div>
  );
};

export default Searcher;
