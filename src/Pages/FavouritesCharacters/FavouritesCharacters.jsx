import React from "react";
import like from "../../assets/like.png";
import likeRed from "../../assets/like-red.png";
import "./CardCharacter.scss";
import { useState } from "react";

const FavouritesCharacters = ({ favouriteCharacter }) => {
  const [favourite, setFavourite] = useState(false);

  return (
    <section className="card-container">
      <img src={favouriteCharacter.image} alt={`${favouriteCharacter.name}`} />
      <h2>
        {favouriteCharacter.name.length > 22
          ? favouriteCharacter.name.substring(0, 23) + "..."
          : favouriteCharacter.name}
      </h2>
      <div>
        <p>Gender: {favouriteCharacter.gender}</p>
        <p>Specie: {favouriteCharacter.species}</p>
        <button onClick={() => i(favouriteCharacter)}>
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

export default FavouritesCharacters;
