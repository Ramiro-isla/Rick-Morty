import React from "react";
import CardFavouriteCharacter from "../../components/CardFavouriteCharacter/CardFavouriteCharacter";
import HeaderComponent from "../../components/Header/HeaderComponent";
import "./FavourtesCharacters.scss";

const FavouritesCharacters = ({
  favouriteCharacter,
  deleteFavouriteCharacter,
}) => {
  return (
    <div className="favourites-characters-container">
      <HeaderComponent />
      <div className="Card-favourite-character">
        {favouriteCharacter.length === 0 && <h2>No hay ningún usuario</h2>}
        {favouriteCharacter.map((favouriteCharacter) => (
          <div>
            <CardFavouriteCharacter
              key={favouriteCharacter.id}
              favouriteCharacter={favouriteCharacter}
              deleteFavouriteCharacter={deleteFavouriteCharacter}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesCharacters;
