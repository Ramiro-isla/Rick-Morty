import React, { useState, useEffect } from "react";
import clear from "../../assets/clear.png";
import "./Searcher.scss";

const Searcher = ({ characters, setCharacters, setIsSearching }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      setIsSearching(false);
      setCharacters(characters);
      return;
    }

    setIsSearching(true);
    const results = characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
    setCharacters(results);
  }, [search, characters, setCharacters, setIsSearching]);

  return (
    <div className="searcher-container">
      <div className="searcher">
        <input
          className="searcher-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search characters..."
        />
        <button onClick={() => setSearch("")}>
          <img src={clear} alt="clear search icon" />
        </button>
      </div>
    </div>
  );
};

export default Searcher;
