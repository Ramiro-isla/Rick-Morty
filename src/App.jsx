import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Characters from "./Pages/Characters/Characters";
import FavouritesCharacters from "./Pages/FavouritesCharacters/FavouritesCharacters";
import AuthRoute from "./components/AuthRoute/AuthRoute";

function App() {
  const [favouriteCharacter, setFavouriteCharacter] = useState([]);
  const [users, setUsers] = useState(null);

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
          exact
          path="/"
          element={<LoginPage  setUsers={setUsers} />}
        />
        <Route
          path="/characters"
          element={
            <AuthRoute
              users={users}
              component={
                <Characters
                  favouriteCharacter={favouriteCharacter}
                  setFavouriteCharacter={setFavouriteCharacter}
                />
              }
            />
          }
        />
        <Route
          path="/register"
          element={<AuthRoute users={users} component={<Characters />} />}
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
