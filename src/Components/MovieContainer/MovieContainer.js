import React from 'react';
import './MovieContainer.scss';
import MovieCard from '../MovieCard/MovieCard.js';
import PropTypes from 'prop-types';
import images from '../.././images/images.js';

const MovieContainer = ({ movieCards, getCharacterData }) => {
  const movies = movieCards.sort((a, b) => a.episode_id - b.episode_id).map(card => {
  const moviePosters = Object.keys(images.posters).find(posterTitle => {
    return posterTitle === card.title
  })
    return(
      <MovieCard 
        title={card.title}
        episode_id={card.episode_id}
        release_date={card.release_date}
        key={card.episode_id}
        getCharacterData={getCharacterData}
        poster={images.posters[moviePosters]}
      />
    );
  });
  return(
    <section>
      {movies}
    </section>
  );
};

export default MovieContainer;

MovieContainer.propTypes = {
  movieCards: PropTypes.arrayOf(PropTypes.object),
}
