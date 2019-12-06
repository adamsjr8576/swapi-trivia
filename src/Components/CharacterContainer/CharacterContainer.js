import React from 'react';
import './CharacterContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard.js';

const CharacterContainer = ( { characters }) => {
  console.log(characters)
  const characterInfo = characters.map(character => {
    return(
      <CharacterCard
        {...character}
      />
    )
  })
  return(
    <div>
      <h4>{characters[0].opening_crawl}</h4>
      <article>
        {characterInfo}
      </article>
    </div>
  )
}

export default CharacterContainer;
