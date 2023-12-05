import "./RickyMorty.scss";
import CardCharacter from "../CardCaracter/CardCharacter";

const RickYMorty = ({
  characters,
  favouriteCharacter,
  setFavouriteCharacter,
}) => {
  return (
    <div className="Rick-and-Morty">
      {characters.map((character) => (
        <div>
          <CardCharacter
            key={character.id}
            character={character}
            characters={characters}
            favouriteCharacter={favouriteCharacter}
            setFavouriteCharacter={setFavouriteCharacter}
          />
        </div>
      ))}
    </div>
  );
};

export default RickYMorty;
