import React from 'react';
import './CharacterCard.scss';
import PropTypes from 'prop-types';
import images from '../.././images/images.js';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character, creature, name, openingCrawl, population, relatedFilms, species, resetCharacters, handleFavorites }) => {
  const films = relatedFilms.map((film, index) => <p className='h2-relatedFilm' key={index}>{film.relatedFilms}</p>);
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
        <h2 className='h2-character-header'>{character}</h2>
        <button className='button-favorites' onClick={ () => {handleFavorites(characterInfo)} }>
          <img className='favorites-img' src={images.heart} alt='heart icon for favorites' />
        </button>
      </header>
      <section className='section-character'>
        <h2 className='h2-character'>Species: {species}</h2>
        <h2 className='h2-character'>Creature: {creature}</h2>
        <h2 className='h2-character'>Name: {name}</h2>
        <h2 className='h2-character-population'>Population: {population}</h2>
        <h2 className='h2-films'>Films: </h2>
            {films}
      </section>
      <Link to='/movies' className='link-back-movies'>
        <button className='button-movies' onClick={() => resetCharacters()}>Return to Movies</button>
      </Link>
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
