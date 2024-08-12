import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Characters from "./Pages/Characters/Characters";
import FavouritesCharacters from "./Pages/FavouritesCharacters/FavouritesCharacters";

function App() {
  const [favouriteCharacter, setFavouriteCharacter] = useState([]);

  const deleteFavouriteCharacter = (character) => {
    const fiteredCharacter = favouriteCharacter.filter(
      (favouriteCharacter) => favouriteCharacter !== character
    );
    setFavouriteCharacter(fiteredCharacter);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Characters
              favouriteCharacter={favouriteCharacter}
              setFavouriteCharacter={setFavouriteCharacter}
            />
          }
        />
        <Route
          path="/MyFavourites"
          element={
            <FavouritesCharacters
              favouriteCharacter={favouriteCharacter}
              deleteFavouriteCharacter={deleteFavouriteCharacter}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
