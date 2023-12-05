import React from "react";
import like from "../../assets/like.png";
import likeRed from "../../assets/like-red.png";
import "./CardCharacter.scss";
import { useState } from "react";

const CardCharacter = ({
  character,
  characters,
  favouriteCharacter,
  setFavouriteCharacter,
}) => {
  const [favourite, setFavourite] = useState(false);
  const addFavourite = (ev) => {
    console.log(ev);
    const fiteredCharacter = characters.filter((character) => character == ev);
    const newcharacters = [...favouriteCharacter, fiteredCharacter];
    setFavouriteCharacter(newcharacters);
    console.log(favouriteCharacter);
    setFavourite(true);
  };

  return (
    <section className="card-container">
      <img src={character.image} alt={`${character.name}`} />
      <h2>
        {character.name.length > 22
          ? character.name.substring(0, 23) + "..."
          : character.name}
      </h2>
      <div>
        <p>Gender: {character.gender}</p>
        <p>Specie: {character.species}</p>
        <button onClick={() => addFavourite(character)}>
          {favourite ? (
            <img src={likeRed} alt="like-button" />
          ) : (
            <img src={like} alt="like-button" />
          )}
        </button>
      </div>
    </section>
  );
};

export default CardCharacter;
