export const getAllMovies = () => {
  return fetch('https://swapi.co/api/films/')
  .then(response => {
    if(!response.ok) {
      throw Error('Error fetching movies')
    }
    return response.json()
  })
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
  .then(response => res.json())
  .then(data => ({
    species: data.name,
    creature: data.classification,
    character: character.name
  }))
}

export const getCharacterRelatedFilm = (film) => {
  return fetch(film)
  .then(response => res.json())
  .then(data => ({relatedFilms: data.title}))
}

export const getCharacter = (character) => {
  return fetch(character)
  .then(response => res.json())
}