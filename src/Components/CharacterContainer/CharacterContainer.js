import React from 'react';
import './CharacterContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard.js';
import PropTypes from 'prop-types';

const CharacterContainer = ({ characters, resetCharacters, handleFavorites }) => {
  const characterInfo = characters.map(character => {
    return(
      <CharacterCard
        {...character}
        handleFavorites={handleFavorites}
        key={character.character}
        resetCharacters={resetCharacters}
      />
    )
  });
  return(
    <main className='character-container'>
      <div className="fade"></div>
      <section className='starwars-scroll'>
        <div className='scroll-window'>
          <div className='scroll-content'>
            <p className='title'>STAR WARS</p>
          </div>
            <p className='scroll-p'>{characters[0].openingCrawl}</p>
        </div>
      </section>
      <section className='section-character-container'>
        {characterInfo}
      </section>
    </main>
  )
}

export default CharacterContainer;

CharacterContainer.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  resetCharacters: PropTypes.func,
}
