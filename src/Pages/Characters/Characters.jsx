import React from "react";
import { useEffect, useState } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import Pagination from "../../components/Pagination/Pagination";
import RickYMorty from "../../components/RickYMorthy/RickYMorty";
import Searcher from "../../components/Searcher/Searcher";

const Characters = ({favouriteCharacter, setFavouriteCharacter}) => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);

  const getCharacters = (url = "https://rickandmortyapi.com/api/character") => {
    const splitUrl = url.split("=")[1];
    if (splitUrl) setPage(splitUrl);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.results);
        setInfo(res.info);
      })
      .catch((error) => console.log("Error al recoger los datos", error));
  };

  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div className="characters">
      <HeaderComponent favouriteCharacter={favouriteCharacter} />
      <Searcher characters={characters} />
      <RickYMorty
        characters={characters}
        setFavouriteCharacter={setFavouriteCharacter}
        favouriteCharacter={favouriteCharacter}
      />
      <Pagination
        getCharacters={getCharacters}
        page={page}
        setPage={setPage}
        info={info}
      />
    </div>
  );
};

export default Characters;
