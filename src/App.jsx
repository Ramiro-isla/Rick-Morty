import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Characters from "./Pages/Characters/Characters";
import FavouritesCharacters from "./Pages/FavouritesCharacters/FavouritesCharacters";

function App() {
  const initialFavouriteCharacter =
    JSON.parse(localStorage.getItem("favouriteCharacter")) || [];
  const [favouriteCharacter, setFavouriteCharacter] = useState(
    initialFavouriteCharacter
  );

  const deleteFavouriteCharacter = (character) => {
    const fiteredCharacter = favouriteCharacter.filter(
      (favouriteCharacter) => favouriteCharacter !== character
    );
    localStorage.setItem(
      "favouriteCharacter",
      JSON.stringify(fiteredCharacter)
    );
    setFavouriteCharacter(fiteredCharacter);
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route
          path="/characters"
          element={
            <Characters
              favouriteCharacter={favouriteCharacter}
              setFavouriteCharacter={setFavouriteCharacter}
            />
          }
        />
        <Route path="/register" element={<Characters />} />
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
