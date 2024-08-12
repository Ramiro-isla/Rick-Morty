import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import Pagination from "../../components/Pagination/Pagination";
import RickYMorty from "../../components/RickYMorthy/RickYMorty";
import Searcher from "../../components/Searcher/Searcher";
import "./Characters.scss";

const Characters = ({ favouriteCharacter, setFavouriteCharacter }) => {
  const [characters, setCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const getCharacters = (url = "https://rickandmortyapi.com/api/character") => {
    const splitUrl = url.split("=")[1];
    if (splitUrl) setPage(splitUrl);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.results);
        setAllCharacters(res.results);
        setInfo(res.info);
      })
      .catch((error) => console.log("Error al recoger los datos", error));
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="characters-Container">
      <HeaderComponent favouriteCharacter={favouriteCharacter} />
      <Searcher
        characters={allCharacters}
        setCharacters={setCharacters}
        setIsSearching={setIsSearching}
      />
      {characters.length ? (
        <RickYMorty
          characters={characters}
          setFavouriteCharacter={setFavouriteCharacter}
          favouriteCharacter={favouriteCharacter}
        />
      ) : (
        <p>No characters found</p>
      )}
      {!isSearching && (
        <Pagination
          getCharacters={getCharacters}
          page={page}
          setPage={setPage}
          info={info}
        />
      )}
    </div>
  );
};

export default Characters;
