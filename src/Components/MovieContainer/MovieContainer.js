import React from 'react';
import './MovieContainer.scss';
import MovieCard from '../MovieCard/MovieCard.js';

const MovieContainer = ({ movieCards }) => {
  const movies = movieCards.map(card => {
    return(
      <MovieCard 
        title={card.title}
        episode_id={card.episode_id}
        release_date={card.release_date}
        key={card.episode_id}
      />
    )
  })
  return(
    <section>
      {movies}
    </section>
  )

}

export default MovieContainer;