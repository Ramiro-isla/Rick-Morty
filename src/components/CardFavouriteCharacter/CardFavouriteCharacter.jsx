import React from "react";
import like from "../../assets/like.png";
import likeRed from "../../assets/like-red.png";
import "./CardCharacter.scss";
import { useState } from "react";

const CardFavouriteCharacter = ({
  character,
}) => {

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

export default CardFavouriteCharacter;
