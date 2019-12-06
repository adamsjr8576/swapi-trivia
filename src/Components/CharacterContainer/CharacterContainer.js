import React from 'react';
import './CharacterContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard.js';

const CharacterContainer = ( { characters }) => {
  const characterInfo = characters.map(character => {
    return(
      <CharacterCard
        {...character}
        // key="character.character"
      />
    )
  })
  return(
    <main className="character-container">
      <p className="opening-crawl">{characters[0].openingCrawl}</p>
      <section className="section-character-container">
        {characterInfo}
      </section>
    </main>
  )
}

export default CharacterContainer;
