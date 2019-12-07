import React from 'react';
import './CharacterCard.scss';

const CharacterCard = ({ character, creature, name, openingCrawl, population, relatedFilms, species }) => {
  const films = relatedFilms.map((film, index) => <h2 key={index}>{film.relatedFilms}</h2>)
  return(
    <article className='character-card'>
        <h2>{character}</h2>
        <h2>{species}</h2>
        <h2>{creature}</h2>
        <h2>{name}</h2>
        <h2>{population}</h2>
        {films}
    </article>
  )

}

export default CharacterCard;
