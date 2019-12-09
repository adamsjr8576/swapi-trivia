
export const getAllMovies = () => {
  return fetch('https://swapi.co/api/films/')
  .then(response => {
    if(!response.ok) {
      throw Error('Error fetchings movies')
    }
    return response.json()
  })
}

export const getCharacterHomeworld = (character) => {
  return fetch(character.homeworld)
  .then(res => res.json())
  .then(data => ({
    name: data.name,
    population: data.population
    }))
}

export const getCharacterSpecies = (character) => {
  return fetch(character.species)
  .then(res => res.json())
  .then(data => ({
    species: data.name,
    creature: data.classification,
    character: character.name
  }))
}

export const getCharacterRelatedFilm = (film) => {
  return fetch(film)
  .then(res => res.json())
  .then(data => ({relatedFilms: data.title}))
}