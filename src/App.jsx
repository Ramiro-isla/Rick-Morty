import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Characters from "./Pages/Characters/Characters";
function App() {
  const [favouriteCharacter, setFavouriteCharacter] = useState([]);

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
            <favouriteCharacter favouriteCharacter={favouriteCharacter} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
