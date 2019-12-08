import React from 'react';
import { Link } from 'react-router-dom';
import './FavoritesContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard.js';


const FavoritesContainer = ({ favorites, handleFavorites, resetCharacters }) => {
  const favoriteCards = favorites.map(character => {
    return(
      <CharacterCard
        {...character}
        key={character.character}
        handleFavorites={handleFavorites}
      />
    )
  });
  return (
    <main className="character-container">
      <Link to="/movies" className="link-back-movies">
        <button className="button-movies" onClick={() => resetCharacters()}>Return to Movies</button>
      </Link>
      <section className="section-character-container">
        {favoriteCards}
      </section>
    </main>
  );
}

export default FavoritesContainer;
