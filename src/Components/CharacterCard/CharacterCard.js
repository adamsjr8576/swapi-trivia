import React from 'react';
import './CharacterCard.scss';
import PropTypes from 'prop-types';
import images from '../.././images/images.js'

const CharacterCard = ({ character, creature, name, openingCrawl, population, relatedFilms, species, handleFavorites }) => {
  const films = relatedFilms.map((film, index) => <h2 className='h2-character' key={index}>{film.relatedFilms}</h2>);
  const characterInfo = {
    character: character,
    creature: creature,
    name: name,
    population: population,
    relatedFilms: relatedFilms,
    species: species
  }
  return(
    <article className='character-card'>
      <header className='header-character'>
        <h2>{character}</h2>
        <button className='button-favorites' onClick={ () => {handleFavorites(characterInfo)} }>
          <img className='favorites-img' src={images.heart} alt='heart icon for favorites' />
        </button>
      </header>
      <section className='section-character'>
        <h2 className='h2-character'>{species}</h2>
        <h2 className='h2-character'>{creature}</h2>
        <h2 className='h2-character'>{name}</h2>
        <h2 className='h2-character'>{population}</h2>
        {films}
      </section>
    </article>
  )

}

export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.string,
  creature: PropTypes.string,
  name: PropTypes.string,
  openingCrawl: PropTypes.string,
  population: PropTypes.string,
  relatedFilms: PropTypes.arrayOf(PropTypes.object),
  species: PropTypes.string,
  characterInfo: PropTypes.func
}
