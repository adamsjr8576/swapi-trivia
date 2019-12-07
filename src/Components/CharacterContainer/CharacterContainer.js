import React from 'react';
import './CharacterContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard.js';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterContainer = ( { characters, resetCharacters }) => {
  const characterInfo = characters.map(character => {
    return(
      <CharacterCard
        {...character}
        key={character.character}
      />
    )
  })
  return(
    <main className="character-container">
      <Link to="/movies">
        <button className="button-movies" onClick={() => resetCharacters()}>Return to Movies</button>
      </Link>
      <p className="opening-crawl">{characters[0].openingCrawl}</p>
      <section className="section-character-container">
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
