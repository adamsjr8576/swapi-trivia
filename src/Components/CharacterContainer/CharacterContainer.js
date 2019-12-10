import React from 'react';
import './CharacterContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard.js';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterContainer = ({ characters, resetCharacters, handleFavorites }) => {
  const characterInfo = characters.map(character => {
    return(
      <CharacterCard
        {...character}
        handleFavorites={handleFavorites}
        key={character.character}
      />
    )
  });
  return(
    <main className='character-container'>
      <Link to='/movies' className='link-back-movies'>
        <button className='button-movies' onClick={() => resetCharacters()}>Return to Movies</button>
      </Link>
      <section className='starwars-scroll'>
      <div className="fade"></div>
        <div className='scroll-window'>
          <div className='scroll-content'>
            <p className='title'>Episode IV</p>
            <p className='subtitle'>A New Hope</p>
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
