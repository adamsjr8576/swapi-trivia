export const getAllMovies = () => {
  return fetch('https://swapi.co/api/films/')
  .then(response => {
    if(!response.ok) {
      throw Error('Error fetching movies')
    }
    return response.json()
  })
  .then(data => {
    return data.results.map(movie => {
      return {
        title: movie.title,
        episode_id: movie.episode_id,
        release_date: movie.release_date,
        characters: movie.characters,
        opening_crawl: movie.opening_crawl
      }
    })
  });
}

export const getCharacterHomeworld = (character) => {
  return fetch(character.homeworld)
  .then(response => {
    if(!response.ok) {
      throw Error('Error fetching homeworld')
    }
    return response.json()
  })
  .then(data => ({
    name: data.name,
    population: data.population
    }))
}

export const getCharacterSpecies = (character) => {
  return fetch(character.species)
  .then(response => {
    if(!response.ok) {
      throw Error('Error fetching species')
    }
    return response.json()
  })
  .then(data => ({
    species: data.name,
    creature: data.classification,
    character: character.name
  }))
}

export const getCharacterRelatedFilm = (film) => {
  return fetch(film)
  .then(response => {
    if(!response.ok) {
      throw Error('Error fetching films')
    }
    return response.json()
  })
  .then(data => ({relatedFilms: data.title}))
}

export const getCharacter = (character) => {
  return fetch(character)
  .then(response => {
    if(!response.ok) {
      throw Error('Error fetching character')
    }
    return response.json()
  });
}
