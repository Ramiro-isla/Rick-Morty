import React, { useState, useEffect } from "react";
import like from "../../assets/like.png";
import likeRed from "../../assets/like-red.png";
import "./CardCharacter.scss";

const CardCharacter = ({
  character,
  characters,
  favouriteCharacter,
  setFavouriteCharacter,
}) => {
  const [favourite, setFavourite] = useState(
    favouriteCharacter.some((favCharacter) => favCharacter.id === character.id)
  );

  useEffect(() => {
    setFavourite(
      favouriteCharacter.some(
        (favCharacter) => favCharacter.id === character.id
      )
    );
  }, [favouriteCharacter, character.id]);

  const addFavourite = (ev) => {
    const isAlreadyFavourite = favouriteCharacter.some(
      (favCharacter) => favCharacter.id === ev.id
    );
    if (!isAlreadyFavourite) {
      const filteredCharacter = characters
        .filter((character) => character.id === ev.id)
        .shift();
      const newcharacters = [...favouriteCharacter, filteredCharacter];
      setFavouriteCharacter(newcharacters);
    } else {
      alert("El personaje ya está en la lista de favoritos.");
    }
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
