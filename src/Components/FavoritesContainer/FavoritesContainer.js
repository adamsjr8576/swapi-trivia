import React from 'react';
import { Link } from 'react-router-dom';
import './FavoritesContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard.js';
import PropTypes from 'prop-types';


const FavoritesContainer = ({ favorites, handleFavorites, resetCharacters }) => {
  const favoriteCards = favorites.map(character => {
    return(
      <CharacterCard
        {...character}
        key={character.character}
        handleFavorites={handleFavorites}
        resetCharacters={resetCharacters}
      />
    )
  });
  return (
    favorites.length > 0 ?
    <main className='character-container'>
      <Link to='/movies' className='link-back-movies'>
        <button className='button-movies button1' onClick={() => resetCharacters()}>Return to Movies</button>
      </Link>
      <section className="section-character-container">
        {favoriteCards}
      </section>
    </main>
    :
    <main className='no-favorites-main'>
      <Link to='/movies' className='link-back-movies'>
        <button className='button-movies button2' onClick={() => resetCharacters()}>Return to Movies</button>
      </Link>
      <section className='no-favorites-section'>
        <p className='no-favorites-header'>Choose Some Favorite Characters!!!</p>
      </section>
    </main>
  );
}

export default FavoritesContainer;

FavoritesContainer.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object),
  handleFavorites: PropTypes.func,
  resetCharacters: PropTypes.func
}
