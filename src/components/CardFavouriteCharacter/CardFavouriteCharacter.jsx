import React from "react";
import Trash from "../../assets/trash.png";
import "./CardFavouriteCharacter.scss";

const CardFavouriteCharacter = ({
  favouriteCharacter,
  deleteFavouriteCharacter,
}) => {
  return (
    <section className="card-favourite-container">
      <img
        className="card-favourite-image"
        src={favouriteCharacter.image}
        alt={`${favouriteCharacter.name}`}
      />
      <h2 className="card-favourite-name">
        {favouriteCharacter.name.length > 22
          ? favouriteCharacter.name.substring(0, 23) + "..."
          : favouriteCharacter.name}
      </h2>
      <div className="card-favourites-text-container">
        <p>Gender: {favouriteCharacter.gender}</p>
        <p>Specie: {favouriteCharacter.species}</p>
      </div>
      <button
        className="card-favourites-button"
        onClick={() => deleteFavouriteCharacter(favouriteCharacter)}
      >
        <img className="card-favourites-button-image" src={Trash} alt="trash" />
      </button>
    </section>
  );
};

export default CardFavouriteCharacter;
